import { useState } from "react";
import { useAlert } from "react-alert";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/action/card";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const NewCard = ({ handleCloseCard, bucketId, boardId }) => {
  const [cardTitle, setCardTitle] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleSaveCard = () => {
    let payload = {
      bucketId,
      cards: {
        cardTitle,
      },
    };
    console.log(payload, "add card payload");
    dispatch(
      addCard(payload, boardId, async function(response) {
        if (response) {
          alert.show(response.data.message);
          handleCloseCard();
        } else {
          alert.error(response.data.message);
          handleCloseCard();
        }
      })
    );
  };
  const handleClose = (index) => {
    handleCloseCard();
  };
  return (
    <div  style={{margin: "0.5rem"}}>
      <textarea
        class="form-control"
        placeholder="Enter a title for this card"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
      
      ></textarea>
    
        <button
          onClick={() => handleSaveCard()}
          className=" m-2 add-card-btncross"
          style={{ padding: "5px 5px" }}
        > 
          Add card 
        </button>
        <span
          onClick={() => handleClose()}
          className=" "
          style={{ padding: "0px 5px", border:"none" }}
        > 
          <RxCross2 size={27} />
        </span>
    
    </div>
  );
};
export default NewCard;
