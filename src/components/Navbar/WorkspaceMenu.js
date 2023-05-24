import { useSelector } from "react-redux";
import {
  setSelectedWorkspace,
  updateVisitedWorkspace
} from "../../redux/action/Workspace";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from 'moment';
import "./Workspacemenu.css"

const WorkspaceMenu = () =>{

    const navigate= useNavigate();
    const dispatch = useDispatch();
    const { allWorkspaces, guestWorkspace } = useSelector(
        (store) => store.workspaceRoot
      );
      const handleUserChange = (workspace) => {
        let date= moment(new Date()).format();
        let visitedTime = moment(new Date()).format('h:mm:ss a');
        let visitedDate= date.toString().slice(0,10);
        let payload= {
          visitedTime,visitedDate
        }
       
        dispatch(updateVisitedWorkspace(workspace._id,payload))
        dispatch(setSelectedWorkspace(workspace));
        navigate("/");
      };
    return (
<div className="dropdown px-2 workspace_dropdown">
          <a
            className=" dropdown_toggle "
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Workspace <i class="fa-solid fa-chevron-down"></i>
          </a>

          <ul
            className="dropdown-menu scrollable-menu px-3 mt-3"
            aria-labelledby="dropdownMenuLink"
          >

            <div className="mb-2">
              <small>Your Workspaces</small>
            </div>

            {allWorkspaces &&
              allWorkspaces.map((workspace) => (
                <div
                  className="dropdown-item"
                  key={workspace._id}
                  onClick={() => handleUserChange(workspace)}
                // style={{overflow:'hidden'}}
                >
                  <span className="boards-header-icon">
                    <span
                      className="Char_text"
                      style={{ background: workspace.workspaceColor }}
                    >
                      {workspace.workspaceName.charAt(0)}
                    </span>
                  </span>
                  <span className="websiteLinkText mx-2">
                    {workspace.workspaceName}
                  </span>
                </div>
              ))}
            {allWorkspaces & allWorkspaces.length === 0 ?
              <li>
                <a className="dropdown-item" href="#">
                  <span className="boards-header-icon">
                    <span className="Char_text">P</span>
                  </span>
                  <span className="websiteLinkText mx-2"> No workspace found</span>
                </a>
              </li>
              : null}
            <div className="my-1">
              <small>Guest Workspaces</small>
            </div>

            {guestWorkspace &&
              guestWorkspace.map((workspace) => (
                <div
                  className="dropdown-item"
                  key={workspace._id}
                  onClick={() => handleUserChange(workspace)}
                // style={{overflow:'hidden'}}
                >

                  <span className="boards-header-icon">
                    <span
                      className="Char_text"
                      style={{
                        background: workspace &&  workspace.workspaceColor,
                      }}
                    >
                      {workspace &&  workspace.workspaceName && workspace.workspaceName.charAt(0)}
                    </span>
                  </span>
                  <span className="websiteLinkText mx-2">
                  {workspace &&  workspace.workspaceName }
                  </span>
                </div>
              ))}
            {guestWorkspace && guestWorkspace.length === 0 ?
              <li>
                <a className="dropdown-item" href="#">
                  <span className="boards-header-icon">
                    <span className="Char_text">P</span>
                  </span>
                  <span className="websiteLinkText mx-2"> No workspace found</span>
                </a>
              </li>
              : null}
          </ul>
        </div>
    )
}

export default WorkspaceMenu;
