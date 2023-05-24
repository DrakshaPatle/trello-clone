import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCard, updateCard } from '../../../redux/action/card'
import { Button } from "react-bootstrap";
import { HiMenuAlt2 } from "react-icons/hi";

const AssignMemberTime = ({show,showdesc,handleonclose,setShowdesc,setShow}) => {

  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);
  const Duedate = selectedCard.cardDate;
  // console.log("This is Due Date",Duedate)
  // const [show,setShow]= useState(false);
  // const [showdesc,setShowdesc]= useState(false);
const  [description,setDescription]= useState();
const dispatch = useDispatch();
const [IsChecked,setIsChecked] = useState(false)
  // console.log("Assign member ============",selectedCard && selectedCard.cardassignees  && selectedCard.cardassignees)

  const handleChangeEditorSave = () =>{
    let cardDetail = selectedCard && selectedCard;
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id
    let boardId = selectedBucket && selectedBucket.boardId
    cardDetail.cardDescription = description;
    dispatch(setSelectedCard(cardDetail))
    dispatch(updateCard(boardId, bucketId, cardId, cardDetail))
    // setShow(false)
    // setShowdesc(false)
    handleonclose();

  }
  const handlesetdesc =(evt) =>{
    console.log("handle Click ***********")
    setDescription(evt.target.value)
    setShow(true);
  }
  // const handleonclose = () =>{
  //   console.log("onclose called")
  //   setShow(false)
  //   setShowdesc(false)
  // }
  const handleEditDesc = () =>{
    setDescription(selectedCard.cardDescription)
   setShow(true)
   setShowdesc(true)
  }


  const handleIsChecked = ()=>{
    console.log("Clicked")
    setIsChecked(false)
  }
  return (
    <>
      <div className="row">
        <div className="card-detail-data">
          <div className="card-detail-item ">
            <h6 className="mb-0">Member</h6>
            {selectedCard && selectedCard.cardassignees && selectedCard.cardassignees.map((member) => (

              <span className="popup_circle mx-1" >
                {/* {member && member.userName && member.userName.charAt(0).toUpperCase()}
                 {member && member.userName && member.userName.charAt(1).toUpperCase()}  */}

                {member && member.userName.split(' ')[0].charAt(0).toUpperCase()}
                {member && member.userName.split(' ').length > 1 && member.userName.split(' ')[1].charAt(0).toUpperCase()}
              </span>

            ))}
            <span class="popup_circle mt-4 mx-1">
              <AiOutlinePlus size={20} />
            </span>
          </div>
          {/* <div className="card-detail-item ">
            <h6 className="text-center">Notifications</h6>

            <span class=" pop_section">
              {" "}
              <AiOutlinePlus size={20} /> Watch{" "}
            </span>
          </div> */}
          {selectedCard && selectedCard.cardDate?
          <div className="card-detail-item ">
          <h6 className="text-center">Due date</h6>
          <div class="form-check  pop_section">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              onClick={handleIsChecked}
            />
            <span className=""> {selectedCard.cardDate.dueDate} at {selectedCard.cardDate.dueTime}
            
            
            
             <span className=" p-1  text-light mx-1"
          style={{backgroundColor:"#ef7878"}}>
          
            
            {selectedCard.cardDate.status}</span> </span>
          </div>
        </div>:""
          }
          
        </div>
        <div className="row">
        <div class="  my-4">
          <span class="  card-detail-item ">
            <HiMenuAlt2 size={25} />
          </span>
          <h6 class="  card-detail-item mt-1">
            <div class="align-self-center">Description</div>
          </h6>
          <div class=" card-detail-item  pop_section"   onClick={() =>handleEditDesc()}>
            {/* <a href="#" role="button" class=" nav-link" > */}
              Edit
            {/* </a> */}
          </div>
        </div>
        <div>
        <div className="row gutter">
        {showdesc ?
        
          <textarea className="assignmember_textarea" value={description} onChange={(e) => handlesetdesc(e)} />:

          selectedCard && selectedCard.cardDescription?
           <textarea className="assignmember_description_area" value={selectedCard && selectedCard.cardDescription ? selectedCard.cardDescription : ''}
           onClick={() =>handleEditDesc()}
           />:null
          }
          </div>
        {show ? <div  className=" gutter">
          <button onClick={() => handleChangeEditorSave()} className="btn-memberTime button-primary mt-2" >save</button>
          <button className="btn-memberTime button--cancle ms-2 mt-2" onClick={() => {setShowdesc(false)
          setShow(false)}}>Cancel</button>
        </div>
          : null}
      </div>
      </div>
      </div>
    </>
  );
};

export default AssignMemberTime;
