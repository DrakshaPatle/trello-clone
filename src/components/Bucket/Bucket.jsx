import { Button } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import "./Bucket.css";
 import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { getBucket, editBucket } from "../../redux/action/Bucket";
import AddNewBucket from "./addNewBucket";
import NewCard from "../Card/newCard";
import { DragandDropCard } from "../../redux/action/card";
import { DragandDropBucket } from "../../redux/action/Bucket";
import AddCard from "../Card/addNewCard";
import { setSelectedCard } from "../../redux/action/card";
import { setSelectedBucket } from "../../redux/action/Bucket";
import ListActionsPopup from "./ListActionsPopup";
// import findTime from "../../UserActivity";

const TaskCard = () => {
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  const { allBucket } = useSelector((store) => store.bucketRoot);
  const [show, setShow] = useState(false);
  // console.log("This is Bucket", allBucket);


  const dispatch = useDispatch();
  const alert = useAlert();
  const dragBucketItem = useRef();
  const dragBucketOverItem = useRef();

  const [showeditbucket, setShowEditbucket] = useState(false);
  const [showeditbucketId, setShowEditbucketId] = useState("");
  const [bucketName, setBucketName] = useState("");
  const [bucket, setBuckets] = useState([]);
  const [cards, setCards] = useState([]);
  const [showbucket, setshowBucket] = useState(false);
  const [showcardPopup, setShowCardPopup] = useState(false);
  const [setcardbucketId, setShowCardBucketId] = useState();
  const [changes,setChanges]=useState("");

  const handleDragEnd1 = async ({ destination, source }) => {
    console.log("source", source, "dest", destination);

    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;
    if (destination) {
      //👇🏻 Gets the item that was dragged

      const sourceItem = allBucket.find(
        (obj) => obj._id === source.droppableId
      );
      console.log("sourceItem", sourceItem);
      //👇🏻 Gets the item that was dragged
      const itemMoved = {
        ...sourceItem.cards[source.index],
      };
      //👇🏻 Removes the item from the its source
      sourceItem.cards.splice(source.index, 1);
      console.log("itemMoved", itemMoved);

      // //👇🏻 Add the item to its destination using its destination index
      allBucket.map((obj) =>
        obj._id === destination.droppableId
          ? obj.cards.splice(destination.index, 0, itemMoved)
          : obj
      );
      console.log("bucket", allBucket);

      try {
        let payload = {
          source: source,
          destination: destination,
        };
        dispatch(DragandDropCard(payload, allBucket));
      } catch {
        alert.show("error in update card");
      }
    }
  };

  useEffect(() => {
    getData();
  }, [selectedBoard]);

  useEffect(() => {
        
    const timer = setTimeout(() => {
        console.log(changes,"********************")
      if(changes===true){
        console.log("matched")
        handleEditBucket()
      }
      else if(changes===false){
        setChanges("")
        setShowEditbucket(false);

      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [bucketName,changes])
  const getData = async () => {
    const boardId = selectedBoard._id;
    if (boardId) {
      dispatch(getBucket(boardId));
    }
  };

  const handleAddCardClick = (bucketId) => {
    // const newTasks = ["New Card", ...tasks];
    setShowCardPopup(true);
    setShowCardBucketId(bucketId);
    // setTasks(newTasks);
  };

  const handleCloseBucket = (e) => {
    setshowBucket(false);
  };

  const handleCloseCard = () => {
    setShowCardPopup(false);
  };

  const dragBucketStart = (e, position) => {
    dragBucketItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const dragBucketEnter = (e, position) => {
    dragBucketOverItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const dropBucket = async (e) => {
    console.log("id", dragBucketOverItem.current, dragBucketItem.current);
    if (dragBucketOverItem.current !== dragBucketItem.current) {
      const copyListItems = [...allBucket];
      const dragItemContent = copyListItems[dragBucketItem.current];
      const dest = copyListItems[dragBucketOverItem.current];

      const src = copyListItems.splice(dragBucketItem.current, 1);
      console.log("src", dragItemContent);
      copyListItems.splice(dragBucketOverItem.current, 0, dragItemContent);
      console.log("dest", dest);

      setBuckets(copyListItems);

      try {
        let payload = [
          {
            id: dragItemContent._id,
            index: dragBucketOverItem.current,
          },
          {
            id: dest._id,
            index: dragBucketItem.current,
          },
        ];
        console.log("payload", payload);
        dragBucketItem.current = null;
        dragBucketOverItem.current = null;
        let boardId = selectedBoard ? selectedBoard._id : "";

        dispatch(DragandDropBucket(payload, boardId));
      } catch (error) {
        console.log(error);
        alert.error("error in update bucket");
      }
    }
  };

  const handleEditBucketShow = (bucketid, bucketname) => {
    setShowEditbucket(true);
    setShowEditbucketId(bucketid);
    setBucketName(bucketname);
    setChanges(false)
  };
  const handlesaveBucket = (e, index) => {
    setBucketName(e.target.value);
    setChanges(true)
  };
  // console.log(changes,"-------changes")

  const handleEditBucket = () => {
    //   const sourceItem = allBucket.find(
    //     (item) => item._id ===bucket_id
    //   );
    //   console.log("sourceItem", sourceItem);

    dispatch(
      editBucket(showeditbucketId, bucketName, async function (response) {
        setTimeout(() => {
          setShowCardBucketId("");
          setShowEditbucket(false);
        });
      })
    );
  };

  const handleSelectCard = (card, bucketId) => {
    dispatch(setSelectedCard(card));
    dispatch(setSelectedBucket(bucketId));
  };

  useEffect(() => {
    // const myDiv = document.getElementById("profile");
    //     myDiv.addEventListener('mousemove', () => {
    //         console.log(mouseMovementCount,"mouse move")
    //     mouseMovementCount += 1.8;  }
    // );
    // logDate=new Date()
    // console.log(logDate,"time on load")
    localStorage.setItem("log", new Date());

    return () => {
      console.log("removeEventListener");
      // myDiv.removeEventListener("mousemove",myFunction)
      // calUserActivity('profile',mouseMovementCount)
      // findTime("employee");
    };
  }, []);

  return (
    <>
      <div className="p-3 container-fluid row  bucket_container">
        <div className="d-flex horizontal-scrollable">
          <DragDropContext onDragEnd={handleDragEnd1}>
            {allBucket &&
              allBucket.map((bucket, index) => (
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-12 me-3 mb-3"
                  key={index}
                  id={bucket._id}
                >
                  {/* {console.log("this is console", bucket._id)} */}
                  <div className="card card-block">
                    <div className="list">
                      {showeditbucket && showeditbucketId == bucket._id ? (
                        <>
                          <div
                            className="justify-space-between"
                            style={{ margin: "0.9rem 0.7rem" }}
                          >
                            <input
                              type="text"
                              placeholder="Enter bucket name"
                              value={bucketName}
                              onChange={(e) => handlesaveBucket(e, index)}
                              className="p-1 form-control "
                              // style={{ padding: "1.25rem", width: "250px" }}
                              onBlur={() =>
                                handleEditBucket( )
                              }
                              autoFocus
                            />
                          </div>
                          {/* <ListActionsPopup    handleAddCardClick = { handleAddCardClick} bucketId= {bucket._id}/> */}
                        </>
                      ) : (
                        <>
                        <div class="list-header d-flex justify-content-between">
                          <h3
                            className="list-title"
                            onDragStart={(e) => dragBucketStart(e, index)}
                            onDragEnter={(e) => dragBucketEnter(e, index)}
                            onDragEnd={dropBucket}
                            key={index}
                            draggable
                            onClick={() =>
                              handleEditBucketShow(
                                bucket._id,
                                bucket.bucketName
                              )
                            }
                          >
                            {" "}
                            {bucket.bucketName}{" "}
                          </h3>

                          <ListActionsPopup
                            handleAddCardClick={handleAddCardClick}
                            bucketId={bucket._id}
                          />
                          </div>
                        </>
                      )}
                      <div className={`kanban__container`}>
                        <Droppable droppableId={bucket._id}>
                          {(provided) => (
                            <>
                              {setcardbucketId == bucket._id &&
                              showcardPopup ? (
                                <>
                                  {" "}
                                  <NewCard
                                    handleCloseCard={handleCloseCard}
                                    bucketId={bucket._id}
                                    boardId={selectedBoard._id}
                                  />
                                </>
                              ) : null}
           
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                <ul className="list-items">
                                  {bucket &&
                                    bucket.cards &&
                                    bucket.cards.map((item, index) => (
                                      <Draggable
                                        key={String(item._id)}
                                        draggableId={String(item._id)}
                                        index={index}
                                      >
                                        {(provided) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="card_css "
                                          >
                                            <AddCard handleSelectCard={handleSelectCard}  
                                            card={item}
                                            bucket={bucket}
                                            
                                            />
                                          </div>
                                        )}
                                      </Draggable>
                                    ))}
                                </ul>
                                {provided.placeholder}
                              </div>
                            </>
                          )}
                        </Droppable>
                        {/* </ul> */}
                      </div>
                      <button
                        type="button"
                        className="add-card-btn"
                        onClick={() => handleAddCardClick(bucket._id)}
                      >
                        <AiOutlinePlus  className="me-1"/>
                          Add a Card
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </DragDropContext>

          <div className="col-xs-12 col-sm-6 col-md-3 col-12">
            {showbucket ? (
              <>
                <AddNewBucket handleCloseBucket={handleCloseBucket} />
              </>
            ) : (
              <div className="card card-block" style={{ background: "#eee" }}>
                <button
                  className="add-list-btn  btn"
                  onClick={() => setshowBucket(true)}
                >
                  Add New Bucket
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
