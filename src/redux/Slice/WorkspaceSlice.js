import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SelectedWorkspace:{},
    
}
export const WorkspaceSlice = createSlice({
    name:"Select_Workspace",
    initialState,
    reducers:{
        setSelectedWorkspace:(state,action)=>{
            state.SelectedWorkspace = action.payload
        },

    }
})

export const {setSelectedWorkspace} = WorkspaceSlice.actions;
export default WorkspaceSlice.reducer;