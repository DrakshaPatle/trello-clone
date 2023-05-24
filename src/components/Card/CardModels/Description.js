import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch,useSelector } from "react-redux";
import DescriptionBox from './DescriptionTextArea';
import { updateCard,setSelectedCard } from "../../../redux/action/card";
import { Button, Card, Form } from "react-bootstrap";

const Description = (props) => {
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);
  // let desc= selectedCard && selectedCard.cardDescription ? selectedCard.cardDescription:null;
let [description,setDescription]= useState();
  // const [editor, setEditor] = useState(desc);
  const [show,setShow]= useState(false);
  const [showdesc,setShowdesc]= useState(false);
  console.log('selectedCard',selectedCard,)
  const dispatch =useDispatch()

  const handleChangeEditorSave = () =>{
    let cardDetail = selectedCard && selectedCard;
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id
    let boardId = selectedBucket && selectedBucket.boardId
    cardDetail.cardDescription = description;
    dispatch(setSelectedCard(cardDetail))
    dispatch(updateCard(boardId, bucketId, cardId, cardDetail))
    setShow(false)

  }
  const handlesetdesc =(evt) =>{
    console.log("handle Click ***********")
    setDescription(evt.target.value)
    setShow(true);
  }

console.log(selectedCard.cardDescription,"-----------------selectedCard")
  return (
    <>
      <div className="row">
        <div class="  my-4">
          <span class="  card-detail-item ">
            <HiMenuAlt2 size={25} />
          </span>
          <h6 class="  card-detail-item mt-1">
            <div class="align-self-center">Description</div>
          </h6>
          {/* <div class=" card-detail-item  pop_section">
            <a href="#" role="button" class=" nav-link">
              Edit
            </a>
          </div> */}
        </div>
        <div className=" ">
          {/* <DescriptionBox 
           handleChange={(data) => {
            setEditor(data)
            setShow(true)
          }
          }
          handlesetdesc={()=>handlesetdesc()}
          desc={desc}
          data={editor}
          {...props}
          /> */}
            {showdesc?
            <textarea value={description} onChange={(e)=>handlesetdesc(e)}/>:

          <textarea value={selectedCard && selectedCard.cardDescription?selectedCard.cardDescription:''} onClick={()=>
          {
            setDescription(selectedCard.cardDescription)
            setShowdesc(true)
            setShow(true)
           }} />}
          {show?<div>
          <Button onClick={() => handleChangeEditorSave()} className="mt-2" >save</Button>
          <Button className="bg-light text-dark border-0 mt-2" onClick={()=>  setShow(false)}>X</Button>
          </div>
          :null}

      </div>
      </div>
    </>
  );
};

export default Description;
