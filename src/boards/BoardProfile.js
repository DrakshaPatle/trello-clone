import React, { useEffect, useState } from "react";
import "./board.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import {
  AiOutlineUser,
  AiOutlineInbox,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import moment from 'moment'
import {
  setSelectedWorkspace,
  updateVisitedWorkspace
} from "../redux/action/Workspace";
import { FiUsers } from "react-icons/fi";
import { FaTrello } from "react-icons/fa";
import { CiGrid41, CiSettings } from "react-icons/ci";
import { useSelector,useDispatch } from "react-redux";
import { recentVisitedBoard } from "../redux/action/Board";
import CreateBoard from "../components/Bucket/CreateBoard";
import { useNavigate } from "react-router-dom";
import {
  setSelectedBoard,
  updateVisitedBoard,
} from "../redux/action/Board";
const Board = () => {

  const {allWorkspaces,guestWorkspace} = useSelector((store)=>store.workspaceRoot)
  const [recentVisitedBoards,setRecentVisitedBoards]= useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // initialize state variable
  const handlePopupToggle = () => {
    setShowPopup(!showPopup); // toggle the state variable
  };
  useEffect(()=>{
    dispatch(recentVisitedBoard(async function(response){
      if(response.data.success){
        console.log(response,"reponse board")
        setRecentVisitedBoards(response.data.RecentVisitedBoards)
      }else{
        setRecentVisitedBoards([]);
      }
    }));
  },[])
  const handleSelectBoard = (board) => {
    let date = moment(new Date()).format();
    let visitedTime = moment(new Date()).format("h:mm:ss a");
    let visitedDate = date.toString().slice(0, 10);
    let payload = {
      visitedTime,
      visitedDate,
    };
    console.log("date------------", visitedDate, visitedTime);
    dispatch(updateVisitedBoard(board._id, payload));
    dispatch(setSelectedBoard(board));
    navigate(`/boards/${board._id}`);
  };
  const handleUserChange = (workspace) => {
        setShowPopup(!showPopup); // toggle the state variable
        let date= moment(new Date()).format();
        let visitedTime = moment(new Date()).format('h:mm:ss a');
        let visitedDate= date.toString().slice(0,10);
        let payload= {
          visitedTime,visitedDate
        }
        dispatch(updateVisitedWorkspace(workspace._id,payload))
        dispatch(setSelectedWorkspace(workspace));
        // navigate("/");
      };


      console.log("recentVisitedBoards",recentVisitedBoards,)
      console.log(allWorkspaces,"allWorkspaces")
  return (
    <>
      <div className="col-md-9 mt-5">
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="row">
              <div class="card-header mb-2">
                <MdOutlineWatchLater className="ul__icon" size={25} />
                <span className="ul__text">Recently viewed</span>
              </div>
              {recentVisitedBoards && recentVisitedBoards.map((recentboard,key)=>(
                recentboard.boardId && 
                recentboard.boardId ?
                <div class="col-md-3 my-3" key={key}
                onClick={() => handleSelectBoard(recentboard.boardId)}
                >
                <div class="card h-100" style={{ backgroundColor:recentboard ? recentboard.boardId.boardColor: '#02a215',color:"#fff" }}>
                  <div class="card-body">
                    <h6 class="card-title">{recentboard && recentboard.boardId && recentboard.boardId.boardName}</h6>
                  </div>
                  <div class="card-footer text-end bg-transparent border-success">
                    <GoPrimitiveDot size={25} />
                  </div>
                </div>
              </div>
              :null
              ))}
            </div>
              <div className="row">
              <div class="card-header my-2">
                <h6 className="board_work_title"> YOUR WORKSPACES</h6>
              </div>
            {allWorkspaces && allWorkspaces.map((workspace,key)=>(
              <>
              <div class=" " key={key}>
                <div className="alignleft">
                  <span className="boards-header-icon">
                    <span className="Char_text" style={{backgroundColor:workspace.workspaceColor}}>P</span>
                  </span>
                  <span className="fw-bold"> {workspace.workspaceName}</span>
                </div>
                <div className="alignright">
                  <ul className="nav">
                    <li class="nav-item">
                      <a class="nav-link boards--section ul__a" href="#">
                        <FaTrello className="ul__icon" size={20} />
                        <span className="ul__text">Boards </span>
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link boards--section ul__a" href="#">
                        <CiGrid41 className="ul__icon" size={20} />
                        <span className="ul__text">Views </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link boards--section ul__a" href="#">
                        <div class="d-flex justify-content-between">
                          <AiOutlineUser className="ul__icon" size={20} />
                          <span className="ul__text">Members </span>
                          <span className="ml-5  "></span>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link boards--section ul__a" href="#">
                        <CiSettings className="ul__icon" size={20} />
                        <span className="ul__text">Settings </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link boards--section upgrade_bg ul__a"
                        href="#"
                      >
                        <AiOutlineInbox
                          className="ul__icon upgrade_icon"
                          size={20}
                        />
                        <span className="ul__text">Upgrade </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {workspace.createdBoardsId && workspace.createdBoardsId.map((board,key)=>(

                board.boardId && board.boardId?
                  <div class="col-md-3 my-3" key={key}
                  onClick={() => handleSelectBoard(board.boardId)}
                  >
                  <div class="card" style={{ height: "110px", backgroundColor:board.boardId && board.boardId.boardColor ? board.boardId.boardColor: '#02a215',color:"#fff"}}>
                    <div class="card-body">
                      <h6 class="card-title"> {board.boardId && board.boardId.boardName}</h6>
                    </div>
                  </div>
                </div>
                :null
              ))}
                <div class="col-md-3 my-3">
                <div class="card border"  style={{ height: "110px" ,backgroundColor:"#eee" }}  
                onClick={() => handleUserChange(workspace)}
                >
                  <div class="card-body" 
                  >
                    <h6 class="card-title">Create new Board</h6>
                  </div>
                </div>
              </div>
              </>
              ))}
            </div>
            {showPopup && <CreateBoard onClose={()=>handlePopupToggle()} />}
        
            
            <div className="row">
              <div class="card-header my-2">
                <h6 className="board_work_title">
                  {" "}
                  GUEST WORKSPACES
                  <span>
                    <AiOutlineExclamationCircle
                      className="ul__icon"
                      size={23}
                    />
                  </span>
                </h6>
              </div>
             
              {guestWorkspace && guestWorkspace.map((workspace,key)=>(
              <>
               <div class=" " key={key}>
                <div className="alignleft">
                  <a class="nav-link boards--section ul__a" href="#">
                    <div class="d-flex justify-content-between">
                      <FiUsers className="ul__icon" size={20} />
                      <span className="ul__text">{workspace.workspaceName} </span>
                      <span className="ml-5  "></span>
                    </div>
                  </a>
                </div>
              </div>
              {workspace && workspace && 
              workspace.createdBoardsId &&
               workspace.createdBoardsId.map((board,key)=>(
                board.boardId && board.boardId?
                  <div class="col-md-3 my-3" key={key}
                  onClick={() => handleSelectBoard(board.boardId)}>

                  <div class="card" style={{ height: "110px", 
                  backgroundColor:board.boardId && board.boardId.boardColor ? board.boardId.boardColor: '#02a215',color:"#fff"}}>
                    <div class="card-body">
                      <h6 class="card-title"> {board.boardId && board.boardId.boardName}</h6>
                    </div>
                  </div>
                </div>
                :null
              ))}
              </>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
