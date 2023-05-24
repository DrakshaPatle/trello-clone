import React, { useState } from "react";
import BoardHome from "./WorkspaceProfile";
import "./board_sidebar.css";
import {
  AiOutlinePlus,
  AiFillDashboard,
  AiFillHome,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaTrello } from "react-icons/fa";
import { CiGrid41, CiSettings } from "react-icons/ci";
import { FiUsers, FiType } from "react-icons/fi";
import Board from "./BoardProfile";
import AddWorkspaceModal from "../components/Workspace/addWorkspaceModal";
import {  NavLink } from "react-router-dom";
const BoardSidebar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  return (
    <>
      <div className="col-md-3">
        <div className="board">
          <ul className="menu px-3">
            <li class="nav-item">
              <NavLink to='/' className="nav-link ul__a">
                <FaTrello className="ul__icon" size={20} />
                <span className="ul__text">Board</span>
           
              </NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link ul__a" href="#">
                <AiFillDashboard className="ul__icon" size={20} />
                <span className="ul__text">Templates </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ul__a" href="#">
                <AiFillHome className="ul__icon" size={20} />
                <span className="ul__text">Home </span>
              </a>
            </li>
            <hr />
            <li class="nav-item">
              <a class="nav-link ul__a">
                <div class="d-flex justify-content-between">
                  {/*.................... Workspace popup here.................... */}
                  <span className="ul__text">Workspace </span>
                  <div>
                    <AiOutlinePlus
                      className="ml-auto ul__icon"
                      size={20}
                      onClick={handleIconClick}
                    />
                    {showPopup && (
                      <AddWorkspaceModal
                        onClose={() => setShowPopup(false)}
                        showPopup={showPopup}
                        setShowPopup={setShowPopup}
                      />
                    )}
                  </div>
                </div>
              </a>
            </li>

            <div class="accordion" id="accordionExample">
            <div
              class="accordion-item"
              className="border-0 outline-0 my-3 text-bg-light"
            >
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed" style={{background:"#fdfdfd", padding:"10px 5px"}}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <FiType className="ul__icon pe-3" size={18} />
                  Project Workspace
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="menu">
                    <li class="nav-item">

                      <NavLink className="nav-link ul__a" to="/">
                        <FaTrello className="ul__icon" size={20} />
                        <span className="ul__text">Board </span>
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ul__a" href="#">
                        <AiOutlineHeart className="ul__icon" size={20} />
                        <span className="ul__text">Highlights </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ul__a" href="#">
                        <CiGrid41 className="ul__icon" size={20} />
                        <span className="ul__text">Views </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <NavLink className="nav-link ul__a" to="/members" >
                        <div class="d-flex justify-content-between">
                          <span className="ul__text">
                            <FiUsers className="ul__icon" size={20} />
                            Members{" "}
                          </span>
                          <span className="ml-5  ">
                            <AiOutlinePlus className="  ul__icon" size={20} />
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ul__a" href="#">
                        <CiSettings className="ul__icon" size={20} />
                        <span className="ul__text">Settings </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          </ul>
         
        </div>
      </div>
      {/* <Board/> */}

      {/* <div class="wrapper">
        <div class="main">Main content</div>
        <div class="sidebar">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default BoardSidebar;
