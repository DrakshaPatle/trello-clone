import React, { useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../Dashboard/Dashboard.css";
import Form from "react-bootstrap/Form";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getWorkspace,
  setSelectedWorkspace,
} from "../../redux/action/Workspace";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Navbar.css";
import UserDetails from "./UserDetailsPopup";
import WorkspaceMenu from "./WorkspaceMenu";
import CreateMenu from "./CreateMenu";
import RecentMenu from "./RecentMenu";
import StarredMenu from "./StarredMenu";
import TemplateMenu from "./TemplateMenu";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Card, Dropdown } from "react-bootstrap";
const Navbars = ({ iconClicked }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const [userDetailPopup, setuserDetailPopup] = useState(false);

  const dispatch = useDispatch();
  const [inputField, setInputField] = useState(false);

  const [showPopup, setShowPopup] = useState(false); // initialize state variable
  const userProfile = useSelector((state) => state.userRoot.userProfile);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup); // toggle the state variable
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getWorkspace());
    };
    fetchData();
  }, []);

  const handleUserChange = (workspace) => {
    dispatch(setSelectedWorkspace(workspace));
    navigate("/");
  };

  {
    /* ..............................Main Navbar ..............................*/
  }

  const handleUserIconClick = () => {
    if (userDetailPopup === false) {
      setuserDetailPopup(true);
    } else {
      setuserDetailPopup(false);
    }
  };

  const accountTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Account
    </Tooltip>
  );

  const notificationTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Notifications
    </Tooltip>
  );

  const searchInputClicked = () => {
    if (inputField === false) {
      setInputField(true);
    } else {
      setInputField(false);
    }
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setInputField(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Navbar
      bg="light"
      fixed="top"
      className=" main_header"
      expand="lg"
    
    >
      <h5 className="fw-bold nav_heading  mt-1 ms-3">
        {" "}
        <BsGrid3X3GapFill /> Task deployer
      </h5>
      <Nav className="me-auto ms-3">
        {/* ..............................Create Button ..............................*/}

        {/* ..............................Select Buttons ..............................*/}


{/* ....................For Mobile responsive .................... */}
{/* <div className="mobileresponsive_Dropdown">

          <Dropdown className="d-inline" autoClose="outside" >
            <Dropdown.Toggle id="dropdown-autoclose-outside" variant="light" className="border-0 text-dark">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >
                <WorkspaceMenu />


              </Dropdown.Item>
              <Dropdown.Item><RecentMenu /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

</div> */}
{/*   
<p className="mobileresponsive_Dropdown">Menu</p>
<div className="mobileresponsive_Dropdown">

         <Card>
<li>      <WorkspaceMenu />
</li>
<li>        <RecentMenu />
</li>

         </Card>

</div> */}
  {/* ....................For Mobile responsive .................... */}


       <WorkspaceMenu />
        <RecentMenu /> 
        {/* <StarredMenu/>
        <TemplateMenu/> */}
        <CreateMenu />

      </Nav>
      {/* <div className="Search_field"> 
      {inputField ? (
      
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search TaskDeployer"
            style={{ width: "450px" }}
            className="me-2 "
            aria-label="Search"
            onClick={searchInputClicked}
            ref={popupRef}
          />
        </Form>
      ) : (
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 "
            aria-label="Search"
            onClick={searchInputClicked}
          />
        </Form>
      )}
      </div> */}

      {/* ..............................Setting and Bell Icons ..............................*/}

      {/* <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 100 }}
        overlay={notificationTooltip}
      >
        <div className="text-secondary  mx-2">
        <i className="fa-regular fa-bell" style={{fontSize:"19px"}} ></i>
                </div>
      </OverlayTrigger> */}

      {/* ..............................User Details Section ..............................*/}

      <Navbar.Text className=" p-0 user_details">
        <div className="d-flex">
          <div className=" d-inline-flex py-4  ">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 100 }}
              overlay={accountTooltip}
            >
              <span
                className=" d-flex justify-content-center pt-1  fw-normal mx-2"
                onClick={handleUserIconClick}
                style={{
                  fontSize: "14px",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#1960ee",
                  borderRadius: "100%",
                  cursor: "pointer",
                  color: "white",
                }}
              >
              {userProfile && userProfile.userName &&
  <p className="namecircle-inner">
    {userProfile.userName.split(' ')[0].charAt(0).toUpperCase()}
    {userProfile.userName.split(' ').length > 1 && userProfile.userName.split(' ')[1].charAt(0).toUpperCase()}
  </p>
}

              </span>
            </OverlayTrigger>
            {userDetailPopup ? (
              <UserDetails setuserDetailPopup={setuserDetailPopup} />
            ) : null}
          </div>
        </div>
      </Navbar.Text>
      {/* <div className="text-secondary mx-2">
      <i style={{fontSize:"19px"}} className="fa-solid fa-gear "></i>
      
            </div> */}

      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Navbars;
