import React from 'react';
import { useSelector } from "react-redux";
import "./UserCountDropdown.css";


const UserCountDropdown = () => {
    const { selectedBoard } = useSelector((store) => store.boardRoot);
  return (
    <div className="popup-modal">
    {selectedBoard &&
      selectedBoard.boardMember &&
      selectedBoard.boardMember.map((member, key) => (
        member.b_memberid && member.b_memberid?
        <div
          className="UserCountpopup"
          key={key}
          style={{
            backgroundColor: member.b_memberid
              ? member.b_memberid.userColor
              : "popup_color",
          }}
        >
         {member && member.b_memberid && member.b_memberid.userName &&
<p className="popup-inner">
{member.b_memberid.userName.split(' ')[0].charAt(0).toUpperCase()}
{member.b_memberid.userName.split(' ').length > 1 && member.b_memberid.userName.split(' ')[1].charAt(0).toUpperCase()}
</p>
}

        </div>
        :null
      ))}
  </div>
  )
}

export default UserCountDropdown