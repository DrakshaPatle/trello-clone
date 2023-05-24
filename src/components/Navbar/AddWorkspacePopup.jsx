
import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { Button, Card, Col, Modal} from 'react-bootstrap'
import TrelloImg from "../../assets/images/TrelloImg.svg"
import { addWorkspace } from '../../redux/action/Workspace';
import { useDispatch } from 'react-redux';

const AddWorkspacePopup = (props) => {

    const alert = useAlert();

    const [workspaceName, setWorkspaceName] = useState("");
    const [workspaceColor, setWorkspaceColor] = useState("");
    const [workspaceType,setWorkspaceType]=useState("");
    const [workspaceDesc,setWorkspaceDesc]=useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [isInputTouched, setIsInputTouched] = useState(false);
    const [isColorTouched, setIsColorTouched] = useState(false);
    const handleInputChange = (e) => {
      setWorkspaceColor(e.target.value);
      setIsInputTouched(true);
    };
    const dispatch = useDispatch();

    const handleClose = () => {
        props.setcreateWorkspacePopup(false)
    };
    const handleSubmit = (e) => {

        e.preventDefault();
        if (!workspaceColor) {
            setIsColorTouched(true);
            return;
          }
        const userId = localStorage.getItem('user_id');
        let inputValue ={
            workspaceName,
            workspaceColor,
            workspaceDesc,
            workspaceType,
            createdBy: userId,
            workspaceMember :[{
                w_memberid:userId
            }]
        }
            dispatch(addWorkspace(inputValue,async function(response){
                if(response){
                  alert.show(response.data.message)
                  console.log("this is response",response.data)
              props.setcreateWorkspacePopup(false);
                }else{
                  alert.error(response.data.message)
              props.setcreateWorkspacePopup(false);
                }
              }))
    };

    return (
        <Modal show={props.setcreateWorkspacePopup} size="xl">



            <div className="row d-flex m-4" style={{ position: "relative", top: "10px" }}>
                <Col className=" rounded-4 " style={{ position: "relative", top: "20px" }}>

                    <h4 className=' fw-bold '
                        style={{ marginLeft: "60px" }}>Let's build a Workspace </ h4>
                    <p className=' text-muted '
                        style={{ marginLeft: "60px" }}>Boost your productivity by making it easier for <br /> everyone to access boards in one location.</p>
                    <div className="mx-5 text-dark" style={{ width: "100%" }}>
                        <div className="m-2 my-2">
                            <h6 >Workspace Name <span style={{fontSize:"18px"}} className='text-danger'>*</span></h6>
                            <input
    type="text"
    className="border-0 border-bottom bg-light p-2"
    style={{ width: "370px" }}
    value={workspaceName}
    onChange={(e) => {
        setWorkspaceName(e.target.value);
        setErrorMessage('');
    }}
    onBlur={(e) => {
        if (e.target.value.trim() === '') {
            setErrorMessage('This field is required');
        } else {
            setErrorMessage('');
        }
    }}
    required
/>
{errorMessage && (
    <p style={{ color: 'red',fontSize:"12px" }}>{errorMessage}</p>
)}


                            <p className='text-muted mt-2' style={{fontSize:"14px"}}>This is the name of your company, team or organization.</p>
                        </div>
                        <div className="m-2 my-2">
                            <h6 >Workspace Color  <span style={{fontSize:"18px"}} className='text-danger'>*</span>  </h6>
                            <div style={{ position: "relative", display: "inline-flex", height: "40px", overflow: "visible" }}>
                            <input
          type="color"
          name="workspaceColor"
          className="border-0 border-bottom bg-light p-2 rounded"
          style={{ width: "70px", height: "40px" }}
          value={workspaceColor}
          onChange={(e) => {
            setWorkspaceColor(e.target.value);
            setIsColorTouched(true);
          }}
          required
        />
        {isColorTouched && !workspaceColor && (
          <p style={{ color: "red",position:"relative",top:"10px",fontSize:"12px" }}>Please choose a color.</p>
        )}
                            </div>
                        </div>
                        <div className="m-2 my-2">
                            <h6 >Workspace Type </h6>
                            <select
                                type="text"
                                className="border-0 border-bottom  bg-light p-2"
                                style={{ width: "370px" }}
                                value={workspaceType}
                                onChange={(e) => setWorkspaceType(e.target.value)}
                            >
                                 <option value="Board">Board</option>
                                <option value="Timeline">Timeline</option>
                                <option value="Table">Table</option>
                                <option value="Calender">Calender</option>
                            </select>
                        </div>  <div className="m-2 my-2">
                            <h6 >Workspace Description</h6>
                            <textarea
                                type="text"
                                className="border-0 border-bottom  bg-light"
                                placeholder="Description"
                                style={{ width: "370px" }}
                                value={workspaceDesc}
                                onChange={(e) => setWorkspaceDesc(e.target.value)}
                            />
                        </div>
                            <Button
                                className="mb-4 glow-on-hover  px-4 mt-3 mx-2"
                                variant="primary"
                                disabled={!workspaceName}
                                onClick={handleSubmit}
                            >
                                Add
                            </Button>
                    </div>



                </Col>

                <Col className="card_view"
                >
                    <p onClick={handleClose} style={
                        { position: "relative", left: "520px", top: "-22px" }
                    }><i className="fa-solid fa-xmark text-muted"
                        style={{ fontSize: "25px" }}></i></p>
                    <img src={TrelloImg} alt="" style={{ width: "320px", height: "300px", position: "relative", left: "70px", backgroundColor: workspaceColor }} />
                </Col>



            </div>



        </Modal>


    )
}

export default AddWorkspacePopup;