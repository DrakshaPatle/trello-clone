import { useSelector } from "react-redux";
import {
  getWorkspace,
  setSelectedWorkspace,
} from "../../redux/action/Workspace";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import AddWorkspacePopup from "./AddWorkspacePopup";
import CreateBoardPopup from "./CreateBoardPopup";
import { useState, useRef } from "react";
import './CreateMenu.css'
const WorkspaceMenu = () => {


  const [show, setShow] = useState(false);


  const [createBoardPopup, setCreateBoardPopup] = useState(false); // initialize state variable
  const [createWorkspacePopup, setcreateWorkspacePopup] = useState(false); // initialize state variable

  const createBoardhandleClick = () => {

    // if(createBoardPopup === false){

    setCreateBoardPopup(!createBoardPopup)
    // }
  };

  const handleclose = () => {

    console.log('handle close')
    setCreateBoardPopup(false);
  }
  const createWorkspacehandleClick = () => {
    if (createWorkspacePopup === false) {

      setcreateWorkspacePopup(!createWorkspacePopup)
    }
  };

  return (
    <div className="dropdown px-3" style={{ maginTop: "500px" }}>
      <a
        className=" icon-toggle-hide create_button dropdown_toggle px-3"

        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"

      >
        Create
      </a>

      {/*..................... For Mobile Responsive ..................... */}
      <a
        className=" icon-toggle-hide create_button_responsive dropdown_toggle px-3"

        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"

      >
        +
      </a>

      <ul
        className="dropdown-menu  scrollable-menu px-3 mt-3 "
        aria-labelledby="dropdownMenuLink"
      >

        <Card style={{ width: "350px" }} >
          <div className="border-0 text-lg-start p-2 py-0 pt-3"

            onClick={() => createBoardhandleClick()}
          >

            <i class="fa-brands fa-trello m-lg-2" ></i>
            Create Board
            <p
              className=" text-muted mx-2">
              A board is made up of cards ordered on lists.Use it to manage
              projects,track information,or organize anything
            </p>
          </div>



          <div className="border-0 text-lg-start p-2 py-0">

            <i class="fa-brands fa-trello m-lg-2"></i>Start with a template

            <p className="text-muted  mx-2">Get started faster with a board template</p>
          </div>
          <div className="border-0 text-lg-start p-2 py-0"
            onClick={createWorkspacehandleClick}>

            <i class="fa-solid fa-user-group m-lg-2"></i>Create Workspace
            <p className="text-muted  mx-2">
              A Workspaces is a group of boards and people. Use it to organize
              your company side hustle ,family,or friends
            </p>
          </div>
          {createWorkspacePopup && <AddWorkspacePopup onClose={createWorkspacehandleClick} setcreateWorkspacePopup={setcreateWorkspacePopup} />}

        </Card>
      </ul>

      {createBoardPopup && <CreateBoardPopup

        onClose={createBoardhandleClick} setCreateBoardPopup={setCreateBoardPopup} />}

    </div>
  )
}

export default WorkspaceMenu;
