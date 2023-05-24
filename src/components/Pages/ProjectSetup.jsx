import React, { useState ,useEffect,useRef} from "react";
// import AppsdeployerPng from "../assets/Appsdeployer.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Col, Tooltip } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useDispatch } from "react-redux";
import { add } from "../../redux/Slice/ProjectSlice";
import "./projectSetup.css";
import { SketchPicker } from "react-color";
import { useAlert } from "react-alert";
import { newWorkspace } from "../../redux/action/Workspace";
import updateUserActivity from '../../UserActivity'
/* ..............................Page 4 Component ..............................*/

const ProjectSetup = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceColor, setWorkspaceColor] = useState("");
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const pickerRef = useRef();
  const userId = localStorage.getItem('user_id');



  useEffect(() => {
    // add event listener to close the picker when clicking outside of it
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        // clicked outside the picker
        setShowColorPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      // const user_id = localStorage.getItem('user_id');
      let payload = {
        workspaceName: workspaceName,
        workspaceColor: workspaceColor,
        createdBy:userId,
      }
      dispatch(newWorkspace(payload,async function(response){
        if(response){
        const _id = response.data.workspaces[0]._id;
          console.log("nopaset934@galcake.com",response)
          navigate(`/createBoard/${_id}`);
        }else{
          alert.error(response.data.message)
        }
      }))
   
    }
  };

  useEffect(()=>{ 
    localStorage.setItem("log",new Date())
    return () => {
      updateUserActivity('projectsetup')
    } 
  },[])

  return (
    <>
    

      {/*............... Page Section Start............... */}

      <div className="row">
        <Col className=" rounded-4 shadow" style={{position:"relative",top:"20px"}}>
          <div className="container my-4 mx-5 ">
            <ProgressBar
              variant="danger"
              now={10}
              style={{ width: "60%", height: "10px" }}
            />
          </div>

          <h2 className="display-6 mx-5 my-3 text-dark">
            Let's set up your <br /> first project
          </h2>
          <div className="mx-5 text-dark" style={{ width: "100%" }}>
            <div className="m-2 my-3">
              <h5>Workspace Name</h5>
              <input
              type="text"
              className="border-0 border-bottom  bg-light p-2"
              placeholder="Enter workspace name"
              style={{ width: "370px" }}
              value={workspaceName}
              onChange={(event) => setWorkspaceName(event.target.value)}
            />
            </div>
            <div className="m-2 my-3">
  <h5>Workspace Color</h5>
  <div   ref={pickerRef} style={{ position: "relative", display: "inline-flex", height: "40px", overflow: "visible" }}>
    <input
      type="color"
      className="border-0 border-bottom bg-light p-2"
      placeholder="color code..."
      style={{ width: "70px", height: "50px"}}
      value={workspaceColor}
      // onChange={(event) => setWorkspaceColor(event.target.value)}
      disabled
    />
    <Button className="bg-light text-dark p-0 px-2 border-0" style={{ height: "100%" }} onClick={() => setShowColorPicker(!showColorPicker)}>
      {showColorPicker?<h6>Close</h6>:<h6>Pick<i className="fa-solid fa-eye-dropper"></i></h6>}
    </Button>
    {showColorPicker && (
      <SketchPicker
    
        color={selectedColor}
        className="border border-0 shadow-0"
        onChangeComplete={(color) => {
          setSelectedColor(color.hex);
          setWorkspaceColor(color.hex);

        }}
        style={{ position: "absolute", right: 0, top: "100%" }}
      />
    )}
  </div>
</div>


            {/* <div className="m-2 my-3">
              <h5>Workspace Team </h5>
              <input
              type="text"
              className="border-0 border-bottom  bg-light p-2"
              placeholder="eg. Cross-functional project plan"
              style={{ width: "370px" }}
              value={workspace}
              onChange={(event) => setWorkspace(event.target.value)}
            />

            </div> */}

            <div className="container">
            <Button
        className="my-4 glow-on-hover btn3"
        variant="primary"
        onClick={buttonClick}
        disabled={buttonClicked}
      >
        {buttonClicked ? "Submitting..." : "Continue →"}
      </Button>
      <NavLink to='/'>

      <Button
                className="my-4 glow-on-hover btn3 mx-5"
                variant="primary"
              >
                Skip
              </Button>
              </NavLink>
            </div>
          </div>
        </Col>


        <Col className="card_view"style={{position:"relative",top:"180px"}}
       >
          <Card className="shadow border-0">
            <i className="fa-solid fa-ellipsis  fa-2x px-3 "></i>

            <hr />

            <h2 className="mx-3 display-6 text-dark">
              <span className="mx-1  p-1 rounded">
                <i className="fa-solid fa-list-ul"></i>
              </span>

              {workspaceName}
            </h2>
            <div className="container d-flex ">
              <NavLink className="px-3 text-primary">
                <h6>List</h6>
              </NavLink>

              <h6 className="text-muted">Board</h6>

              <h6 className="text-muted px-3">Timeline</h6>

              <h6 className="text-muted">Calender</h6>
            </div>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  This is a Preview of Your Sample Project.
                </Tooltip>
              }
            >
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th colSpan={3} className="text-muted text-center">
                      Task Name
                    </th>
                    <th className="text-muted text-center">Assignee </th>
                    <th className="text-muted text-center">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        {" "}
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className="display-6">
                    <td colSpan={3}>
                      <span className="text-muted">
                        <i className="fa-regular fa-circle-check"></i>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </OverlayTrigger>
          </Card>
        </Col>
      </div>
      {/*............... Page Section End............... */}

      {/* ...............Animation Bottom Section ...............*/}

      {/* <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div> */}
    </>
  );
};

export default ProjectSetup;
