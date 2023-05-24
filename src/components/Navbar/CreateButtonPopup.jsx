import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import AddWorkspacePopup from "./AddWorkspacePopup";
import CreateBoardPopup from "./CreateBoardPopup";

const CreateButtonPopup = (props) => {
  const setShowPopup  = props.setShowPopup
    const [createBoardPopup, setCreateBoardPopup] = useState(false); // initialize state variable
    const [createWorkspacePopup, setcreateWorkspacePopup] = useState(false); // initialize state variable
    const ref = useRef();
    const createBoardhandleClick = () => {
        
      setCreateBoardPopup(!createBoardPopup)
    };


    const createWorkspacehandleClick = () => {
      if(createWorkspacePopup === false){

        setcreateWorkspacePopup(!createWorkspacePopup)
      }


      };

    

  return (
    <div  style={{ position: "absolute", top: "80px", left: "320px",cursor:"pointer"}} ref={ref} >
      <Card className="shadow" style={{ width: "350px" ,}}>
        <div className="border-0 text-lg-start p-3 py-0 pt-3"
          onClick={createBoardhandleClick}>
         
            <i class="fa-brands fa-trello m-lg-2"
            ></i>Create Board
          <p className="text-muted mx-2">
            A board is made up of cards ordered on lists.Use it to manage
            projects,track information,or organize anything
          </p>
        </div>
        
        {createBoardPopup && <CreateBoardPopup onClose={createBoardhandleClick} />}

        <div className="border-0 text-lg-start p-3 py-0">
        
            <i class="fa-brands fa-trello m-lg-2"></i>Start with a template
         
          <p className="text-muted  mx-2">Get started faster with a board template</p>
        </div>
        <div className="border-0 text-lg-start p-3 py-0"
         onClick={createWorkspacehandleClick}>
         
            <i class="fa-solid fa-user-group m-lg-2"></i>Create Workspace
          <p className="text-muted  mx-2">
            A Workspaces is a group of boards and people. Use it to organize
            your company side hustle ,family,or friends
          </p>
        </div>
        {createWorkspacePopup && <AddWorkspacePopup onClose={createWorkspacehandleClick} setcreateWorkspacePopup={setcreateWorkspacePopup} />}

      </Card>
    </div>
  );
};

export default CreateButtonPopup;
