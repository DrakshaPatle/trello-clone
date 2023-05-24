import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const ArchivedItemPopup = (prop) => {
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
      prop.setShowPopup(false)
    };
  
    const handleCloseArchiveCard = ()=>{
      setShowPopup(false)
    }
  
  
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
    <div>
          <div className="mx-3 my-3 fw-semibold" onClick={handleShowPopup}>
              <i
                className="fa-solid fa-box-archive text-muted mx-2"
                onClick={handleClose}
                style={{ fontSize: "20px" }}
              ></i>
              Archived Items
            </div>
     

      {/* ....................Menu Popup Section ....................*/}
      {showPopup ? (
        <Card
        ref={cardRef}
          className=" rounded-0 popup-card show"
          style={{ position: "absolute", width: "430px",height:"615px",top:"0px", right: "0px",zIndex:"1" }}
        >
          <div className="d-flex mx-auto " fixed="top">
          <i className="fa-solid fa-angle-left text-muted"
          onClick={handleCloseArchiveCard}
          style={{position:"relative",right:"150px",top:"20px",fontSize: "23px"}}></i>
            <p className="text-muted fw-bold mt-3" style={{ fontSize: "18px" }}>
              Archive
            </p>
            <i
              className="fa-solid fa-xmark text-muted"
              onClick={handleClose}
              style={{
                position: "relative",
                left: "165px",
                top: "17px",
                fontSize: "23px",
                cursor: "pointer",
              }}
            ></i>
          </div>
<hr style={{marginTop:"9px"}}/>
     <div>
     <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search archive..."
              className="me-3 mx-3 rounded-0"
              aria-label="Search"
            />
            <Button  className='rounded-0 border-0 text-muted' style={{width:"200px",background:"#E2E4E6"}}>Switch to lists</Button>
          </Form>
     </div>

     <div className='mx-auto mt-3'>
<Card className='shadow' style={{width:"300px"}}>
  <div className='text-muted mx-3 mt-3'>
    Functionality
<p>  <i
                className="fa-solid fa-box-archive text-muted mx-1"
               
              ></i>Archived</p>
  </div>

</Card>
<div className='d-flex   mt-3'>
<NavLink className="text-muted">Send to board</NavLink>
<NavLink className="text-muted mx-3">Delete</NavLink>
</div>


     </div>
            {/* <p><i className="fa-solid fa-square text-warning"></i>Change background</p> */}
     <div className='mx-auto mt-3'>
<Card className='shadow' style={{width:"300px"}}>
  <div className='text-muted mx-3 mt-3'>
    Functionality
<p>  <i
                className="fa-solid fa-box-archive text-muted mx-1"
               
              ></i>Archived</p>
  </div>

</Card>
<div className='d-flex   mt-3'>
<NavLink className="text-muted">Send to board</NavLink>
<NavLink className="text-muted mx-3">Delete</NavLink>
</div>


     </div>
            {/* <p><i className="fa-solid fa-square text-warning"></i>Change background</p> */}
         
        </Card>
      ) : null}
    </div>
  )
}

export default ArchivedItemPopup