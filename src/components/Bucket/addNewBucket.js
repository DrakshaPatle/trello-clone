import { useState } from "react";
import { useAlert } from "react-alert";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBucket } from "../../redux/action/Bucket";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const AddNewBucket = ({ handleCloseBucket }) => {
  const [bucketName, setbucketName] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  const { allBucket } = useSelector((store) => store.bucketRoot);
  const handleClose = () => {
    handleCloseBucket();
  };
  const handleSaveClick = () => {
    console.log(selectedBoard, "selectedBoard", allBucket);
    let boardId = selectedBoard._id;
    let bucketIndex = allBucket.length;
    let payload = {
      bucketName,
      bucketIndex,
      boardId,
    };

    console.log(payload, "pauload");
    dispatch(
      addBucket(payload, boardId, async function(response) {
        if (response) {
          alert.show(response.data.message);
          handleCloseBucket();
        } else {
          alert.error(response.data.message);
          handleCloseBucket();
        }
      })
    );
  };
  console.log(bucketName, "bucketname");
  return (     
    <div style={{backgroundColor: "#e5e5e5", padding: "10px 5px"}}> 
  
     
        <input
          type="text"
          placeholder="Enter bucket name"
          value={bucketName}
          onChange={(e) => setbucketName(e.target.value)}
          className="p-1 form-control"
          style={{padding: "1.25rem" }}
        /> 
        {/* <button onClick={() => handleSaveClick()} className="btn btn-primary m-2" style={{padding: "0px 5px"}}>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button onClick={() => handleClose()} className="btn btn-danger m-2" style={{padding: "0px 5px", fontSize: "14px"}}>
          <i className="fa-solid fa-trash"></i>
        </button> */}
 
        <button
          onClick={() => handleSaveClick()}
          className=" m-2 add-card-btncross"
          style={{ padding: "5px 5px" }}
        > 
          Add Card 
        </button>
        <span
         onClick={() => handleClose()}
          className=" "
          style={{ padding: "0px 5px", border:"none" }}
        > 
          <RxCross2 size={20} />
        </span>
      
    </div>
  );
};
export default AddNewBucket;
