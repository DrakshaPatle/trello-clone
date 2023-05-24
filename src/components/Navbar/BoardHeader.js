import React, { useState } from "react";
import "./board_header.css";
import {
  AiOutlineStar,
  AiOutlineUsergroupAdd,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { HiOutlineChartBar } from "react-icons/hi";
import { BiPaperPlane } from "react-icons/bi";
import { BsFilter, BsThreeDots } from "react-icons/bs";
import ShareBoard from "../Board/shareBoard";
import { useSelector } from "react-redux";
import EditBoard from "../Board/editBoard";
import { FaDeviantart } from "react-icons/fa"; 
import UserCountDropdown from './UserCountDropdown';

const BoardHeader = (props) => {
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  const [show, setShow] = useState(false);

  const handleClose = (boardName) => {
    setShow(false);
  };

   /*User count*/
   const [isOpen, setIsOpen] = useState(false);

   const userDropdown = () => {
     setIsOpen(!isOpen);
   };

  return (
    <>
      <div className=" container-fluid">
        <div className=" row">
          <div
            className="board-header collapsed-workspace-nav mb-2"
            style={{ marginLeft: "-12px" }}
          >
            {/* start toggle btn */}
            {/* <div class="dropdown board-header-btn mod-board-name">
              {show ? (
                <div class=" ">
                  <EditBoard handleClose={handleClose} />
                </div>
              ) : (
                <div
                  class="  dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h1
                    className="board-header-btn-text"
                    onClick={() => setShow(true)}
                  >
                    {selectedBoard ? selectedBoard.boardName : "Board Name"}
                  </h1>
                </div>
              )}
            </div> */}
            {/* end toggle btn */}

            <div className="board-header-btn mod-board-name">
              {show ? (
                <EditBoard handleClose={handleClose} />
              ) : (
                <h1
                  className="board-header-btn-text"
                  onClick={() => setShow(true)}
                >
                  {selectedBoard ? selectedBoard.boardName : "Board Name"}
                </h1>
              )}

              <h1 className="board-header-btn-text">Task Deployer</h1>
            </div>
            <div className="board-header-btn mod-board-name">
              <span className="board-header-btn-icon icon-sm ">
                <AiOutlineStar />
              </span>
            </div>
            {/* <span className="board-header-btn-divider"></span>
            <div className="board-header-btn contain__col">
              <span className="board-header-btn-icon icon-sm ">
                <AiOutlineUsergroupAdd />
              </span>
              <span className="board-header-btn-text">Workspace visible</span>
            </div>
            <span className="board-header-btn-divider"></span>
            <div className="headerboard">
              <div className="d-flex">
                <span className="headerboard_text">
                  <span className="me-2">
                    <HiOutlineChartBar />
                  </span>
                  Board
                </span>
              </div>
            </div> */}
          </div>
          <div class="alignright">
            <div className="board-header-btns mod-right">
              <div className="board-header-container">
                <span className="board-header-contain">
                  {/* <div className="me-2">
                    <div className="contain contain__col ">
                      <span className="col_icon">
                        <BiPaperPlane />{" "}
                      </span>
                      Power-Ups
                    </div>
                  </div>
                  <div className="me-2">
                    <div className="contain contain__col ">
                      <span className="col_icon">
                        <AiOutlineThunderbolt />{" "}
                      </span>
                      Automation
                    </div>
                  </div>
                  <div className="me-2">
                    <div className="contain contain__col ">
                      <span className="col_icon">
                        <BsFilter />{" "}
                      </span>
                      Filter
                    </div>
                  </div> */}
                  {/* <span className="board-header-btn-divider"></span> */}
                  <div className="me-2 mt-2">
                    {selectedBoard &&
                      selectedBoard.boardMember &&
                      selectedBoard.boardMember.slice(0,4).map((member, key) => (
                        member.b_memberid && member.b_memberid?
                        <div
                          className="board-header-facepile"
                          key={key}
                          style={{
                            backgroundColor: member.b_memberid
                              ? member.b_memberid.userColor
                              : "namecircle_color",
                          }}
                        >
                         {member && member.b_memberid && member.b_memberid.userName &&
  <p className="namecircle-inner">
    {member.b_memberid.userName.split(' ')[0].charAt(0).toUpperCase()}
    {member.b_memberid.userName.split(' ').length > 1 && member.b_memberid.userName.split(' ')[1].charAt(0).toUpperCase()}
  </p>
}

                        </div>
                        :null
                      ))}
                  </div>
                  <div className="member-count" onClick={userDropdown}><span className="plus-icon">+</span> {selectedBoard.boardMember.length}
               
               <div className= {`user-dropdown ${isOpen ? "open" : ""}`}>
               <UserCountDropdown />
             </div>
             </div>
                  <div className="me-2 mt-2">
                    <ShareBoard />
                  </div>

                  {/* <span className="board-header-btn-divider"></span>
                  <div className="show-sidebar-button">
                    <div className="show-icon">
                      <span className="css_svg">
                        <BsThreeDots />
                      </span>
                    </div>
                  </div> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default BoardHeader;
