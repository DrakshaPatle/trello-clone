
const initialState={
    allWorkspaces:[],
    allguestWorkspace:[],
    selectedWorkspace:{},
    guestWorkspace:[],
    newWorkspace:{},
}

const WorkspaceReducer = (state=initialState,action) => {
    // console.log("in the reducer")
    switch(action.type)
    {
      
        case "SET_WORKSPACES":
            return {
                ...state,
                allWorkspaces:action.payload.allWorkspaces,
                allguestWorkspace:action.payload.guestWorkspace[0].InvitedWorkspaceId,
                guestWorkspace:action.payload.allguestWorkspace
            } 
        case "SET_SELECTED_WORKSPACES":
            return {
                ...state,
                selectedWorkspace:action.payload
            } 
        case "SET_NEW_WORKSPACES":
            return {
                ...state,
                newWorkspace:action.payload
            } 
        case "UPDATE_WORKSPACE":
            return {
                ...state,
                allWorkspaces:state.allWorkspaces.map((workspace)=>
                    workspace._id===action.payload._id? action.payload:workspace
                ),
                selectedWorkspace:action.payload
            } 
        case "WORKSPACE_CLEAR" :
            return {
                ...state,
                allWorkspaces:[],
                allguestWorkspace:[],
                selectedWorkspace:{},
                guestWorkspace:[],
                newWorkspace:{},
            }      

        default:
            return state
    }
  
}

export default WorkspaceReducer
