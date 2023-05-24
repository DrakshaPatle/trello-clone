import React, { useState } from "react";
import "./add_card.css";
import {
  AiOutlinePlus,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineShareAlt,
  AiOutlineCopy,
  AiOutlineArrowRight,
  AiOutlineBars,
} from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { BsArchive } from "react-icons/bs";
import { BiLabel, BiCopyAlt } from "react-icons/bi";
import { CiInboxIn, CiCalendarDate, CiInboxOut } from "react-icons/ci";

import { BsPencil } from "react-icons/bs";
import MembersPop from "./CardModels/MembersPop";
import CardTitle from "./CardModels/CardTitle";
import AssignMemberTime from "./CardModels/AssignMemberTime";
import Description from "./CardModels/Description";
import Attachments from "./CardModels/Attachments";
// import Activity from "./CardModels/Activity";
import Comment from "./CardModels/Comment";
import Dates from "./CardModels/Dates";
import CheckList from "./CardModels/CheckList";
import ShowCheckItem from "./CardModels/ShowCheckItem";
import { useDispatch,useSelector } from "react-redux";
import { updateCard,setSelectedCard } from "../../redux/action/card";
import { Button, Card, Form } from "react-bootstrap";
const AddCard = ({handleSelectCard,card,bucket}) => {
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);
  // let desc= selectedCard && selectedCard.cardDescription ? selectedCard.cardDescription:null;
let [description,setDescription]= useState();
  // const [editor, setEditor] = useState(desc);
  const [show,setShow]= useState(false);
  const [showdesc,setShowdesc]= useState(false);
  // console.log('selectedCard',selectedCard,)
  const dispatch =useDispatch()
  const handleSelectCard1 = ()=>{
    handleSelectCard(card,bucket);
  }
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
  const handleonclose = () =>{
    console.log("onclose called")
    setShow(false)
    setShowdesc(false)
  }
  const handlesetdesc =(evt) =>{
    console.log("handle Click ***********")
    setDescription(evt.target.value)
    setShow(true);
  }

  return (
    <>
      <li
        className="d-flex justify-content-between"
        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        onClick={() =>handleSelectCard1()}
        >{card.cardTitle} 
      </li>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        onclose={()=>handleonclose()}

      >
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <CardTitle bucket={bucket} handleonclose={handleonclose} 
            show={show}
            showdesc={showdesc}
            />

            <div className="modal-body">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9">
                  <AssignMemberTime  handleonclose={handleonclose}
                   show={show}
                  showdesc={showdesc} 
                  setShowdesc={setShowdesc}
                  setShow={setShow}
                  
            />
                  {/* <Description/> */}
                  {/* <div>
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
                  </div> */}
                  <Attachments/>
                  <ShowCheckItem />

                  {/* <Activity /> */}
                  <Comment />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3">
                  {/* <div className="row ">
                    <div class="d-flex justify-content-between">
                      <div className="">
                        <p>Suggested</p>
                      </div>
                      <div className="">
                        <AiOutlineSetting />
                      </div>
                    </div>
                  </div> */}
                  {/* <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineUser size={17} /> Join
                      </span>
                    </a>
                  </div>   */}

                  {/* <MembersPop/> */}

                  <MembersPop />
                  {/* <div className=" ">
                    <a href="#" class="card__join ">
                      <span class="btn__text">
                        {" "}
                        <BiLabel size={17} /> Labels
                      </span>
                    </a>
                  </div> */}

                
                  <CheckList />

                  <Dates />

                  {/* <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <GrAttachment size={17} /> Attachment
                      </span>
                    </a>
                  </div>
                  <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <CiInboxIn size={17} /> Cover
                      </span>
                    </a>
                  </div>
                  <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <CiInboxOut size={17} /> Custom Fields
                      </span>
                    </a>
                  </div>
                  <div className="row my-2">
                    <small className="my-2">Power-Ups</small>
                    <a href="#" class=" ul__a ">
                      <span class="btn__text">
                        <AiOutlinePlus size={17} /> Add Power Ups
                      </span>
                    </a>
                  </div>
                  <div className="row">
                    <div class="d-flex justify-content-between">
                      <div className="">
                        <p>Automation</p>
                      </div>
                      <div className="">
                        <AiOutlineSetting />
                      </div>
                    </div>
                  </div>
                  <div className="row my-2">
                    <a href="#" class="  ul__a ">
                      <span class="btn__text">
                        {" "}
                        <AiOutlinePlus size={17} /> Add Button
                      </span>
                    </a>
                  </div>
                  <div className=" ">
                    <small className="my-2">Actions</small>
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineArrowRight size={17} /> Move
                      </span>
                    </a>
                  </div>
                  <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineCopy size={17} /> Copy
                      </span>
                    </a>
                  </div>
                  <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <BiCopyAlt size={17} /> Make Template
                      </span>
                    </a>
                  </div>
                  <div className=" ">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <BsArchive size={17} /> Archive
                      </span>
                    </a>
                  </div>
                  <div className="  my-2">
                    <a href="#" class="card__join">
                      <span class="btn__text">
                        {" "}
                        <AiOutlineShareAlt size={17} /> Share
                      </span>
                    </a>
                  </div>   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCard;
