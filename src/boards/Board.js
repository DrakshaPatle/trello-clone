import React, {useEffect} from "react";
import BoardProfile from "./BoardProfile"; 
import "./board_sidebar.css"; 
import BoardSidebar from "./BoardSidebar";
import Navbars from "../components/Navbar/Navbar";
import updateUserActivity from '../UserActivity'
const Workspace = () => {
  useEffect(()=>{ 
    localStorage.setItem("log",new Date())
    return () => {
      updateUserActivity('userboard')
    } 
  },[])
  return (
    <>
      <div className="body__main">
        <div className="container">
          <div className="row">
            {/* board Starts */}
            <Navbars/>
           <BoardSidebar/>
            {/* <Board/> */}
            <BoardProfile/> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace;





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
