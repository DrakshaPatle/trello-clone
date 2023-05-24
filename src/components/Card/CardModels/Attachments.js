import React, { useEffect, useRef, useState } from "react";
import "./attachment.css";
import { GrAttachment } from "react-icons/gr";
import { BsDot } from "react-icons/bs";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCardAttachment } from "../../../redux/action/card";
import { setSelectedCard } from "../../../redux/action/card";
import { updateCard } from "../../../redux/action/card";
const Attachments = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [removePopup, setRemovePopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)
  const dispatch = useDispatch();
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);


  const handleremove = () => {
    if (removePopup === false) {
      setRemovePopup(true)
      setEditPopup(false)
    }
    else {
      setRemovePopup(true)
    }
  }

  const handlecloseremovepopup = () => {
    setRemovePopup(false)

  }

  const handleEdit = () => {
    if (editPopup === false) {
      setEditPopup(true)
      setRemovePopup(false)
    }
    else {
      setEditPopup(true)
    }
  }

  const handlecloseeditpopup = () => {
    setEditPopup(false)

  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setRemovePopup(false);
        setEditPopup(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  let ArrayOfStrings = ["png", "jpeg", "jpg"];

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
  const handleSelectFile = (e) => {
    console.log("file select ", e.target.files[0]);
    let formdata = new FormData();
    formdata.append("card-attach", e.target.files[0]);
    let cardDetail = selectedCard && selectedCard;
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;
    dispatch(addCardAttachment(boardId, bucketId, cardId, formdata, async function (card) {
      console.log("image add", card)
    }));
    setShowPopup(!showPopup);
  };

  const handleClick = (attachmentId) => {
    let attachments = selectedCard && selectedCard.attachments;
    let findIndex = attachments.findIndex(
      (item) => String(item._id) === attachmentId
    );
    if (findIndex >= 0) {
      attachments.pop((item) => String(item._id) === attachmentId);
    }
    selectedCard.attachments = attachments;
    dispatch(setSelectedCard(selectedCard));
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;
    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
  };
  return (
    <>
      <div class="row mt-3">
        <div>
          <span class=" card-detail-item ">
            <GrAttachment size={25} />
          </span>
          <h6 class="  card-detail-item mt-1">
            <div class="align-self-center">Attachments</div>
          </h6>
        </div>

        {selectedCard &&
          selectedCard.attachments &&
          selectedCard.attachments.map((item) => (
            <div class="row my-2">
              <div class="  card-detail-item mt-1">
                {(() => {
                  switch (
                  item.attach_url
                    .split(".")
                  [item.attach_url.split(".").length - 1].toLowerCase()
                  ) {
                    case "png":
                      return (
                        <span class="  card-detail-item ">
                          <img
                            src={item.attach_url}
                            alt="BgImg"
                            style={{ width: "70px", height: "55px" }}
                            className="p-1"
                          />
                        </span>
                      );
                    case "jpg":
                      return (
                        <span class="  card-detail-item ">
                          <img
                            src={item.attach_url}
                            alt="BgImg"
                            style={{ width: "70px" }}
                            className=" p-1"
                          />
                        </span>
                      );
                    case "jpeg":
                      return (
                        <span class="  card-detail-item ">
                          <img
                            src={item.attach_url}
                            alt="BgImg"
                            style={{ width: "70px" }}
                            className=" p-1"
                          />
                        </span>
                      );
                    case "pptx":
                      return (
                        <span class=" card-detail-item ">
                          <span className="attachment-thumbnail ">pptx</span>
                        </span>
                      );
                  }
                })()}

                <div class="align-self-center mb-2">
                  {item && item.image_name}
                </div>
                <div>
                  <a class="boards--section ul__a" href="#">
                    <small className="ul__text">Added 7 hours ago</small>
                  </a>

                  <small>
                    <a class="  boards--section ul__a" href="#">
                      <BsDot className="ul__text" />
                      <span className="ul__text">Comment </span>
                    </a>
                    <a class=" boards--section ul__a" href="#">
                      <BsDot className="ul__text" />
                      <span
                        className="ul__text"
                        onClick={handleremove}
                      >
                        Remove{" "}
                      </span>
                    </a>
                    {removePopup ? <Card ref={popupRef} style={{ position: "fixed", right: "585px", top: "375px", width: "360px", zIndex: "1" }} className="shadow rounded-0 p-3">
                      <div className="d-flex mx-auto">
                        <h6 className="text-muted text-center mt-1">Remove attachment?</h6>
                        <i className="fa-solid fa-x text-muted" style={{
                          cursor: "pointer", position: "relative", right: "-80px", top: "6px", fontSize: "15px"
                        }} onClick={handlecloseremovepopup}></i>                      </div>
                      <hr />
                      <p className="text-center text-muted" style={{ fontSize: "16px" }}>Remove this attachment? There is no undo.

                      </p>
                      <Button variant="danger" className="mx-2" onClick={() => handleClick(item._id)} >Remove</Button>
                    </Card> : null}


                    <a class="  boards--section ul__a" href="#">
                      <BsDot className="ul__text" />
                      <span className="ul__text" onClick={handleEdit}>Edit </span>
                    </a>
                    {editPopup ? <Card ref={popupRef} style={{ position: "fixed", right: "445px", top: "170px", width: "360px", zIndex: "1" }} className="shadow rounded-0 p-3">
                      <div className="d-flex mx-auto">
                        <h6 className="text-muted text-center mt-1">Edit attachment?</h6>
                        <i className="fa-solid fa-x text-muted" style={{
                          cursor: "pointer", position: "relative", right: "-88px", top: "6px", fontSize: "15px"
                        }} onClick={handlecloseeditpopup}></i>                      </div>
                      <hr />
                      <Form>
                        <Form.Group className="mb-2 ml-10" controlId="formLink">
                          <span className="fw-bold text-muted" style={{ fontSize: "14px" }}>Link</span>
                          <Form.Control type="email" placeholder="" className="my-2" />

                        </Form.Group>
                        <Form.Group className="mb-2 ml-10" controlId="formLinkName" >
                          <span className="fw-bold text-muted m-1" style={{ fontSize: "14px" }}>Link Name (Optional)</span>
                          <Form.Control type="email" placeholder="" className="my-2" />

                        </Form.Group>


                      </Form>
                      <Button className="mx-2 " style={{ width: "100px" }}  >Update</Button>
                    </Card> : null}
                  </small>
                </div>
              </div>
            </div>
          ))}

        <div onClick={handleShow}>
          <a href="#" class="button3 boards--section ul__a p-2">
            <span className="ul__text">Add an attachment </span>
          </a>
        </div>
      </div>

      {/* ===================== start Attachments pop model ========= */}
      {showPopup ? (
        <Card
          ref={popupRef}
          className="shadow rounded-0 shadow"
          style={{
            position: "fixed",
            // right: "210px",
            top: "125px",
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
              Attach from…
              <span
                style={{ position: "relative", left: "114px" }}
                className="text-muted"
                onClick={handleClose}
              >
                <i class="fa-solid fa-xmark"></i>
              </span>
            </p>
            <hr className="mx-2" />
            <div className="Neon Neon-theme-dragdropbox">
              <input
                style={{
                  zIndex: 999,
                  opacity: 0,
                  width: 320,
                  height: 200,
                  position: "absolute",
                  right: 0,
                  left: 0,
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                name="attach_file"
                id="filer_input2"
                multiple="multiple"
                type="file"
                onChange={(e) => handleSelectFile(e)}
              />
              <div className=" ">
                <button className="button3 ul__a border-0 m-2 p-2">
                  Computer
                </button>
              </div>
            </div>
            {/* <div className=" ">
              <button
                className="button3 ul__a border-0 m-2 p-2"
                href="https://accounts.google.com/v3/signin/identifier?dsh=S906146050%3A1679051388574430&continue=https%3A%2F%2Fdrive.google.com%2F&emr=1&followup=https%3A%2F%2Fdrive.google.com%2F&ifkv=AWnogHcFZAnWaVus-1TrAjsZkfbYFc_IO-njPQ_uN1GeejteSDYDmnPaaeon8jzsCG3s8UO1e0Ua8g&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                target="_blank"
              >
                Google Drive
              </button>
            </div>
            <div className=" ">
              <button
                className="button3 ul__a border-0 m-2 p-2"
                href="https://account.box.com/login"
                target="_blank"
              >
                Box
              </button>
            </div>
            <div className=" ">
              <button
                className="button3 ul__a border-0 m-2 p-2"
                href="https://www.dropbox.com/login"
                target="_blank"
              >
                Dropbox
              </button>
            </div>
            <div className=" ">
              <button
                className="button3 ul__a border-0 m-2 p-2"
                href="https://onedrive.live.com/about/en-us/signin/"
                target="_blank"
              >
                oneDrive
              </button>
            </div>

            <hr className="mx-2" />
            <p className="mx-2 mb-0">Attach a link</p>
            <form className="p-2 mx-2">
              <input
                type="text"
                className="form-control"
                placeholder="Paste any link here…"
              />
              <button
                type="button"
                className="button3 ul__a mt-2 p-2"
                style={{ border: "none" }}
              >
                Attach
              </button>
            </form>
            <hr className="mx-2" />

            <p className="text-muted mx-2">
              Tip: You can drag and drop files and links onto cards to upload
              them.
            </p> */}
          </section>
        </Card>
      ) : null}
      {/* ===================== end Attachments pop model ========= */}
    </>
  );
};

export default Attachments;
