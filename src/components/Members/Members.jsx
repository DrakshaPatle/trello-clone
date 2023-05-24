import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InviteWorkspace from "./InviteWorkspace";
import updateUserActivity from '../../UserActivity'
import "./Members.css"
const Members = () => {
  const [editForm, setEditForm] = useState(false);
  const userProfile = useSelector((state) => state.userRoot.userProfile);
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  console.log("this is Selected board", selectedBoard);
  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{ 
    localStorage.setItem("log",new Date())
    return () => {
      updateUserActivity('members')
    } 
  },[])

 
  


  const editIconClick = () => {
    setEditForm(!editForm);
  };
  return (
    <>
      <InviteWorkspace />

      {/* .........................Members Section.........................  */}
      <section>
        <div className="container-fluid  mx-5 ">
          <NavLink to="/members" className="text-decoration-none ">
            <h5 className="fw-bold text-dark">Members</h5>
          </NavLink>
          <Row>
            <Col xs={2}>
              <p className="text-muted" style={{ fontSize: "13px" }}>
                Members of Workspace boards
              </p>

              <NavLink className="text-decoration-none" to="/members">
                <p
                  className="fw-bold text-dark "
                  style={{
                    backgroundColor: "#e0dfdf",
                    padding: "3px 5px",
                    borderRadius: "5px",
                  }}
                >
                  Workspace members
                </p>
              </NavLink>
              <NavLink className="text-decoration-none" to="/guests">
                <p className="fw-bold text-dark" style={{ padding: "3px 5px" }}>
                  Guests
                </p>
              </NavLink>
              <NavLink className="text-decoration-none" to="/pending">
                <p className="fw-bold text-dark" style={{ padding: "3px 5px" }}>
                  Pending{" "}
                </p>
              </NavLink>
              {isSidebarOpen ? (
                <Card
                  className="shadow"
                  style={{
                    width: "190px",
                    background: "#8e7cc3",
                    cursor: "pointer",
                  }}
                >
                  <div className="p-2">
                    <p
                      style={{ fontSize: "12px" }}
                      className="text-light fw-bold"
                    >
                      Upgrade for more permissions controls
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        color: "#a2d1f5",
                      }}
                    >
                      Decide who can send invitations edit workspace settings,
                      and <br /> more with Premium.{" "}
                    </p>

                    <NavLink className="text-light">
                      <p>Try Premium free for 14 days</p>
                    </NavLink>
                  </div>
                </Card>
              ) : (
                <Card
                  className="shadow"
                  style={{
                    width: "230px",
                    background: "#8e7cc3",
                    cursor: "pointer",
                  }}
                >
                  <div className="p-2">
                    <p
                      style={{ fontSize: "14px" }}
                      className="text-light fw-bold"
                    >
                      Upgrade for more permissions controls
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "-10px",
                        color: "#a2d1f5",
                      }}
                    >
                      Decide who can send invitations edit workspace settings,
                      and <br /> more with Premium.{" "}
                    </p>

                    <NavLink className="text-light">
                      <p>Try Premium free for 14 days</p>
                    </NavLink>
                  </div>
                </Card>
              )}
            </Col>
            {/* .........................Workspace members.........................  */}
            <Col>
              <div className="container">
                <p className="fw-bold" style={{ fontSize: "20px" }}>
                  Workspace members
                  {selectedBoard &&
                  selectedBoard &&
                  selectedBoard.boardMember.length === 0 ? (
                    "(0)"
                  ) : (
                    <span>
                      {" "}
                      (
                      {selectedBoard &&
                        selectedBoard.boardMember &&
                        selectedBoard.boardMember.length}
                      )
                    </span>
                  )}
                </p>
                <p className="text-muted">
                  Workspace members can view and join all Workspace visible
                  boards and create new boards in the Workspace.
                </p>
                <hr className="text-muted" />

                <p className="fw-bold" style={{ fontSize: "20px" }}>
                  Invite members to join you
                </p>

                <Row>
                  <Col xs={8}>
                    <p className="text-muted">
                      Anyone with an invite link can join this Free Workspace.
                      You can also <br /> disable and create a new invite link
                      for this Workspace at any time.
                    </p>
                  </Col>
                  {isSidebarOpen ? (
                    <Col xs={4}>
                      <Button
                        className=" border-0 text-muted mx-2"
                       
                      >
                        Disable Invite link
                      </Button>

                      <Button
                        className=" border-0 text-muted mx-2"
                        
                      >
                        <i class="fa-solid fa-link"></i>Invite With Link
                      </Button>
                    </Col>
                  ) : (
                    <Col>
                      <Button
                        className=" border-0 text-muted mx-3"
                        
                      >
                        Disable Invite link
                      </Button>

                      <Button
                        className=" border-0 text-muted"
                        
                      >
                        <i class="fa-solid fa-link"></i>Invite With Link
                      </Button>
                    </Col>
                  )}
                </Row>

                <hr className="text-muted" />

                <div className="container my-5" style={{ marginLeft: "-13px" }}>
                  <Form>
                    <Form.Group className="mb-3 " controlId="formbasicName">
                      <Form.Control
                        type="text"
                        placeholder="Filter by name"
                        style={{ width: "300px", height: "45px" }}
                      />
                    </Form.Group>
                  </Form>
                </div>

                <hr className="text-muted " />

                <Row>
                  <Col xs={9}>
                    {/* <Row>
                            <span
                              className=" d-flex justify-content-center pt-2"
                              style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "lightblue",
                                borderRadius: "100%",
                              }}
                            >
                              {userProfile &&
                                userProfile.userName &&
                                userProfile.userName.charAt(0).toUpperCase()}
                              {userProfile &&
                                userProfile.userName &&
                                userProfile.userName.charAt(1).toUpperCase()}
                            </span>

                            <Col>
                              <Row>
                                <span className="fw-bold px-3 ">
                                  {userProfile && userProfile.userName}
                                </span>
                              </Row>
                              <Row className="px-3">
                                {userProfile && userProfile.email}
                              </Row>
                            </Col>
                          </Row> */}

                    <div className="me-2 mt-2">
                      {selectedBoard &&
                        selectedBoard.boardMember &&
                        selectedBoard.boardMember.map((member, key) =>
                          member && member ? (
                            <>
                              <Row>
                                <span
                                  className=" d-flex justify-content-center pt-2"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: member.b_memberid
                                      ? member.b_memberid.userColor
                                      : "namecircle_color",
                                    borderRadius: "100%",
                                  }}
                                >
                                  {member &&
                                    member.b_memberid &&
                                    member.b_memberid.userName && (
                                      <p className="namecircle-inner">
                                        {member.b_memberid.userName
                                          .split(" ")[0]
                                          .charAt(0)
                                          .toUpperCase()}
                                        {member.b_memberid.userName.split(" ")
                                          .length > 1 &&
                                          member.b_memberid.userName
                                            .split(" ")[1]
                                            .charAt(0)
                                            .toUpperCase()}
                                      </p>
                                    )}
                                </span>

                                <Col>
                                  <Row>
                                    <span className="fw-bold px-3 ">
                                      {" "}
                                      {member &&
                                        member.b_memberid &&
                                        member.b_memberid.userName && (
                                          <p>{member.b_memberid.userName}</p>
                                        )}
                                    </span>
                                  </Row>

                                  <Row style={{ marginTop: "-14px" }}>
                                    <span className="px-3">
                                      {" "}
                                      {member &&
                                        member.b_memberid &&
                                        member.b_memberid.email && (
                                          <p>{member.b_memberid.email}</p>
                                        )}
                                    </span>
                                  </Row>
                                </Col>
                              </Row>
                            </>
                          ) : (
                            <p className="text-muted text-center">
                              There are no members in this Workspace
                            </p>
                          )
                        )}
                    </div>
                  </Col>
                  {isSidebarOpen ? (
                    <Col>
                      {" "}
                      <Button
                        className=" border-0 text-muted "
                        style={{ width:"120px", marginRight:"10px" }}
                      >
                        Admin <i class="fa-regular fa-circle-question"></i>
                      </Button>
                      <Button
                        className=" border-0 text-muted"
                        style={{ width:"120px", marginRight:"10px" }}
                      >
                        <i class="fa-solid fa-xmark"></i> Remove...
                      </Button>
                    </Col>
                  ) : (
                    <Col>
                      {" "}
                      <Button
                        className=" border-0 text-muted "
                        style={{ width:"120px" }}
                      >
                        Admin <i class="fa-regular fa-circle-question"></i>
                      </Button>
                      <Button
                        className=" border-0 text-muted"
                        style={{ width:"120px",marginRight:"10px"  }}
                      >
                        <i class="fa-solid fa-xmark"></i> Remove...
                      </Button>
                    </Col>
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Members;
