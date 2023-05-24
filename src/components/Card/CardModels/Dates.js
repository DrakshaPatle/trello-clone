import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
// import { AiOutlineUser } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../../redux/action/card";
import { setSelectedCard } from "../../../redux/action/card";
const Dates = () => {
  const popupRef = useRef(null);
  const [show, setshow] = useState(false);
  // const [value, onChange] = useState();
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot)
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(
    selectedCard && selectedCard.cardDate && selectedCard.cardDate.startDate
      ? selectedCard.cardDate.startDate
      : '');
  const [dueDate, setDueDate] = useState(
    selectedCard && selectedCard.cardDate && selectedCard.cardDate.dueDate
      ? selectedCard.cardDate.dueDate
      : ""
  );
  const [dueTime, setDueTime] = useState(
    selectedCard && selectedCard.cardDate && selectedCard.cardDate.dueTime
      ? selectedCard.cardDate.dueTime
      : ""
  );
  const [isChecked, setIsChecked] = useState(false);
  const [startDateisChecked, setstartDateisChecked] = useState(false);

  const handleDateChange = (date) => {
    setIsChecked(true)
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1
      }-${date.getFullYear()}`;

    // Get the current time in "HH:mm" format
    const now = new Date();
    const startDate = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dateformat = startDate + '-' + month + '-' + year;
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    const currentTime = `${twelveHourFormat}:${minutes} ${ampm}`

    // Update the dueDate and dueTime states
    setStartDate(dateformat)
    setDueDate(formattedDate);
    setDueTime(currentTime);
  };


  const handleTimeChange = (e) => {
    setDueTime(e.target.value);
  };
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleAddDate()

      setshow(false);


    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShow = () => {
    if (show === false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  const handleClose = () => {
    setshow(false);
  };



  // const handleAddDate = () => {
  //   let cardDate = selectedCard && selectedCard.cardDate;

  //   console.log(cardDate,"cardDate")
  //   let  data = {
  //     startDate:"24-March-2023", 
  //     dueDate:"24-March-2023", 
  //     dueTime:"10:18",
  //     status:"pending"
  //   }
  //   // if(cardDate)
  //   // {

  //   // }else{
  //   //   cardDate.startDate ="25-March-2023";
  //   //   cardDate.dueDate="25-March-2023";
  //   //   cardDate.dueTime="10:15";
  //   //   cardDate.status="complete"
  //   //   selectedCard.cardDate = cardDate;
  //   // }
  //     selectedCard.cardDate = data;

  //   dispatch(setSelectedCard(selectedCard));
  //   let cardId = selectedCard && selectedCard._id;
  //   let bucketId = selectedBucket && selectedBucket._id;
  //   let boardId = selectedBucket && selectedBucket.boardId;
  //   dispatch(updateCard(boardId, bucketId, cardId, selectedCard));

  // };


  const handleAddDate = () => {
    let cardDate = selectedCard && selectedCard.cardDate;

    let data = {
      startDate: startDate,
      dueDate: dueDate,
      dueTime: dueTime,
      status: "pending",
    };

    selectedCard.cardDate = data;

    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;
    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
  
    setTimeout(() => {
      setshow(false)
    }, 1000);
  };



  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleStartDateCheckChange = (event) => {
    setstartDateisChecked(event.target.checked);
  }
  return (
    <>
      {/* ....................Dates Toggle Button.................... */}

      <div onClick={handleShow}>
        <div className=" ">
          <a class="card__join">
            <span class="btn__text">
              {" "}
              <CiCalendarDate size={17} /> Dates
            </span>
          </a>
        </div>
      </div>

      {/* ....................Dates Popup Card.................... */}
      {show ? (
        <Card
          ref={popupRef}
          className="shadow rounded-0 shadow overflow-scroll"
          style={{
            position: "fixed",
            right: "210px",
            top: "110px",
            width: "373px",
            height: "618px",
            zIndex: "1",
          }}
        >
          <section>
            <div style={{ position: "fixed", background: "white" }}>
              <p
                className=" text-center text-muted mt-3"
                style={{ fontSize: "18px" }}
              >
                {" "}
                Dates
                <span
                  style={{ position: "relative", left: "134px" }}
                  className="text-muted"
                  onClick={handleClose}
                >
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </p>

              <hr className="mx-2" style={{ width: "342px" }} />
            </div>

            {/* ....................Calender Section.................... */}
            <div style={{ marginTop: "70px" }}>
              <Calendar
                onChange={handleDateChange}
                // value={}
                className="border-0 text-muted text-decoration-none m-2"

              />
            </div>

            {/* ....................Date Section.................... */}

            <div className="m-2">
              <p
                className={` fw-bold mx-2 ${startDateisChecked ? "text-primary" : "text-muted"
                  }`}>Start Date</p>
              <Form>
                <Form.Group className="mb-3 d-flex ">
                  <Form.Check
                    type="checkbox"
                    className="mx-3"
                    style={{
                      position: "relative",
                      top: "5px",
                      fontSize: "20px",
                    }}
                    onClick={handleStartDateCheckChange}

                  />
                  <Form.Control
                    placeholder="D/M/YYYY"

                    style={{ width: "140px" }}
                    onChange={(event) => setStartDate(event.target.value)}
                    value={startDate}
                    disabled={!startDateisChecked}
                  />
                </Form.Group>
              </Form>
            </div>

            {/* ....................Due Date Section.................... */}

            <div className="m-2">
              <p className={` fw-bold mx-2 ${isChecked ? "text-primary" : "text-muted"
                }`}

              >Due Date</p>
              <Form>
                <Form.Group className="mb-3 d-flex ">
                  <Form.Check
                    type="checkbox"
                    className="mx-3"
                    style={{
                      position: "relative",
                      top: "5px",
                      fontSize: "20px",
                    }}
                    checked={isChecked}
                    onChange={handleCheckChange}

                  />
                  <Form.Control placeholder="" style={{ width: "110px" }}
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                    disabled={!isChecked}
                  />
                  <Form.Control
                    placeholder=""
                    className="mx-2"
                    style={{ width: "110px" }}
                    onChange={handleTimeChange}
                    value={dueTime}
                    disabled={!isChecked}
                  />
                </Form.Group>
              </Form>
            </div>

            {/* ....................Set Due Date Reminder Section.................... */}

            <div>
              <p className="text-muted  fw-bold mx-3">Set due date reminder</p>
              <Form.Select
                aria-label="Default select example"
                className="mx-3"
                style={{ width: "325px" }}
              >
                <option className="m-3" value="0" style={{ fontSize: "19px" }}>
                  None
                </option>
                <option className="p-3" value="1" style={{ fontSize: "19px" }}>
                  At time of due date
                </option>
                <option value="3" style={{ fontSize: "19px" }}>
                  5 Minutes before
                </option>
                <option style={{ fontSize: "19px", height: "90px" }}>
                  10 Minutes before
                </option>
                <option style={{ fontSize: "19px" }}>15 minutes before</option>
                <option style={{ fontSize: "19px" }}>1 Hour before</option>
                <option style={{ fontSize: "19px" }}>2 Hours before</option>
                <option style={{ fontSize: "19px" }}>1 Day before</option>
                <option style={{ fontSize: "19px" }}>2 Days before</option>
              </Form.Select>
            </div>
            <p className="text-muted mx-3 my-2" style={{ fontSize: "17px" }}>
              Reminders will be sent to all members and watchers of this card
            </p>

            {/* ....................Button Section.................... */}

            <div className="d-grid gap-2 m-3 ">
              <Button
                variant="primary"
                className="rounded-1 p-0"
                size="lg"
                style={{ fontSize: "17px", height: "42px" }}
                onClick={() => handleAddDate()}
              >
                Save
              </Button>
              <Button
                size="lg"
                className="text-muted border-0 rounded-1"
                style={{
                  fontSize: "17px",
                  height: "45px",
                  background: "#eeee",
                }}
                onClick={handleClose}
              >
                Remove
              </Button>
            </div>
          </section>
        </Card>
      ) : null}
    </>
  );
};

export default Dates;
