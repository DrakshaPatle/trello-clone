import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../../redux/action/card";
import { setSelectedCard } from "../../../redux/action/card";

const CheckList = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [checklistTitle, setChecklistTitle] = useState("Checklist");
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);
  
  const dispatch = useDispatch();
  // console.log("checklist ---------", selectedCard)

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShow = () => {
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleClose = () => {
    setShowPopup(!showPopup);
  };
  const handleAddChecklist = () => {
    let checklist = selectedCard && selectedCard.checklist;

    let data = {
      checklistTitle,
      checklistItem: [],
    };
    checklist.push(data);
    selectedCard.checklist = checklist;
    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setShowPopup(!showPopup);
    setChecklistTitle("Checklist");
  };

  const handleAddDate = () => {
    let cardDate = selectedCard;

    let  data = {
      startDate:"24-March-2023", 
      dueDate:"",
      dueTime:"",
      status:"pending"
    }
    selectedCard.cardDate = data;
    dispatch(setSelectedCard(selectedCard));
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;
    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
  
  };
  return (
    <>
      <div className= "" onClick={handleShow}>
        <a class="card__join ">
          <span class="btn__text">
            {" "}
            <AiOutlineCheckSquare size={17} /> Checklist
          </span>
        </a>
      </div>

      {showPopup ? (
        <Card
          ref={popupRef}
          className="shadow rounded-0 shadow"
          style={{
            position: "fixed",
            right: "210px",
            top: "110px",
            width: "370px",
            zIndex: "1",
          }}
        >
          <section>
            <p
              className=" text-center text-muted mt-3"
              style={{ fontSize: "18px" }}
            >
              {" "}
              Add checklist
              <span
                style={{ position: "relative", left: "114px" }}
                className="text-muted"
                onClick={handleClose}
              >
                <i class="fa-solid fa-xmark"></i>
              </span>
            </p>
            <hr className="" />

            <small className="text__title ms-3">Title</small>

            <div class="mb-3 mx-3">
              <input
                class="form-control form-control-sm"
                value={checklistTitle}
                onChange={(e) => setChecklistTitle(e.target.value)}
              />
            </div>

            <small className="text-muted ms-3 mx-2">Copy items from…</small>
            <div className="mx-3 my-2">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>(None)</option>
                <optgroup label="Boards functionality">
                  <option value="1">Board</option>
                  <option value="2">Bucket</option>
                  <option value="3">Card</option>
                </optgroup>
                <optgroup label="Dashboard functionality">
                  <option value="1">Dashboard</option>
                </optgroup>
              </select>
            </div>

            <div>
              <Button
                className="checklist_btn"
                
                onClick={() => handleAddChecklist()}
              >
                Add
              </Button>
            </div>
          </section>
        </Card>
      ) : null}
    </>
  );
};

export default CheckList;
