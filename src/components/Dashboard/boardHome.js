import React, { useState } from "react";
import "../Workspace/InviteWorkspace.css";
import { useSelector ,useDispatch} from "react-redux";
import CreateBoard from "../Bucket/CreateBoard";
import ShareWorkspace from '../Members/InviteWorkspace'
import Collections from "./Collections";
import {
  setSelectedBoard,
  updateVisitedBoard,
} from "../../redux/action/Board";


import moment from "moment";
import { useNavigate } from "react-router-dom";
const BoardHome = () => {
  const { selectedWorkspace } = useSelector((store) => store.workspaceRoot);
  const { allBoards } = useSelector((store) => store.boardRoot);
  const [showPopup, setShowPopup] = useState(false); // initialize state variable

  const [editForm ,setEditForm] = useState(false)
  const [sortBy, setSortBy] = useState("recent"); // default value is "recent"

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editIconClick = ()=>{
    setEditForm(!editForm)

  }



  const sortBoards = () => {
    if (sortBy === "recent") {
      // sort by most recently active
      return allBoards.sort((a, b) =>
        moment(b.lastModified).diff(moment(a.lastModified))
      );
    } else if (sortBy === "az") {
      // sort alphabetically A-Z
      return allBoards.sort((a, b) => a.boardName.localeCompare(b.boardName));
    } else if (sortBy === "za") {
      // sort alphabetically Z-A
      return allBoards.sort((a, b) => b.boardName.localeCompare(a.boardName));
    }
  };
  
  const handlePopupToggle = () => {
    setShowPopup(!showPopup); // toggle the state variable
  };
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
  return (
    <>
      <div className="body__main ">
        <div className="container-fluid ">
        <ShareWorkspace/>
         
          <div className="row" 
          style={{marginTop:"0px"}}>
            <h5 className="mb-4">Boards</h5>

            <div class=" ">
              <div class="alignleft">
                <small>Sort by</small>
                <div className="dropdown drop__down">
                  <a
                    className=" dropdown-toggle dropdown_invit"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Most recently active
                  </a>

                  <ul
                    className="dropdown-menu dropdown-menu-end px-3"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {/* <li className="dropdown-item">
                        <span className="websiteLinkText"> Most recently active</span>
                    </li> */}

<li className="dropdown-item" onClick={() => setSortBy("recent")}>
    <span className="websiteLinkText">Most recently active</span>
</li>


<li className="dropdown-item" onClick={() => setSortBy("az")}>
    <span className="websiteLinkText">Alphabetically A-Z</span>
</li>
<li className="dropdown-item" onClick={() => setSortBy("za")}>
    <span className="websiteLinkText">Alphabetically Z-A</span>
</li>

                    <li className="dropdown-item">
                        <span className="websiteLinkText"> Least recently active</span>
                    </li>
                    {/* <li className="dropdown-item">
                        <span className="websiteLinkText">Alphabetically A-Z</span>
                    </li>
                    <li className="dropdown-item">
                        <span className="websiteLinkText">Alphabetically Z-A</span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div class="alignleft mx-3">
                <small> Filter by</small>
                <Collections/>
              </div>
              <div class="alignright">
                <small>Sort by</small>
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Boards"
                  />
                </div>
              </div>
            </div>
          
            <div className="row my-5">
              <p>Showing {allBoards && allBoards.length} of {allBoards && allBoards.length} boards</p>
              {selectedWorkspace && selectedWorkspace.createdBy===localStorage.getItem('user_id')?
              <div class="col-md-3 my-3">
              <div class="card border"  style={{ height: "110px" ,backgroundColor:"#eee" }}  onClick={()=>handlePopupToggle()}>
                <div class="card-body" 
                >
                  <h6 class="card-title">Create new Board</h6>
                </div>
              </div>
            </div>:null
            }
              {/* {allBoards && allBoards.map((board,key)=>(
                <div class="col-md-3 my-3" key={key}
                onClick={() => handleSelectBoard(board)}>
                <div class="card " style={{ height: "110px",backgroundColor:board ? board.boardColor: '#02a215',color:"#fff" }}>
                  <div class="card-body">
                    <h6 class="card-title">{board.boardName}</h6>
                  </div>
                </div>
                </div>
              ))} */}


{sortBoards().map((board, key) => (
  <div
    class="col-md-3 my-3"
    key={key}
    onClick={() => handleSelectBoard(board)}
  >
    <div
      class="card "
      style={{
        height: "110px",
        
        backgroundColor: board ? board.boardColor : "#02a215",
        color: "#fff",
      }}
    >
      <div class="card-body">
        <h6 class="card-title">{board.boardName}</h6>
      </div>
    </div>
  </div>
))}

               {showPopup && <CreateBoard onClose={()=>handlePopupToggle()} />}

            </div>
          </div>
         
        </div>
      </div>

      {/* ========== Invite member model */}
      <>
      </>
    </>
  );
};

export default BoardHome;


