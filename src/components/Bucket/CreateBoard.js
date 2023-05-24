
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAlert } from "react-alert";
import { useSelector,useDispatch } from "react-redux";
import { createBoard } from "../../redux/action/Board";
const Popup = ({ onClose }) => {
    const [value,setValue] = useState("#fff");
    const alert =useAlert();
    const {selectedWorkspace} = useSelector((store)=>store.workspaceRoot)
    const dispatch = useDispatch();
  
    const [inputValue,setInputValue] = useState({
        boardName:"",
        boardColor:"",
      })
    
      const [errorValue,setErrorValue] = useState({
        boardName:"",
        boardColor:"",
      })
    const handleChange = (evt) => {
        var name=evt.target.name;
        var value=evt.target.value;
        setInputValue((currentInputValue) =>{
            return {
                ...currentInputValue,
                [name]:value
            }
        })
        setErrorValue((currentInputValue) =>{
          return {
              ...currentInputValue,
              [name]:''
          }
      })
    }
    console.log("input value",inputValue)
    const handleSubmit = async() =>{

        // let errors = {
        //     ...errorValue
        // }
        // if(inputValue.boardName<=""){
        //   errors.boardName="board name required"
        //   errors.flag=true
        // }
        // if(inputValue.boardColor===''){
        //   errors.boardColor="board color reuired"
        //   errors.flag=true
        // }
        // console.log(errors,"errors")
        // if(errors.flag===true)
        // {
        //   setErrorValue(errors)
        // }else{
        const userId = localStorage.getItem('user_id');

            inputValue.workspaceId= selectedWorkspace?selectedWorkspace._id:""
            inputValue.boardMember =[
              {
                b_memberid:userId
              }
            ]
            inputValue.createdBy=userId
            dispatch(createBoard(inputValue,async function(response){
              if(response){
                alert.show(response.data.message)
                onClose()
              }else{
                alert.show(response.data.message)
                onClose()
              }
            }))
        // }
    }

  return (
    <div style={{ position: "relative", left: "270px", top: "-80px" }}>
      <Card
        className="shadow border-0 "
        style={{ borderRadius: "0", width: "300px" }}
      >
        <p className="text-muted text-center m-0 mt-1">Create Board
          <span className="text-end" style={{position:"relative",left:"85px"}}>
            <i className="fa-solid fa-xmark" onClick={onClose}></i>
          </span>
        </p> 
        <hr />
        {/* Image Section */}
        <section className="mx-auto">
          <img
            src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679638372047.svg'
            alt="TrelloImg"
            style={{ width: "150px" }}
            className=" pt-0"
          />
        </section>
        {/* Background Section */}
        <section className="p-2 pt-2">
          <h6 className="fw-bold  " style={{ fontSize: "12px" }}>
            Background
          </h6>

          <div className="container-fluid d-flex">
            <img
              src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637472199.avif'
              alt="BgImg"
              style={{ width: "70px" }}
              className=" p-1"
            />

            <img
              src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637492119.avif'
              alt="BgImg"
              style={{ width: "70px" }}
              className=" p-1"
            />

            <img
              src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637508839.avif'
              alt="BgImg"
              style={{ width: "70px" }}
              className=" p-1"
            />

            <span
              style={{ width: "70px" }}
              className=" m-1  border-0 text-center"
            >
              <i className="fa-solid fa-ellipsis mt-3"></i>
            </span>
          </div>
        </section>

        {/* Board Name and Board Color Section */}
        <section>
          <Form className="p-2">
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <h6 className="fw-bold " style={{ fontSize: "15px" }}>
                Board Title  
              </h6>
              <Form.Control type="text" placeholder="Enter board title" name="boardName" autocomplete="off"   onChange={handleChange.bind()} 
                //  isInvalid={errorValue.boardName!=''?true: false}
                 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicColor">
              <h6 className="fw-bold " style={{ fontSize: "15px" }}>
                Board Color
              </h6>
              <Form.Control type="color" 
              placeholder="Board Color" 
              value={inputValue.boardColor}  
              name="boardColor" onChange={handleChange.bind()}
              // isInvalid={errorValue.boardColor!=''?true: false}
              />
            </Form.Group>
            
            <Button variant="primary" onClick={handleSubmit} >
              Create
            </Button>
          </Form>
        </section>
      </Card>
    </div>
  );
};

export default Popup;
