import React, { useState } from "react";

const LeaveBoard = () => {
  const [show, setshow] = useState(false);
  const [leave, setLeave] = useState(false);

  const onClick = () => setLeave(true);

  //   const handleShow = () => {
  //     if (show === false) {
  //       setshow(true);
  //     } else {
  //       setshow(false);
  //     }
  //   };

  const handleClose = () => {
    console.log("Button  Clicked");

    setshow(false);
  };
  return (
    <>
      <Card
        ref={popupRef}
        className="shadow rounded-0 shadow"
        style={{
          position: "fixed",
          right: "210px",
          top: "110px",
          width: "370px",
          zIndex: "1",
        }}
      >
        <section>
          <p
            className=" text-center text-muted mt-3"
            style={{ fontSize: "18px" }}
          >
            TASK DEPLOYER
            <span
              style={{ position: "relative", left: "114px" }}
              className="text-muted"
              onClick={handleClose}
            >
              <i class="fa-solid fa-xmark"></i>
            </span>
          </p>
          <hr className="mx-2" />

          <div class="d-flex justify-content-between">
            <span className="text-muted ms-3 mx-2" onClick={onClick}>
              Leave Board
            </span>
          </div>
          { leave ?
          <div>
            <p>You will be removed from all cards on this board. </p>
            <div>
              <Button
                className="text-muted border-0 m-2 px-5 py-2 d-flex "
                style={{ background: "#b04632" }}
              >
                Leave
              </Button>
            </div>
          </div>
          : null }
        </section>
      </Card>
    </>
  );
};

export default LeaveBoard;
