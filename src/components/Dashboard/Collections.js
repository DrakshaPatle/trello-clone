import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

const Collections = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <>
      <div className="dropdown drop__down" onClick={handleShow}>
        <a
          className=" dropdown-toggle dropdown_invit"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose a Collection
        </a>

        <ul className=" " aria-labelledby="dropdownMenuLink">
          {/* ========== Card model design =========== */}
          {showPopup ? (
            <Card
              ref={popupRef}
              className="shadow rounded-0 shadow"
              style={{
                position: "fixed",
                right: "469px",
                top: "344px",
                width: "350px",
                zIndex: "10",
              }}
            >
              <section>
                <p
                  className=" text-center text-muted mt-3"
                  style={{ fontSize: "18px" }}
                >
                  {" "}
                  Collection
                  <span
                    style={{ position: "relative", left: "110px" }}
                    className="text-muted"
                    onClick={handleClose}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </p>
                <hr className="mx-2" />
                <div className="upgrade mx-3">
                  <p className="upgrade_p">Organize your boards with collections</p>
                  <small className="upgrade_small mb-3">
                    Upgrade to Premium to group your boards by department,
                    topic, team, and more.
                  </small>
                  <buttom className=" upgrade_btn">Try it free for 14 days </buttom>
                </div>
             
              </section>
            </Card>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default Collections;
