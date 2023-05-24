
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../../../redux/action/card";
import { setSelectedCard } from "../../../redux/action/card";
import { ListGroup, ListGroupItem } from "react-bootstrap/";

const MembersPop = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  // const allUsers = useSelector(state => state.userRoot);
  const dispatch = useDispatch();
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  const { selectedCard } = useSelector((store) => store.cardRoot);

  const { selectedBucket } = useSelector((store) => store.bucketRoot);

  let boardMember = selectedBoard && selectedBoard.boardMember;

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShow = () => {
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleClose = () => {
    setShowPopup(!showPopup);
  };




  const handleClick = (member) => {
    let cardassignees = selectedCard && selectedCard.cardassignees;

    let member_id = member.b_memberid._id;

    let findIndex = cardassignees.findIndex(
      (item) => String(item._id) === member_id
    );
    if (findIndex >= 0) {
      cardassignees.pop((item) => String(item._id) === member_id);
    } else {
      cardassignees.push({
        email: member.b_memberid.email,
        userColor: member.b_memberid.userColor,
        _id: member.b_memberid._id,
        userName: member.b_memberid.userName,
      });
    }
    selectedCard.cardassignees = cardassignees;
    dispatch(setSelectedCard(selectedCard));

    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;

    dispatch(updateCard(boardId, bucketId, cardId, selectedCard));
  };






  const [foundUsers, setfoundUsers] = useState(boardMember);
  const [selectedUser, setselectedUser] = useState("");
  

  const handleSearchChange = (e) => {
    setselectedUser(e.target.value);
    let searchQuery = String(e.target.value).toLowerCase();

    if (searchQuery !== "") {

      var data = boardMember.filter((member) => {
        return (
          (member.b_memberid.userName &&
            String(member.b_memberid.userName).toLowerCase().includes(searchQuery)) ||
          (member.b_memberid.email && member.b_memberid.email.toLowerCase().includes(searchQuery))
        );
      });
      if (data.length >= 0) {
        setfoundUsers(data);
      }
    } else {
      setfoundUsers(boardMember);
    }
  };
  



  return (
    <>
      <div className="mt-3" onClick={handleShow}>
        <small className="">Add to card</small>
        <a class="card__join">
          <span class="btn__text">
            {" "}
            <AiOutlineUser size={17} /> Members
          </span>
        </a>
      </div>

      {showPopup ? (
        <Card
          ref={popupRef}
          className="shadow rounded-0 shadow"
          style={{
            position: "fixed",
            right: "210px",
            top: "110px",
            width: "340px",
            zIndex: "1",
          }}
        >
          <section>
            <p
              className=" text-center text-muted mt-3"
              style={{ fontSize: "16px" }}
            >
              {" "}
              Members
              <span
                style={{ position: "relative", left: "114px" }}
                className="text-muted"
                onClick={handleClose}
              >
                <i class="fa-solid fa-xmark fa-s"></i>
              </span>
            </p>
            <hr className="mx-2" />

            <Form className="p-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <input
                  className=" icon-toggle-hide "
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  style={{ width: "300px", height: "40px" }}
                  aria-expanded="false"
                  value={selectedUser}
                  onChange={(e) => handleSearchChange(e)}
                  autoComplete="off"
                  placeholder="Search members"
                />
                {/* <Form.Control type="text" placeholder="Search members" /> */}
              </Form.Group>
            </Form>


            <p className="text-muted mx-2 pop-over-section">Board members</p>

            <div className="scrollable-member">

              <ListGroup>


                {foundUsers &&
                  foundUsers.map((member, index) =>
                    member.b_memberid ? (
                      <ListGroupItem>

                        <Row className="pop-member-list" onClick={(id) => handleClick(member)} key={index}>

                          <Col xs={1} className="mx-2">

                            <span
                              className=" d-flex justify-content-center pt-2 user_detail"
                              style={{
                                width: "32px",
                                height: "32px",
                                lineHeight: "18px",
                                fontSize: "13px",
                                backgroundColor:
                                  member &&
                                    member.b_memberid &&
                                    member.b_memberid.userColor
                                    ? member.b_memberid.userColor
                                    : "#1960ee",
                                borderRadius: "100%",
                                cursor: "pointer",
                                color: "white",
                              }}
                            >
                              {member.b_memberid.userName && member.b_memberid.userName

                                .charAt(0)
                                .toUpperCase()}
                              {member.b_memberid.userName && member.b_memberid.userName

                                .charAt(1)
                                .toUpperCase()}

                            </span>
                          </Col>
                          <Col className="d-flex  align-items-center">
                            <p className="pop-member--text mt-2 mx-1">
                              {member.b_memberid.userName}
                            </p>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ) : null
                  )}

              </ListGroup>
            </div>

            <div>
              {/* <Button className="text-muted border-0 m-2 px-5 py-2  d-flex mx-auto"
                style={{ background: "#eeeeee" }}>
                Show other Workspace members
              </Button> */}
            </div>
          </section>
        </Card>
      ) : null}
    </>
  );
};

export default MembersPop;









