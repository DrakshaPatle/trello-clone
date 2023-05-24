import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InviteWorkspace from "./InviteWorkspace";

import updateUserActivity from '../../UserActivity'

const Pending = () => {

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
      updateUserActivity('pending')
    } 
  },[])

  return (
    <>

<InviteWorkspace/>

            {/* .........................Members Section.........................  */}
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
                        style={{ padding: "3px 5px" }}
                      >
                        Guests
                      </p>
                    </NavLink>
                    <NavLink className="text-decoration-none" to="/pending">
                      <p
                        className="fw-bold text-dark"
                        style={{
                          backgroundColor: "#e0dfdf",
                          padding: " 3px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        Pending{" "}
                      </p>
                    </NavLink>
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
                  </Col>
                  <Col>
                    {" "}
                    <div className="container">
                      <p className="fw-bold" style={{ fontSize: "20px" }}>
                        Pending (1)
                      </p>
                      <p className="text-muted">
                        These people have requested to join this Workspace. All
                        Workspace members are admins and can edit Workspace
                        settings.
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

                      <hr className="text-muted" />

                      <p
                        className="text-center text-muted"
                        style={{ fontFamily: "inherit" }}
                      >
                        There are no pending requests.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </section>
          
    </>
  );
};

export default Pending;
