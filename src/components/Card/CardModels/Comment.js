import React, { useState, useEffect, useRef } from "react";
import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import { Card } from "react-bootstrap";
import { AiOutlineBars } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { updateCard,setSelectedCard } from "../../../redux/action/card";
import moment from "moment";
const Activity = () => {
  const popupRef = useRef(null);
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);
  const [showPopup, setShowPopup] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [comment,setComment]= useState("");
  const [type,setType]=useState("");
  const userid=localStorage.getItem("user_id")
  const dispatch= useDispatch();

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
  const handleAddComment = ()=>{
    let cardActivity = selectedCard && selectedCard.cardActivity;
    let date = moment(new Date()).format();
    let commentTime = moment(new Date()).format("h:mm:ss a");
    let commentDate = date.toString().slice(0, 10);
    let data = {
      content:comment,
      type,
      userId:userid,
      commentDate,
      commentTime
    };
    cardActivity.push(data);
    selectedCard.cardActivity = cardActivity;
    dispatch(setSelectedCard(selectedCard));
    console.log("Activity-------------",selectedCard)
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setShowAdd(false)
 
  }

  return (
    <>
      <div class="d-flex justify-content-between ">
        <div className="alignleft">
          <span className="boards-header-icon">
            <span>
              <AiOutlineBars size={25} />
            </span>
          </span>
          <span className="fw-bold"> Activity</span>
        </div>
        {/* <div className="alignright">
          <a class="nav-link boards--section ul__a" href="#">
            <span className="ul__text mx-2">Show details </span>
          </a>
        </div> */}
      </div>
      {showAdd ?
        <div class="new-comment">
          <div class="member ">
            <span class="popup_circle ">RS </span>
          </div>
          {/* <form> */}
            <div className="comment-frame">
              <div className="comment-box">
                {/* <textarea
                class="comment-box-input border-0"
                aria-label="Write a comment"
                placeholder="Write a comment…"
                dir="auto"
                data-autosize="true"
              ></textarea> */}

                <input
                  type="text"
                  class="form-control"
                  placeholder="Write a comment"
                  value={comment}
                  onChange={(e)=>{
                    setComment(e.target.value)
                    setType("text")
                  }}
                />
                <div className="comment-controls">
                  <button class="button3 boards--section ul__a p-2 border-0" onClick={()=>handleAddComment()}>
                    <span className="ul__text" >save </span>
                  </button>
                  <button class="button3 boards--section ul__a p-2 border-0">
                    <span className="ul__text">cancel </span>
                  </button>
                </div>
                <div class="comment-box-options">
                  <span class="comment-box-options-item  ">
                    <GrAttachment size={22} />
                  </span>
                  <span class="comment-box-options-item  "><MdOutlineAlternateEmail size={22} /></span>
                  <span class="comment-box-options-item  " onClick={handleShow}>
                    <BsEmojiSmile size={22} />
                  </span>
                </div>
              </div>
            </div>
          {/* </form> */}
        </div> : <div className="row ">
          <div class="d-flex justify-content-between my-4"
            onClick={() => setShowAdd(true)}>
            <span class="popup_circle mx-1">RS </span>
            <input
              type="text"
              class="form-control"
              placeholder="Write a comment"
            />
          </div>
        </div>

      }




      <div className="phenom">
        <div className="phenom-icon">
          <div className="member">
          <span class="popup_circle ">RS </span>  
          </div>
        </div>
        <div className="phenom-desc">
          <span className="font-weight-bold">Ragini Singh</span>
          <span className="inline-spacer"></span>
          {/* <span className="phenom-date ">2 hour ago </span> */}
        </div>
        <div className="row my-2 ms-1 comment-container">
          <div className="action-comment ">
            <div className="current-comment">
              <p>workspace member ui</p>
            </div>
          </div>
        </div>
        <div className="phenom-reactions">
          <div className="phenom-meta">
            <a href="#">Reply</a>
          </div>
        </div>
      </div>

      {/* ============= Start Emoji pop model  ============= */}
      {showPopup ? (
        <Card
          ref={popupRef}
          className="shadow rounded-0 shadow"
          style={{
            position: "fixed",
            right: "210px",
            top: "110px",
            width: "370px",
            zIndex: '1',
          }}
        >
          <section>
            <p
              className=" text-center text-muted mt-3"
              style={{ fontSize: "18px" }}
            >
              {" "}
              Emoji
              <span
                style={{ position: "relative", left: "114px" }}
                className="text-muted"
                onClick={handleClose}
              >
                <i class="fa-solid fa-xmark"></i>
              </span>
            </p>
            <hr className="mx-2" />

            <EmojiPicker />
          </section>
        </Card>
      ) : null}
      {/* ============= End emoji pop model  ============= */}
    </>
  );
};

export default Activity;
