import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillLockFill, BsPencil } from "react-icons/bs";
import EditWorkspace from "../Dashboard/EditWorkspace";
import ShareWorkspace from '../Workspace/InviteWorkspace'

const InviteWorkspace =() =>{
    const { selectedWorkspace } = useSelector((store) => store.workspaceRoot);
    const [editForm, setEditForm] = useState(false);
    const editIconClick = () => {
        setEditForm(!editForm);
      };
    return (
        <div
        className="body__main"
        style={{
          paddingTop: "30px",
          paddingBottom: "10px",
        }}
      >
        <div className="container">
          <div className="row">
            {/* board Starts */}
            {/* <BoardSidebar/> */}
            <div className="row px-3">
              <div class="navbar invitebg">
                <div class="container-fluid justify-content-around">
                  <div
                    class="invite-header"
                    style={{
                      position: "relative",
                      top: "-35px",
                      right: "60px",
                    }}
                  >
                    <span class="invite-header-icon">
                      <span
                        class="invite_icon"
                        style={{
                          backgroundColor:
                            selectedWorkspace &&
                            selectedWorkspace.workspaceColor,
                        }}
                      >
                        {selectedWorkspace &&
                        selectedWorkspace.workspaceName
                          ? selectedWorkspace.workspaceName.charAt(0)
                          : "W"}
                      </span>
                    </span>
                    <span>
                   
                    <span class="fw-bold">
                {selectedWorkspace && selectedWorkspace
                  ? selectedWorkspace.workspaceName
                  : "Workspace"}
            {selectedWorkspace && selectedWorkspace.createdBy && selectedWorkspace.createdBy === localStorage.getItem("user_id")?

                <span>
                  <BsPencil className="mx-2" 
                  style={{cursor:"pointer"}}
                  onClick={editIconClick}/>
                </span>    :null}
                {editForm?<EditWorkspace setEditForm={setEditForm}/>:null

                }
              </span>
        
                      <br />
                      {editForm ? null : (
                        <small>
                          <span>
                            <BsFillLockFill />
                          </span>
                          Private11111
                        </small>
                      )}
                    </span>
                  </div>
                  <div class="mx-5">
                    <ShareWorkspace />
                  </div>
                </div>
              </div>
            </div>
            {editForm ? <hr style={{ marginTop: "280px" }} /> : <hr />}
          </div>
        </div>
      </div>
    )
}
export default InviteWorkspace;