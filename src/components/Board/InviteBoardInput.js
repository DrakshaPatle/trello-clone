
import { useSelector } from "react-redux";
import { BsLink45Deg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/action/user";
import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { inviteBoard, shareBoard } from "../../redux/action/Board";
import { useAlert } from "react-alert";

const InviteBoardInput = () => {
  let dispatch = useDispatch();
  const [user, setUsers] = useState([]);
  const [findUser, setfindUser] = useState([]);
  const [selectedUser, setselectedUser] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [memberid, setMemberId] = useState("");
  const alert = useAlert();
  const [btnClick, setBtnClick] = useState(true);
  const [email, setEmail] = useState("");
  const { selectedWorkspace } = useSelector((store) => store.workspaceRoot);
  const { selectedBoard } = useSelector((store) => store.boardRoot);
  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    dispatch(
      getUsers(async function (response) {
        setUsers(response);
        console.log("user");
        console.log(user);
      })
    );
  };




  const handleSearchChange = (e) => {
    setselectedUser(e.target.value);
    let searchQuery = String(e.target.value).toLowerCase();

    if (searchQuery !== "") {
      let Sdata = [];
      Sdata = user;
      console.log("searchQuery", searchQuery);

      var data = user.filter((data) => {
        return (
          (data.userName &&
            String(data.userName).toLowerCase().includes(searchQuery)) ||
          (data.email && data.email.toLowerCase().includes(searchQuery))
        );
      });

      if (data.length > 0) {
        setfindUser(data);
      } else {
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(searchQuery)
        ) {
          console.log("invalid  ======", selectedUser);
          setValidEmail(false);
          setEmail(searchQuery);
          setfindUser([]);
          setMemberId("");
          setBtnClick(true);
        } else {
          console.log("valid  ---------------", selectedUser);
          setEmail(searchQuery);
          setValidEmail(true);
          setfindUser([]);
          setMemberId("");
          setBtnClick(false);
        }
      }
    } else {
      setfindUser(user);
    }
  };



  const handleInvite = async () => {
    let workspaceId = selectedWorkspace ? selectedWorkspace._id : "";
    let boardId = selectedBoard ? selectedBoard._id : "";

    if (memberid) {
      let payload = {
        memberid,
        email,
      };
      console.log("payload share", payload);
      dispatch(
        shareBoard(payload, workspaceId, boardId, async function (response) {
          if (response.data.success) {
            alert.show(response.data.message);
          } else {
            alert.error(response.data.message);
          }
        })
      );
    } else {
      let payload = {
        email,
        account_type: "normal",
      };
      console.log(payload, "payload invite");
      dispatch(
        inviteBoard(payload, workspaceId, boardId, async function (response) {
          if (response.data.success) {
            alert.show(response.data.message);
          } else {
            alert.error(response.data.message);
          }
        })
      );
    }
  };





  const handleSelect = (user) => {
    if (user.userName) {
      setselectedUser(user.userName);
    } else {
      setselectedUser(user.email);
    }
    setEmail(user.email);
    setMemberId(user._id);
    setBtnClick(false);
  };








  return (
    <div className="modal-body">
      <div className="row my-3">
        <div class="row align-items-center">
          <div class="col-md-9 col-auto">
            <div className="dropdown px-2" style={{ maginTop: "500px" }}>
              <input
                className=" icon-toggle-hide "
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                style={{ width: "300px", height: "40px" }}
                aria-expanded="false"
                value={selectedUser}
                onChange={(e) => handleSearchChange(e)}
                autoComplete="off"
              />

              <ul
                className="dropdown-menu  scrollable-menu px-3 "
                aria-labelledby="dropdownMenuLink"
              >
                {findUser.length > 0 ? (
                  <>
                    {findUser &&
                      findUser.map((user) => (
                        <Card>
                          <Row>
                            <Col xs={2}>
                              <span
                                className=" d-flex justify-content-center pt-2 user_detail"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  backgroundColor: user.userColor ? user.userColor : "#1960ee",
                                  borderRadius: "100%",
                                  cursor: "pointer",
                                  color: "white",
                                }}
                              >
                                {user && user.userName ? (
                                  user.userName.charAt(0).toUpperCase()
                                ) : (
                                  <i class="fa-regular fa-user"></i>
                                )}{" "}
                              </span>{" "}
                            </Col>
                            <Col onClick={() => handleSelect(user)}>
                              {user.userName}
                              <p className="text-muted"> {user.email}</p>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                  </>
                ) : validEmail ? (
                  <Card style={{ width: "285px" }}>
                    <p className="text-muted text-center">
                      Invite {selectedUser} Email Address.
                    </p>
                  </Card>
                ) : (
                  <Card style={{ width: "285px" }}>
                    <p className="text-muted text-center">
                      Add their Email Address to Invite them.
                    </p>
                  </Card>
                )}
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-auto">
            <button
              className="button-15"
              role="button"
              disabled={btnClick}
              onClick={() => handleInvite()}
            >
              Share
            </button>
          </div>
        </div>
      </div>



      {/*** commented for development */}





      <div className="row my-3">
        <div class="model-header">
          <span class="model-header-icon">
            <span class="model_icon">
              <BsLink45Deg size={25} />
            </span>
          </span>
          <span>
            <span class="pop_member_text">Share this board with a link</span>
            <br />
            <small className="model__link">
              <a href="#"> Create link</a>
            </small>
          </span>
        </div>
      </div>

      <div class="d-flex my-2 justify-content-between">
        <div class="model-header ">
          <span class="model-header-icon">
            <span class="text_circle">RS</span>
          </span>
          <span>
            <span class="pop_member_text">Ragini Singh (you)</span>
            <br />
            <small className="model__link work_name">
              <span>@Ragini999</span>.<span>Workspace Guest</span>
            </small>
          </span>
        </div>
        <div className="dropdown drop_title ">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="textpop"> Member</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end px-3"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                <span className="websiteLinkText">Admin</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span className="websiteLinkText">Member</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span className="websiteLinkText">Observer</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <span className="websiteLinkText">Leave Board</span>
              </a>
            </li>
          </ul>
        </div>
      </div>




    </div>
  );
};

export default InviteBoardInput;




