import React from "react";
import "../../assets/css/header.css";
import {
  FaUserAlt,
  FaSearch,
  FaJira,
  FaArrowRight,
  FaLightbulb,
  FaBars,
} from "react-icons/fa";
import { BsGrid3X3GapFill, BsArrowUpRight } from "react-icons/bs"; 
const ProjectGridPopup = () =>{
    return(
        <div className="dropdown px-2 mt-2">
        <a
          className="dropdown-toggle icon-toggle-hide"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsGrid3X3GapFill />
        </a>

        <ul
          className="dropdown-menu dropdown-menu-end px-3"
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <div className="d-flex flex-row" style={{ width: "13rem" }}>
              <div className="p-2 d-flex justify-content-start">
                Switch to
              </div>
              <div className="d-flex justify-content-end p-2">
                <a className=" " href="https://www.appsdeployer.com/">
                  <span className="websiteLinkText">Apps Deployer</span>
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="https://www.appsdeployer.com/"
            >
              <FaJira className=" navIconWebsite" />
              <span className="websiteLinkText">Apps Deployer</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="http://cx.consdeployer.com">
              <FaJira className=" navIconWebsite" />
              <span className="websiteLinkText">Task Deployer</span>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="http://idea.consdeployer.com"
            >
              <FaJira className=" navIconWebsite" />
              <span className="websiteLinkText"> Idea Deployer</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="http://risk.condeployer.com">
              <FaJira className=" navIconWebsite" />
              <span className="websiteLinkText"> Risk Deployer</span>
            </a>
          </li>
        </ul>
      </div>
    )
}

export default ProjectGridPopup;