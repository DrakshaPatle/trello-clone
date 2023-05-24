import React, { useState } from "react";
import "./editCard.css";
import { BsCreditCard2BackFill } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlinePlus,
  AiOutlineBars,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineShareAlt,
  AiOutlineCopy,
  AiOutlineArrowRight,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { BsDot, BsArchive } from "react-icons/bs";
import { BiLabel, BiCopyAlt } from "react-icons/bi";
import { CiInboxIn, CiCalendarDate, CiInboxOut } from "react-icons/ci";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import bgImg3 from "../../assets/images/bgimg-3.avif";



const AddCard = () => {

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  ); 

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        modal
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <span className="popup-header-icon">
                  <BsCreditCard2BackFill />
                </span>
                Add card Modal it should be mobile responsive
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <p className="popup_list">
              in list <a>To Do</a> <AiOutlineEye />{" "}
            </p>
            <div className="modal-body">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9">
                  <div className="row">
                    <div className="card-detail-data">
                      <div className="card-detail-item ">
                        <h6 className="text-center">Member</h6>
                        <span class="popup_circle mx-1">RS </span>
                        <span class="popup_circle mx-1">
                          <AiOutlinePlus size={20} />
                        </span>
                      </div>
                      <div className="card-detail-item ">
                        <h6 className="text-center">Notifications</h6>

                        <span class=" pop_section">
                          {" "}
                          <AiOutlinePlus size={20} /> Watch{" "}
                        </span>
                      </div>
                      <div className="card-detail-item ">
                        <h6 className="text-center">Due date</h6>
                        <div class="form-check  pop_section">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <span class=""> Today at 11:30 AM </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="  my-4">
                      <span class="  card-detail-item ">
                        <HiMenuAlt2 size={25} />
                      </span>
                      <h6 class="  card-detail-item mt-1">
                        <div class="align-self-center">Description</div>
                      </h6>
                      <div class=" card-detail-item  pop_section">
                        <a href="#" role="button" class=" nav-link">
                          Edit
                        </a>
                      </div>
                    </div>
                    <div className=" ">
                      {/* <Editor
                        wrapperClassName="wrapper"
                        editorClassName="editor"
                        toolbarClassName="toolbar"
                      /> */}

                      <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                      />
                    </div>
                    <div class=" my-4">
                      <span class="  card-detail-item ">
                        <GrAttachment size={25} />
                      </span>
                      <h6 class="  card-detail-item mt-1">
                        <div class="align-self-center">Attachments</div>
                      </h6>
                    </div>
                    <div class=" my-4">
                      <span class="  card-detail-item ">
                        <img
                          src={bgImg3}
                          alt="BgImg"
                          style={{ width: "70px" }}
                          className=" p-1"
                        />
                      </span>
                      <div class="  card-detail-item mt-1">
                        <div class="align-self-center">Image PNG </div>
                        <div>
                          <a class="boards--section ul__a" href="#">
                            <small className="ul__text">
                              Added 7 hours ago
                            </small>
                          </a>

                          <small>
                            <a class="  boards--section ul__a" href="#">
                              <BsDot className="ul__text" />
                              <span className="ul__text">Comment </span>
                            </a>
                            <a class=" boards--section ul__a" href="#">
                              <BsDot className="ul__text" />
                              <span className="ul__text">Delete </span>
                            </a>
                            <a class="  boards--section ul__a" href="#">
                              <BsDot className="ul__text" />
                              <span className="ul__text">Edit </span>
                            </a>
                          </small>
                        </div>
                      </div>
                      <div>
                        <a href="#" class="button3 boards--section ul__a p-2">
                          <span className="ul__text">Add an attachment </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between ">
                    <div className="alignleft">
                      <span className="boards-header-icon">
                        <span>
                          <AiOutlineBars size={25} />
                        </span>
                      </span>
                      <span className="fw-bold"> Activity</span>
                    </div>
                    <div className="alignright">
                      <ul className="nav">
                        <li class="nav-item">
                          <a class="nav-link boards--section ul__a" href="#">
                            <span className="ul__text">Show details </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div class="d-flex justify-content-between my-4">
                      <span class="popup_circle mx-1">RS </span>

                      <input
                        type="text"
                        class="form-control  "
                        placeholder="Write a comment"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3">
                  <div className="row">
                    <div class="d-flex justify-content-between">
                      <div className="">
                        <p>Suggested</p>
                      </div>
                      <div className="">
                        <AiOutlineSetting />
                      </div>
                    </div>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineUser size={17} /> Join
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <small className="my-2">Add to card</small>
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineUser size={17} /> Members
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <BiLabel size={17} /> Labels
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineCheckSquare size={17} /> Checklist
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <CiCalendarDate size={17} /> Dates
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <GrAttachment size={17} /> Attachment
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <CiInboxIn size={17} /> Cover
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <CiInboxOut size={17} /> Custom Fields
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <small className="my-2">Power-Ups</small>
                    <a href="#" class=" ul__a ">
                      <span class="btn__text">
                        <AiOutlinePlus size={17} /> Add Power Ups
                      </span>
                    </a>
                  </div>
                  <div className="row">
                    <div class="d-flex justify-content-between">
                      <div className="">
                        <p>Automation</p>
                      </div>
                      <div className="">
                        <AiOutlineSetting />
                      </div>
                    </div>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="  ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlinePlus size={17} /> Add Button
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <small className="my-2">Actions</small>
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineArrowRight size={17} /> Move
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3 ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineCopy size={17} /> Copy
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3  ul__a ">
                      <span class="btn__text">
                        {" "}
                        <BiCopyAlt size={17} /> Make Template
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3  ul__a ">
                      <span class="btn__text">
                        {" "}
                        <BsArchive size={17} /> Archive
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="button3  ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineShareAlt size={17} /> Share
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCard;
