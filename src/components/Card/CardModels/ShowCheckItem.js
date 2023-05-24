import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCard } from "../../../redux/action/card";
import { updateCard } from "../../../redux/action/card";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const ShowCheckItem = () => {
  const { selectedCard } = useSelector((store) => store.cardRoot);
  const { selectedBucket } = useSelector((store) => store.bucketRoot);

  const dispatch = useDispatch();
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [checklistNewItemId, setchecklistNewItemId] = useState("");
  const [checklistId, setChecklistId] = useState("");
  const [checklistItemId, setChecklistItemId] = useState("");
  const [listItemValue, setListItemValue] = useState("");
  const [checklistTitle, setCheckListTitle] = useState("");
  const [deletePopup, setdeletePopup] = useState(false);
  const [checklistdeleteId, setChecklistdeleteId] = useState("");
  const popupRef = useRef(null);
  const [item, setItem] = useState("");
  const handleAddItem = (id) => {
    setIsAddingItem(true);
    setchecklistNewItemId(id);
  };

  const handledeletePopup = (id) => {
    if (deletePopup === false) {
      setdeletePopup(true);
      setChecklistdeleteId(id);
    } else {
      setdeletePopup(false);
    }
  };

  const handleclosedeletepopup = () => {
    setdeletePopup(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setdeletePopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const handlecloseremovepopup = () => {
    setdeletePopup(false);
  };

  const handleCancelAddItem = () => {
    setIsAddingItem(false);
  };

  const handleSaveNewItem = () => {
    let checklist = selectedCard && selectedCard.checklist;

    let findIndex = checklist.findIndex(
      (item) => String(item._id) === checklistNewItemId
    );
    let sourceItem = checklist.find(
      (item) => String(item._id) === checklistNewItemId
    );
    if (sourceItem) {
      sourceItem.checklistItem.push({
        itemTitle: item,
        itemStatus: false,
      });
    }
    checklist.splice(findIndex, 1, sourceItem);

    selectedCard.checklist = checklist;
    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setItem("");
    setIsAddingItem(false);
    setChecklistId("");
  };

  const handleCheckItem = (checklistId, itemId) => {
    let checklist = selectedCard && selectedCard.checklist;

    let findIndex = checklist.findIndex(
      (item) => String(item._id) === checklistId
    );
    let sourceItem = checklist.find((item) => String(item._id) === checklistId);
    if (sourceItem) {
      let Index = sourceItem.checklistItem.findIndex(
        (item) => String(item._id) === itemId
      );
      let checkItem = sourceItem.checklistItem.find(
        (item) => item._id === itemId
      );
      checkItem.itemStatus = !checkItem.itemStatus;
      sourceItem.checklistItem.splice(Index, 1, checkItem);
    }
    console.log("source item ------------", sourceItem, checklist);

    selectedCard.checklist = checklist;
    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setItem("");
    setIsAddingItem(false);
  };
  const handleDeleteChecklist = () => {
    console.log(checklistdeleteId, "checklistId ======");
    let checklist = selectedCard && selectedCard.checklist;
    let findIndex = checklist.findIndex(
      (item) => String(item._id) === checklistdeleteId
    );
    let sourceItem = checklist.find(
      (item) => String(item._id) === checklistdeleteId
    );
    if (sourceItem) {
      checklist.splice(findIndex, 1);
    }

    selectedCard.checklist = checklist;
    dispatch(setSelectedCard(selectedCard));
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;
    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setdeletePopup(false);
    setChecklistdeleteId("");
  };

  const handleEditCheckItem = (listItem) => {
    setChecklistItemId(listItem._id);
    setListItemValue(listItem.itemTitle);
  };
  const handleEditNewItem = (checklistId, itemId) => {
    let checklist = selectedCard && selectedCard.checklist;

    let findIndex = checklist.findIndex(
      (item) => String(item._id) === checklistId
    );
    let sourceItem = checklist.find((item) => String(item._id) === checklistId);
    if (sourceItem) {
      let Index = sourceItem.checklistItem.findIndex(
        (item) => String(item._id) === itemId
      );
      let checkItem = sourceItem.checklistItem.find(
        (item) => item._id === itemId
      );
      checkItem.itemTitle = listItemValue;
      sourceItem.checklistItem.splice(Index, 1, checkItem);
    }
    console.log("source item ------------", sourceItem, checklist);

    selectedCard.checklist = checklist;
    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setItem("");
    setIsAddingItem(false);
    setChecklistItemId("");
  };

  const handleTitleEdit = (checklist) => {
    setChecklistId(checklist._id);
    setCheckListTitle(checklist.checklistTitle);
  };
  const handleEditListTitle = (checklistId) => {
    let checklist = selectedCard && selectedCard.checklist;

    let findIndex = checklist.findIndex(
      (item) => String(item._id) === checklistId
    );
    let sourceItem = checklist.find((item) => String(item._id) === checklistId);
    if (sourceItem) {
      sourceItem.checklistTitle = checklistTitle;
    }
    checklist.splice(findIndex, 1, sourceItem);

    selectedCard.checklist = checklist;
    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
    setChecklistId("");
    setCheckListTitle("");
  };
  return (
    <>
      {selectedCard &&
        selectedCard.checklist &&
        selectedCard.checklist.map((checklist) => (
          <>
            <div className="d-flex justify-content-between mt-3">
              <div className="alignleft">
                <span className="boards-header-icon">
                  <span>
                    <AiOutlineCheckSquare size={25} />
                  </span>
                </span>
                {checklistId === checklist._id ? (
                  <div
                    className="d-block"
                    style={{ position: "relative", top: "-50px", left: "25px" }}
                  >
                    <Form>
                      <input
                        className="form-control form-control-sm ml-10"
                        id="exampleFormControlTextarea1"
                        style={{ width: "540px" }}
                        placeholder="Add an item"
                        value={checklistTitle}
                        onChange={(evt) => setCheckListTitle(evt.target.value)}
                      />
                    </Form>

                    <Button
                      onClick={() => handleEditListTitle(checklist._id)}
                      className="m-2 mx-3"
                      style={{fontSize:"0.9rem", padding: "0.21rem 0.54em" }}
                    >
                      save
                    </Button>
                    <Button
                      className="bg-light text-dark border-0  "
                      onClick={() => setChecklistId("")}
                      style={{ fontSize:"0.9rem", padding: "0.21rem 0.54em" }}
                    >
                      X
                    </Button>
                  </div>
                ) : (
                  <span
                    className="fw-bold"
                    onClick={() => handleTitleEdit(checklist)}
                  >
                    {" "}
                    {checklist && checklist.checklistTitle}
                  </span>
                )}
              </div>
              <div className="alignright">
                {checklistId !== "" && checklist._id === checklistId ? null : (
                  <a className="nav-link boards--section ul__a" href="#">
                    <span
                      className="ul__text mx-2"
                      onClick={() => handledeletePopup(checklist._id)}
                    >
                      Delete{" "}
                    </span>
                  </a>
                )}

                {deletePopup ? (
                  <Card
                    ref={popupRef}
                    style={{
                      position: "fixed",
                      right: "305px",
                      top: "385px",
                      width: "360px",
                      zIndex: "1",
                    }}
                    className="shadow rounded-0 p-3"
                  >
                    <div className="d-flex mx-auto">
                      <h6 className="text-muted text-center mt-1">
                        {" "}
                        Delete Work Update
                      </h6>
                      <i
                        className="fa-solid fa-x text-muted"
                        style={{
                          cursor: "pointer",
                          position: "relative",
                          right: "-80px",
                          top: "5px",
                          fontSize: "15px",
                        }}
                        onClick={() => handleclosedeletepopup()}
                      ></i>{" "}
                    </div>
                    <hr />
                    <p className=" text-muted" style={{ fontSize: "16px" }}>
                      Deleting a checklist is permanent and there is no way to
                      get it back.
                    </p>
                    <Button
                      variant="danger"
                      className="mx-1"
                      onClick={() => handleDeleteChecklist()}
                    >
                      Delete checklist
                    </Button>
                  </Card>
                ) : null}
              </div>
            </div>
            <div className="row my-2 gutter" style={{ marginTop: "-7px" }}>
              <div className="col-md-1" style={{ marginLeft: "-38px" }}>
                <span className="boards-header-icon">
                  <span>0%</span>
                </span>
              </div>
              <div className="col-md-11">
                <div
                  className="progress"
                  style={{ width: "530px", marginLeft: "-15px" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            {checklist &&
              checklist.checklistItem &&
              checklist.checklistItem.map((listItem) => (
                <div
                  className="d-flex justify-content-between gutter  "
                  style={{ marginTop: "-10px" }}

                >
                  <div className="alignleft mb-3">
                    <div className="form-check mb-3">
                   
                      <input
                        checked={listItem.itemStatus}
                        className="form-check-input border border-secondary "
                        type="checkbox"
                        style={{
                          marginLeft: "-50px",
                          width: "19px",
                          height: "19px",
                        }}
                        value=""
                        id="flexCheckDefault"
                        onClick={() =>
                          handleCheckItem(checklist._id, listItem._id)
                        }
                      />
                      {checklistItemId === listItem._id ? (
                        <div className="m-2">
                          <Form>
                            <textarea
                              className="form-control  ml-10 "
                              id="exampleFormControlTextarea1"
                              rows="2"
                              style={{ marginLeft: "-20px" }}
                              type="text"
                              placeholder="Add an item"
                              value={listItemValue}
                              onChange={(evt) =>
                                setListItemValue(evt.target.value)
                              }
                            ></textarea>
                          </Form>
                          <div class="d-flex justify-content-between ">
                          <div className="alignleft">
                            <Button
                              onClick={() =>
                                handleEditNewItem(checklist._id, listItem._id)
                              }
                              className="mt-2"
                              style={{ marginLeft: "-25px", fontSize:"0.9rem", padding: "0.21rem 0.54em" }}
                            >
                              save me
                            </Button>
                            <Button
                              className="bg-light text-dark border-0 mt-2"
                              onClick={() => setChecklistItemId("")}
                            >
                              X
                            </Button>
                          </div>
                           
                            <div class="alignright mt-2">
                            <span
                              className="text-muted"
                              style={{ marginLeft: "115px" }}
                            >
                              <span className="me-3 text-decoration-underline">
                                <i className="fa-solid fa-user-plus "></i>Assign
                              </span>
                              <span className="me-3 text-decoration-underline">
                                <i className="fa-regular fa-clock mx-1"></i>Due
                                date
                              </span>
                              <span className="me-3">
                                <i className="fa-regular fa-face-smile"></i>
                              </span>
                              <span className="me-3">
                                <i className="fa-solid fa-at"></i>
                              </span>
                              <span className="me-3">
                                <i className="fa-solid fa-ellipsis"></i>
                              </span>
                            </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <label
                          className={listItem && listItem.itemStatus == true ? "form-check-label mt-1 text-decoration-line-through" : "form-check-label mt-1" }
                          for="flexCheckDefault"
                          style={{ marginLeft: "-18px" }}
                          onClick={() => handleEditCheckItem(listItem)}
                        >
                          {listItem && listItem.itemTitle && listItem.itemTitle}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            {isAddingItem && checklistNewItemId === checklist._id ? (
              <div className="m-2">
                <Form>
                  <textarea
                    className="form-control ml-10"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="Add an item"
                    style={{ marginLeft: "22px" }}
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                  ></textarea>
                </Form>
                <Button
                  onClick={() => handleSaveNewItem()}
                  className="mt-2"
                  style={{ marginLeft: "28px", fontSize:"0.9rem", padding: "0.21rem 0.54em" }}
                >
                  Add
                </Button>
                <Button
                  className="bg-light text-dark border-0 mt-2 ms-2"
                  onClick={handleCancelAddItem}
                  style={{fontSize:"0.9rem", padding: "0.21rem 0.54em" }}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <button
                className="button3 boards--section ul__a p-2 border-0 mx-4 my-3"
                onClick={() => handleAddItem(checklist._id)}
              >
                <span className="ul__text mx-3">Add an item</span>
              </button>
            )}
          </>
        ))}
    </>
  );
};

export default ShowCheckItem;
