
import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createBoard } from "../../redux/action/Board";
import { useAlert } from "react-alert";
import { useSelector,useDispatch } from "react-redux";

const CreateBoardPopup = (props) => {
    const [value,setValue] = useState("");
    const alert =useAlert();
    const ref = useRef();
  const {allWorkspaces} = useSelector((store)=>store.workspaceRoot)

    const dispatch = useDispatch();
  
    const [inputValue,setInputValue] = useState({
        boardName:"",
        boardColor:"",
        workspaceId:""
      })
    
      const [errorValue,setErrorValue] = useState({
        boardName:"",
        boardColor:"",
        workspaceId:""
      })
    const [backgroundImg, setBackgroundImg] = useState("");
    const handleImgClick =  (imgSrc)=> {
        setBackgroundImg(imgSrc);
      }
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
        // if(inputValue.workspaceId===''){
        //   errors.workspaceId="workspaceId reuired"
        //   errors.flag=true
        // }
        // console.log(errors,"errors")
        // if(errors.flag===true)
        // {
        //   setErrorValue(errors)
        // }else{
        const userId = localStorage.getItem('user_id');
          inputValue.boardMember =[
            {
              b_memberid:userId
            }
          ]
          inputValue.createdBy=userId
            dispatch(createBoard(inputValue,async function(response){
              if(response){
                alert.show(response.data.message)
                props.onClose()
                props.setCreateBoardPopup(false)
              }else{
                alert.show(response.data.message)
                props.onClose()
              }
            }))
        // }
    }

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          props.onClose();
        }
      };
  
      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [ref, props]);

    const handleClick = () =>{
      props.onClose();
    }
  return (
    // <Modal show={props.setCreateBoardPopup} size="xl">
    <div id="create-board-popup" style={{ position: "absolute", right: "0px", top: "0px",left:'85px',cursor:"pointer"}} ref={ref}>
      <Card
        className=" border-0 "
        style={{ borderRadius: "0", width: "350px" }}
      >
        <p className="text-muted text-center m-0 mt-1">Create Board
          <span className="text-start" style={{position:"relative",left:"85px"}}>
            <i  className="fa-solid fa-close "
              onClick={()=>props.setCreateBoardPopup(false)}
            style={{position:"relative"}} 
            ></i>
          </span>
        </p> 
        <hr />
        {/* Image Section */}
        <section className="mx-auto">
          <img
            src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679638372047.svg'
            alt="TrelloImg"
            style={{ width: "150px" ,background:value,backgroundImage: `url(${backgroundImg})`}}
            className=" p-2"

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
              onClick={() => handleImgClick('http://task.consdeployer.com/api/assets/webImage/web-attach_1679637472199.avif')}
            />

            <img
              src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637492119.avif'
              alt="BgImg"
              style={{ width: "70px" }}
              className=" p-1"
              onClick={() => handleImgClick('http://task.consdeployer.com/api/assets/webImage/web-attach_1679637492119.avif')}
            />

            <img
              src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637508839.avif'
              alt="BgImg"
              style={{ width: "70px" }}
              className=" p-1"
              onClick={() => handleImgClick('http://task.consdeployer.com/api/assets/webImage/web-attach_1679637508839.avif')}
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
              <Form.Control type="text" placeholder="Enter board title" name="boardName" autocomplete="off"  onChange={handleChange.bind()} 
                //  isInvalid={errorValue.boardName!=''?true: false}
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicColor">
              <h6 className="fw-bold " style={{ fontSize: "15px" }}>
                Board Workspace
              </h6>
              <Form.Select aria-label="Default select example" name="workspaceId"
              onChange={handleChange.bind()}
              value={inputValue.workspaceId}>
              <option >Select Workspace</option>
              {allWorkspaces  && allWorkspaces.map((item)=>
             
                <option key={item._id} value={item._id}>{item.workspaceName}</option>
              )}
              
              </Form.Select>
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
          <p className="text-muted m-2">By Using images from Unsplash you agree to their <a href="/">License</a> and <a href="/">Terms of Service</a></p>
        </section>
      </Card>
    </div>
    // </Modal>
  );
};

export default CreateBoardPopup;
