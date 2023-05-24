import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./UserDetailsPopup.css"
import { userLogout } from "../../redux/action/user";
import { useDispatch } from "react-redux";
const UserDetails = ({ setuserDetailPopup }) => {
  const cardRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const userProfile = useSelector(state => state.userRoot.userProfile);

  const handleLogout = () => {
   
    dispatch(userLogout(async function(){
      console.log("CLEAR STORAGE")
  
        window.location.reload();
    
    })) 
  
  };
    useEffect(() => {
      // Close the UserDetails component when the user clicks outside
      const handleClickOutside = (event) => {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
          setuserDetailPopup(false);
        }
      };

      // Add event listener to the document object
      document.addEventListener("mousedown", handleClickOutside);

      // Remove event listener on cleanup
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [cardRef, setuserDetailPopup]);

    
  return (
    <Card
      ref={cardRef}
      className="shadow  popup_card"
      style={{
        width: "280px",
        position: "absolute",
        top: "60px",
        right: "4px",
        cursor: "pointer",
        borderRadius:"5px"
      }}
    >
      {/* ...............Account Section.............. */}
      <section>
        <p className="text-muted pt-3 px-3">ACCOUNT</p>

        <div className="d-flex mx-3">
          <Row>
            
              <span
                className=" d-flex justify-content-center pt-2 mt-1 ml-10" 
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "lightblue",
                  borderRadius: "100%",
                }}
              >

{userProfile && userProfile.userName &&
  <p className="namecircle-inner">
    {userProfile.userName.split(' ')[0].charAt(0).toUpperCase()}
    {userProfile.userName.split(' ').length > 1 && userProfile.userName.split(' ')[1].charAt(0).toUpperCase()}
  </p>
}


              </span>
         
            <Col>
              <Row>
                <span className="fw-bold px-3 ">{userProfile && userProfile.userName}</span>
              </Row>
              <Row className="px-3">{userProfile && userProfile.email}</Row>
            </Col>
          </Row>
        </div>

        <hr />
      </section>
      {/* ...............TaskDeployer Section.............. */}

      {/* <section>
        <div className=" px-3">
        <p className="text-muted">TASK DEPLOYER</p>
        <p>Cards</p>


        </div>

       
      </section>
      <hr /> */}
      {/* ...............Logout Section.............. */}
      <section>
      
        <a className="dropdown-item user-icon" onClick={handleShow}>
          <h6 className=" p-3 py-3 logout" onClick={() => handleLogout()}>Log out</h6>
        </a>
    
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you Sure to Logout?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleLogout()}>
              Log Out
            </Button>
          </Modal.Footer>
        </Modal> */}
      </section>
    </Card>
  );
};

export default UserDetails;
