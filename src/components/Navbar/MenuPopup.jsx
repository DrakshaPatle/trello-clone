import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ArchivedItemPopup from "./ArchivedItemPopup";
import "./MenuPopup.css";
const MenuPopup = () => {
    const cardRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };



  useEffect(() => {
    // Close the UserDetails component when the user clicks outside
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "70px",
          fontSize: "22px",
        }}
      >
        <i
          className="fa-solid fa-ellipsis text-muted"
          onClick={handleShowPopup}
          style={{ cursor: "pointer" }}
        ></i>
      </div>

      {/* ....................Menu Popup Section ....................*/}
      {showPopup ? (
        <Card
        ref={cardRef}
          className="shadow rounded-0 popup-card show"
          style={{ position: "absolute", width: "430px",top:"53px", right: "3px",cursor:"pointer",zIndex:"1" }}
        >
          <div className="d-flex mx-auto " fixed="top">
            <p className="text-muted fw-bold mt-3" style={{ fontSize: "18px" }}>
              Menu
            </p>
            <i
              className="fa-solid fa-xmark text-muted"
              onClick={handleClose}
              style={{
                position: "relative",
                left: "175px",
                top: "17px",
                fontSize: "23px",
                cursor: "pointer",
              }}
            ></i>
          </div>

          <hr style={{ marginTop: "2px" }} />
          <div className="container">
            <span className="mx-3 fw-semibold">
              {" "}
              <i
                className="fa-brands fa-trello mx-2"
                style={{ fontSize: "20px" }}
              ></i>
              About this board
            </span>
            <p className="text-muted mx-5">Add a Description to your board</p>

            <div className="mx-3 fw-semibold">
              <i
                className="fa-solid fa-square text-warning mx-2 "
                style={{ fontSize: "20px" }}
              ></i>
              Change background
            </div>

            <div className="mx-3 my-3 text-muted fw-semibold">
              <i
                className="fa-regular fa-rectangle-list text-muted mx-2"
                style={{ fontSize: "20px" }}
              ></i>
              Custom Fields
            </div>
            <div className="mx-3 my-3 fw-semibold">
              <i
                className="fa-regular fa-note-sticky mx-2"
                style={{ fontSize: "20px" }}
              ></i>
              Stickers
            </div>
            {/* <div className="mx-3 my-3 fw-semibold">
              <i
                className="fa-solid fa-box-archive text-muted mx-2"
                style={{ fontSize: "20px" }}
              ></i>
              Archived Items
            </div> */}
            <ArchivedItemPopup  setShowPopup={setShowPopup}/>
            <hr />

            <div>
              <span className="mx-3 fw-semibold">
                {" "}
                <i
                  className="fa-solid fa-bolt mx-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Automation
              </span>
              <p className="text-muted mx-5">Automate cards and more...</p>
            </div>

            <hr />

            <div>
              <span className="mx-3 fw-semibold">
                {" "}
                <i
                  className="fa-solid fa-rocket mx-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Power-Ups
              </span>
              <p className="text-muted mx-5">Google Drive and more...</p>
            </div>
            <hr />

            <div>
              <span className="mx-3 fw-semibold text-muted">
                {" "}
                <i
                  className="fa-solid fa-bars-staggered mx-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Activity
              </span>
              <div className="container">
                <div className="d-flex  my-4">
                  <span
                    className=" d-flex justify-content-center pt-1 user_detail fw-normal mx-2"
                    style={{
                      fontSize: "14px",
                      width: "40px",
                      height: "30px",
                      backgroundColor: "#1960ee",
                      borderRadius: "100%",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    SA
                  </span>
                  <p> <span className="fw-bold mx-1">
                    Sagar Appsdeployer
                  </span>
                   added Checklist to 
                   <NavLink className="mx-1 text-dark">task deployer (home page)</NavLink> </p>
                  
                </div>
                
              </div>
              
            </div>

            {/* <p><i className="fa-solid fa-square text-warning"></i>Change background</p> */}
          </div>
        </Card>
      ) : null}
      <section></section>
    </>
  );
};

export default MenuPopup;
