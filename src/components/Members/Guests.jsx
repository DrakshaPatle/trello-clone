import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InviteWorkspace from "./InviteWorkspace";
import updateUserActivity from '../../UserActivity'
const Guests = () => {
  const userProfile = useSelector((state) => state.userRoot.userProfile);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(()=>{ 
    localStorage.setItem("log",new Date())
    return () => {
      updateUserActivity('guest')
    } 
  },[])

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


  return (
    <>
     
<InviteWorkspace/>
      
            {/* .........................Guests Section.........................  */}
            <section>
              <div className="container-fluid  mx-5 ">
                <NavLink to="/members" className="text-decoration-none ">
                  <h5 className="fw-bold text-dark">Members</h5>
                </NavLink>
                <Row>
                  <Col xs={2}>
                  <p className="text-muted" style={{fontSize:"13px"}}>Members of Workspace boards</p>
                    <NavLink className="text-decoration-none" to="/members">
                      <p
                        className="fw-bold text-dark "
                        style={{ padding: "3px 5px" }}
                      >
                        Workspace members
                      </p>
                    </NavLink>
                    <NavLink className="text-decoration-none" to="/guests">
                      <p
                        className="fw-bold text-dark"
                        style={{
                          backgroundColor: "#e0dfdf",
                          padding: "3px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        Guests
                      </p>
                    </NavLink>
                    <NavLink className="text-decoration-none" to="/pending">
                      <p
                        className="fw-bold text-dark"
                        style={{ padding: "3px 5px" }}
                      >
                        Pending{" "}
                      </p>
                    </NavLink>
                    {isSidebarOpen ? (
                      <Card
                        className="shadow"
                        style={{
                          width: "200px",
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
                            Decide who can send invitations edit workspace
                            settings, and <br /> more with Premium.{" "}
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
                            Decide who can send invitations edit workspace
                            settings, and <br /> more with Premium.{" "}
                          </p>

                          <NavLink className="text-light">
                            <p>Try Premium free for 14 days</p>
                          </NavLink>
                        </div>
                      </Card>
                    )}
                  </Col>
                  <Col>
                    <div className="container">
                      <p className="fw-bold" style={{ fontSize: "20px" }}>
                        Guests (1)
                      </p>
                      <p className="text-muted">
                        Guests can only view and edit the boards to which
                        they've been added.
                      </p>

                      <div
                        className="container "
                        style={{ marginLeft: "-9px" }}
                      >
                        <Form>
                          <Form.Group
                            className="mb-3 "
                            controlId="formbasicName"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Filter by name"
                              style={{ width: "300px", height: "45px" }}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <p className="fw-bold">Multi-board guests (5)</p>
                      <p className="text-muted">
                        Multi-board guests are more than one Workspaces board{" "}
                        <NavLink className="text-muted">Learn more</NavLink>
                      </p>

                      <hr className="text-muted" />
                      <Row>
                        <Col xs={9}>
                          <Row>
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
                          </Row>
                        </Col>
                        {isSidebarOpen ? (
                          <Col>
                            {" "}
                            <Button
                              className=" border-0 text-muted mx-1"
                              style={{ backgroundColor: "#eeeeee" }}
                            >
                              Add to Workspace
                            </Button>
                          </Col>
                        ) : (
                          <Col>
                            {" "}
                            <Button
                              className=" border-0 text-muted mx-1"
                              style={{ backgroundColor: "#eeeeee" }}
                            >
                              Add to Workspace
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

export default Guests;
