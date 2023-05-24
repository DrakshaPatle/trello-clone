import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { editWorkspace } from '../../redux/action/Workspace';

const EditWorkspace = (props) => {
  const { selectedWorkspace } = useSelector((store) => store.workspaceRoot);

  
  const alert = useAlert();
const dispatch = useDispatch();
  {
    /* .................... Workspace _id Variable .................... */
  }
  const _id = selectedWorkspace && selectedWorkspace._id ;

  {
    /* ....................Usestates .................... */
  }

  const [workspaceName, setWorkspaceName] = useState(
    selectedWorkspace.workspaceName
  );
  const [workspaceColor, setWorkspaceColor] = useState(
    selectedWorkspace.workspaceColor
  );
  const [workspaceDesc, setWorkspaceDesc] = useState(
    selectedWorkspace.workspaceDesc
  );
  const [workspaceType, setWorkspaceType] = useState("");

  {
    /* ....................Cancel Click button Function.................... */
  }

  const cancelClick = () => {
    props.setEditForm(false);
  };

  {
    /* ....................Save Click button Function with API Call.................... */
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const workspaceData = {
      workspaceName,
      workspaceColor,
      workspaceDesc,
      workspaceType,
    };

    dispatch(editWorkspace(workspaceData,_id,async function (response ){
      if(response){
        props.setEditForm(false);

      }
      else{
        console.log("Error",response)
      }
    }))

  };

  return (
    <Card
      className=" rounded-0"
      style={{
        position: "absolute",
        left: "-30px",
        top: "0px",
        width: "500px",
        zIndex: 1,
      }}
    >
      <div className="  ">
        {/* ....................Workspace Name Section.................... */}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="workspaceName">
           <span className="">
           <small className="text-muted">

           Workspace Name <span className="text-danger">*</span>

            </small>
            
            </span>
            <Form.Control
              type="text"
              value={workspaceName}
              onChange={(event) => setWorkspaceName(event.target.value)}
              required
              style={{ width: "300px" }}
              className="text-muted"
            />
          </Form.Group>

          {/* ....................Workspace Color Section.................... */}

          <Form.Group className="mb-2 " controlId="workspaceColor">
          <small className="text-muted">

            Workspace Color 

            </small>
            <Form.Control
              type="color"
              value={workspaceColor}
              onChange={(event) => setWorkspaceColor(event.target.value)}
              style={{width:"50px",padding:"1px"}}
            />
          </Form.Group>
          {/* ....................Select Section.................... */}

          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <small className="text-muted">

            Select <span className="text-danger">*</span>

            </small>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Select
                onChange={(e) => setWorkspaceType(e.target.value)}
                value={workspaceType}
                aria-label="Select Workspace Type"
                required
                style={{ width: "300px" }}
                className="text-muted"
              >
                <option value="Board">Board</option>
                <option value="Timeline">Timeline</option>
                <option value="Table">Table</option>
                <option value="Calender">Calender</option>
              </Form.Select>
            </Form.Group>
            {/* ....................Workspace Description Section.................... */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="Textarea">
          <small className="text-muted">

            Workspace Description (Optional)

            </small>
            <Form.Control
              as="textarea"
              rows={2}
              style={{ width: "300px" }}
              value={workspaceDesc}
              onChange={(event) => setWorkspaceDesc(event.target.value)}
              className="text-muted"
            />
          </Form.Group>

          {/* ....................Save and Cancel Button Section.................... */}
          <section>
            <div className="d-flex">
              <Button type="submit" className="py-0" style={{ width: "61px" }}>
                Save
              </Button>
              <Button
                onClick={cancelClick}
                className=" text-muted border-0 mx-2"
                style={{ backgroundColor: "#efefef" }}
              >
                Cancel
              </Button>
            </div>
          </section>
        </Form>
      </div>
    </Card>
  );
};

export default EditWorkspace;
