import React from "react";
import { FaUserPlus } from "react-icons/fa";
import InviteBoardInput from "./InviteBoardInput";
import "./ShareBoard.css"
const InviteWorkspace = () => {


  return (
    <>
      <button
        className="share-btn"
        role="button"
        data-bs-toggle="modal"
        data-bs-target="#ShareModal"
        // onClick={() => handleshow()}
      >
        <span className="mx-1 ">
          {" "}
          <FaUserPlus />{" "}
        </span>{" "}
        Share
      </button>

      <div
        className="modal fade"
        id="ShareModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Shareuser board
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <InviteBoardInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteWorkspace;