import React, { useState, useEffect, useRef } from "react";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCard, updateCard } from '../../../redux/action/card'
import {
  AiOutlineEye
} from "react-icons/ai";

const CardTitle = ({ bucket,handleonclose }) => {

  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);
  // let desc= selectedCard && selectedCard.cardDescription ? selectedCard.cardDescription:null;
  let [description,setDescription]= useState();
  // const [editor, setEditor] = useState(desc);
  const [show,setShow]= useState(false);
  const [showdesc,setShowdesc]= useState(false);
  const [changes,setChanges]=useState("");

  const [title, setTitle] = useState();

  const dispatch = useDispatch();
  let cardTitle = useRef();
  // useEffect(() => {
  //   let handler = (e) => {

  //     if(cardTitle.current && !cardTitle.current.contains(e.target)){
  //       console.log("title-------------------",title)
  //       handleEditCard()
  //       setShow(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handler);
  // })

  useEffect(() => {
        
    const timer = setTimeout(() => {
        console.log(changes,"********************")
      if(changes===true){
        console.log("matched")
        handleEditCard()
      }
      else if(changes===false){
        setChanges("")
        setShow(false);

      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [title,changes])
  const handleEditCard = () => {
    console.log("Ho rha hai")
    let cardDetail = selectedCard && selectedCard;
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id
    let boardId = selectedBucket && selectedBucket.boardId
    cardDetail.cardTitle = title;
    dispatch(setSelectedCard(cardDetail))
    dispatch(updateCard(boardId, bucketId, cardId, cardDetail))
    setShow(false)
  }

  const handleClick = () => {
    let title = selectedCard && selectedCard.cardTitle;
    setTitle(title)
    setShow(true);
    setChanges(false)
  }

  return (
    <>
      <div className="modal-header ">

        {show ?
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            onBlur={() => handleEditCard()}
            autoFocus
            // ref={cardTitle}
          />
          :
          <h1 className="modal-title fs-5" id="staticBackdropLabel" onClick={() => handleClick()}>
            <span className="popup-header-icon">
              <BsCreditCard2BackFill/>
            </span>
            {selectedCard && selectedCard.cardTitle}
          </h1>
        }

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={ ()=>{handleonclose()}}
        />
      </div>
      <p className="popup_list">
        in list <span className="text-decoration-underline">{bucket.bucketName}</span> <AiOutlineEye />{" "}
      </p>
    
    </>
  );
};

export default CardTitle;
