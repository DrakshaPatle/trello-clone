import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {getUsersAllBoard} from '../../redux/action/Board'
import {  setSelectedBoard ,updateVisitedBoard} from "../../redux/action/Board";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import "./RecentDropdown.css"
const RecentMenu = () => {

  const dispatch = useDispatch();
  const [userBoard,setuserBoard]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
      getAllBoard();
  },[])
  const getAllBoard = () =>{
    dispatch(getUsersAllBoard(async function (response){
      setuserBoard(response.data.userallboards)
    }))
  }
  const handleSelectBoard = (board) => {

    let date= moment(new Date()).format();
    let visitedTime = moment(new Date()).format('h:mm:ss a');
    let visitedDate= date.toString().slice(0,10);
    let payload= {
      visitedTime,visitedDate
    }
    dispatch(updateVisitedBoard(board._id,payload))
    dispatch(setSelectedBoard(board));
    navigate(`/boards/${board._id}`)
  };
  return (
    <>
        <div className="dropdown px-2 recent_dropdown">
          <a
            className="dropdown_toggle "
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Recent <i class="fa-solid fa-chevron-down"></i>
          </a>

          <ul
            className="dropdown-menu scrollable-menu px-3 mt-3"
            aria-labelledby="dropdownMenuLink"
          >

            {userBoard &&
              userBoard.map((board) => (
                <div
                  className="dropdown-item"
                  key={board._id}
                  onClick={() => handleSelectBoard(board)}

                >
                  <span className="boards-header-icon">
                    <span
                      className="Char_text"
                      style={{ background: board.boardColor }}
                    >
                      {board.boardName.charAt(0)}
                    </span>
                  </span>
                  <span className="websiteLinkText mx-2">
                    {board.boardName}
                  </span>
                </div>
              ))}
          </ul>
        </div>
    </>
  )
}

export default RecentMenu