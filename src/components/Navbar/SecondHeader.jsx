import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./SecondHeader.css";
import { FaUserPlus } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import ShareBoard from "../Board/shareBoard";
import EditBoard from '../Board/editBoard'
import MenuPopup from "./MenuPopup";
const SecondHeader = (props) => {
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  const [show,setShow]= useState(false);

  const handleClose =(boardName) =>{
    setShow(false)
  }

  console.log(" selectedBoard ------------------   ",selectedBoard)
  return (
    <>
      <div className="container-fluid pt-3 mb-3 second_header">
        {/* <h4 className="mx-2  secondheader_mainheading"/>
            <span className="color-box " style={{backgroundColor:selectedBoard.boardColor}}> </span>
            {selectedBoard ? selectedBoard.boardName : "WS Name"} */}

        {/* ....................Board Name section.................... */}
        <div className="mx-2 d-flex secondheader_mainheading ">
          <div
            className="fw-bold text-center d-flex align-items-center justify-content-center rounded  border border-secondary"
            style={{
              backgroundColor: selectedBoard.boardColor,
              width: "40px",
              height: "40px",
              position: "relative",
              // top: "-7px",
              left: "-5px",
            }}
          >
            {selectedBoard.boardName ? selectedBoard.boardName.charAt(0) : "H"}
          </div>
          { show ? 
               <EditBoard   handleClose={handleClose}/>:
            <h4 onClick={()=>setShow(true)} >{selectedBoard ? selectedBoard.boardName : "Board Name"}</h4> }

          <div className="">
            <div className="alignleft mx-3 mt-1">
              <div className="dropdown ">
                <a
                  className=" dropdown-toggle dropdown_toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View as new
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end px-3"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">one</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">two</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">Three</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="alignleft mx-3 mt-1">
              <div className="dropdown ">
                <a
                  className=" dropdown-toggle dropdown_toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Board by Status
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end px-3"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">one</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">two</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">Three</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="alignleft mx-3 mt-1">
              <div className="dropdown ">
                <a
                  className=" dropdown-toggle dropdown_toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Board by Assignee
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end px-3"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">one</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">two</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="websiteLinkText">Three</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            
            {/* ---------start name icon -------------- */}

            <div className="alignleft">
              {selectedBoard && selectedBoard.boardMember && 
              selectedBoard.boardMember.map((member,key) => (
                  <div className="namecircle" key={key} 
                  style={{backgroundColor: member.b_memberid? member.b_memberid.userColor :'namecircle_color'}}
                  >
                      {/* <p className="namecircle-inner"> 
                          {member.b_memberid.userName.charAt(0).toUpperCase()}
                          {member.b_memberid.userName.charAt(1).toUpperCase()}
                      </p> */}
                      <p className="namecircle-inner"> 
  {member.b_memberid.userName.split(' ')[0].charAt(0).toUpperCase()}
  {member.b_memberid.userName.split(' ')[1].charAt(0).toUpperCase()}
</p>
                  </div>  
              ))}
            </div>
            {/* --------- end name icon -------------- */}

            <div className="alignleft mb-3 mx-3 ">
              <ShareBoard />
            </div>
          </div>
        </div>

        {/* ....................Dropdown Section.................... */}
      </div>
  {/* ---------Menu Popup Section -------------- */}

      <MenuPopup/>
    </>
  );
};

export default SecondHeader;
