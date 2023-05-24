import React from "react";

const ListActionsPopup = ({ handleAddCardClick, bucketId }) => {
  return (
    <>
      <div className="dropdown">
        <div
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ margin:"14px" }}
        >
          <i className="fa-solid fa-ellipsis"></i>
        </div>

        <ul
          className="dropdown-menu"
         
        >
          <p className="text-muted text-center">List Actions</p>
          <hr />
          <li>
            <div
              className="dropdown-item"
              onClick={() => handleAddCardClick(bucketId)}
            >
              Add Card...
            </div>
          </li>
          {/* <li>
            <div className="dropdown-item">Copy list...</div>
          </li>
          <li>
            <div className="dropdown-item">Move list...</div>
          </li>
          <li>
            <div className="dropdown-item">Watch</div>
          </li>
          <hr />
          <p className="text-muted mx-3">Automation</p>
          <li>
            <div className="dropdown-item">
              When a card is added to the list...
            </div>
          </li>
          <li>
            <div className="dropdown-item">Every day , sort list by...</div>
          </li>
          <li>
            <div className="dropdown-item">Every Monday, sort list by...</div>
          </li>
          <li>
            <div className="dropdown-item">Create a rule</div>
          </li>
          <hr />
          <li>
            <div className="dropdown-item">Move all cards in this list...</div>
          </li>
          <li>
            <div className="dropdown-item">
              Archive all cards in this list...
            </div>
          </li>
          <hr />
          <li>
            <div className="dropdown-item">Archive in this list</div>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default ListActionsPopup;
