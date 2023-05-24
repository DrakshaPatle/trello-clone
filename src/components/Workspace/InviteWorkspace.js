import React from "react";
import { FaUserPlus } from "react-icons/fa";
import InviteSpaceInput from "./InviteSpaceInput";
const InviteWorkspace = () => {

  return (
    <>
      <button
        type="button"
        className="button-15"
        style={{position:"relative",top:"-40px",right:"-90px"}}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        role="button"
        // onClick={() => handleshow()}
      >
        <span className="mx-2">
          <FaUserPlus />
        </span>
        Invite Workspace Members
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Invite to Workspace
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
                  <InviteSpaceInput />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteWorkspace;
