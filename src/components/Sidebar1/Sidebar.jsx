import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import CreateBoard from "../Bucket/CreateBoard";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import {
  getBoard,
  setSelectedBoard,
  updateVisitedBoard,
} from "../../redux/action/Board";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import moment from "moment";
const Sidebar = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  // initialize state variable
  const userId = localStorage.getItem("user_id");
  const dispatch = useDispatch();
  const { selectedWorkspace } = useSelector((store) => store.workspaceRoot);
  const { allBoards } = useSelector((store) => store.boardRoot);
  const handlePopupToggle = () => {
    setShowPopup(!showPopup); // toggle the state variable
  };

  useEffect(() => {
    if (!isOpen) {
      setShowPopup(false); // close popup when sidebar is closed
    }
  }, [isOpen]);

  const handleSidebar = () => {
    if (isOpen === false) {
      setIsOpen(true);
      setIsSidebarOpen(true);
    } else {
      setIsOpen(false);
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    let workspaceId = selectedWorkspace && selectedWorkspace._id;

    const fetchData = async () => {
      console.log(workspaceId,"workspace id in sidebar")
        dispatch(getBoard(workspaceId));
    };
    if(workspaceId){
    fetchData();
    }
  }, [selectedWorkspace && selectedWorkspace._id]);

  const handleSelectBoard = (board) => {
    let date = moment(new Date()).format();
    let visitedTime = moment(new Date()).format("h:mm:ss a");
    let visitedDate = date.toString().slice(0, 10);
    let payload = {
      visitedTime,
      visitedDate,
    };
    console.log("date------------", visitedDate, visitedTime);
    dispatch(updateVisitedBoard(board._id, payload));
    dispatch(setSelectedBoard(board));
    navigate(`/boards/${board._id}`);
  };

  const [numToShow, setNumToShow] = useState(3);
  // console.log("allBoards",allBoards)
  return (
    <div className={`sidebar ${isOpen ? "open " : "closed"} `}>
      {/* Sidebar Content */}

      <ul className="menu p-3">
        {/* <NavLink
        to="/"
        style={{
          color:  "black",
          textDecoration:"none"
          
          // background: isActive ? '#7600dc' : '#f0f0f0',
        }}
      > */}

        <Row>
          <Col>
            <div className="d-flex pt-2">
              <div
                className="fw-bold d-flex text-center align-items-center justify-content-center rounded  border border-secondary "
                style={{
                  backgroundColor: selectedWorkspace
                    ? selectedWorkspace.workspaceColor
                    : "",
                  width: "40px",
                  height: "40px",
                  position: "relative",
                  top: "-7px",
                  left: "-5px",
                }}
              >
                {selectedWorkspace && selectedWorkspace.workspaceName
                  ? selectedWorkspace.workspaceName.charAt(0)
                  : "H"}
              </div>
              <NavLink to="/" className="text-dark text-decoration-none">
                {selectedWorkspace && selectedWorkspace.workspaceName
                  ? selectedWorkspace.workspaceName
                  : "Home"}
              </NavLink>
            </div>
          </Col>
          <Col xs={1} style={{marginRight:"7px"}}>

            {isOpen?          <i className="fa-solid fa-angle-left mt-1 toggleOpen_Sidebar" onClick={handleSidebar} style={{fontSize:"18px",cursor:"pointer",marginLeft:"-18px"}}></i>
:          <i className="fa-solid fa-angle-right mt-1 toggleClose_Sidebar" onClick={handleSidebar} style={{fontSize:"19px",cursor:"pointer",marginLeft:"0.5px"}}></i>
}
          
          </Col>
        </Row>
        {isOpen? <hr className="text-muted" style={{width:"248px",marginTop:"7px",marginLeft:"-15px"}}/>:null}
       
        {/* </NavLink> */}
        <div className="mx-1 " style={{marginTop:"-10px"}}>




        <div className="d-flex align-items-center ">
          <NavLink to='/userboard' style={{
          color:  "black",
          textDecoration:"none"
          // background: isActive ? '#7600dc' : '#f0f0f0',
        }}>
          <li class="nav-item m-2">
            <a class="nav-link text-dark" href="#">
            <i class="fa-brands fa-trello tex"></i> Boards
            </a>
          </li>
          </NavLink>
        </div>




        <div className="d-flex align-items-center ">
          <li class="nav-item m-2 text-dark">
            <NavLink className="nav-link" to="/members" >
            <i class="fa-regular fa-user"></i> Members
            </NavLink>
          </li>
        </div>



        {/* <div className="d-flex align-items-center ">
          <li class="nav-item m-2 text-dark">
            <NavLink className="nav-link" >
            <i class="fa-solid fa-gear"></i> Workspace settings
            </NavLink>
          </li>
        </div> */}
        </div>



        <div className="d-flex">
          <div style={{ width: "180px" }}>
            <div eventKey="1" className="border-0 outline-0  ">



              
              <div
                style={{
                  font: "menu",
                }}
              >
                 
                  <h6
                    className="text-dark fw-bold"
                    style={{ marginTop: "10px", marginLeft: "10px",cursor:"pointer" }}
                  >
                    Your boards  
                  </h6>
                </div>




              <div style={{ position: "absolute", left: "27px" ,cursor:"pointer"}}>
                {allBoards &&
                  allBoards.slice(0, numToShow).map((board,key) => (
                    <>
                      <div
                        className="mt-1"
                        onClick={() => handleSelectBoard(board)}
                        key={key}
                      >
                        <Row style={{ width: "200px" }}>
                          <Col xs={3}>
                            <div
                              className="fw-bold text-center  m-1 rounded"
                              style={{
                                backgroundColor: board.boardColor,
                                width: "30px",
                                height: "30px",
                                position: "absolute",
                                left: "-2px",
                              }}
                            ></div>
                          </Col>
                          <Col>
                            {" "}
                            <div className=" mt-1">
                              {" "}
                              <p id={board._id} key={board._id}>
                                {board.boardName}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  ))}
                {allBoards &&
                  allBoards.length > 3 &&
                  numToShow < allBoards.length && (
                    <div onClick={() => setNumToShow(allBoards.length)}>
                      <p className="" style={{ cursor: "pointer" }}>
                        Show more{" "}
                        <i className="fa-solid fa-caret-down px-2"></i>
                      </p>
                    </div>
                  )}
                {allBoards &&
                  allBoards.length > 3 &&
                  numToShow >= allBoards.length && (
                    <div onClick={() => setNumToShow(3)}>
                      <p style={{ cursor: "pointer" }}>
                        Show Less <i className="fa-solid fa-caret-up px-2"></i>
                      </p>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {selectedWorkspace && selectedWorkspace.createdBy === userId ? (
            <span className="mt-2 mx-2">
              <i className="fas fa-plus mr-2 " onClick={handlePopupToggle}></i>
            </span>
          ) : null}
        </div>
      </ul>

      {/* Popup component */}
      {showPopup && <CreateBoard onClose={handlePopupToggle} />}
    </div>
  );
};

export default Sidebar;
