import React from "react";
import BoardHome from "./WorkspaceProfile"; 
import "./board_sidebar.css"; 
import BoardSidebar from "./BoardSidebar";

const Workspace = () => {
  return (
    <>
      <div className="body__main">
        <div className="container">
          <div className="row">
            {/* board Starts */}
           <BoardSidebar/>
            {/* <Board/> */}
            <BoardHome/> 
          </div>
        </div>
      </div>

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

export default Workspace;
