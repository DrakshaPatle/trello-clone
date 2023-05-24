import axios from "axios"

import { KANBAN_API_URL } from "../../components/services/url"

export const getWorkspace = () => {
    return async (dispatch) => {

        try {
            const user_id = localStorage.getItem("user_id");

            const response = await axios.get(KANBAN_API_URL + `workspace/getAllWorkspacebyUserId/${user_id}`)
            if (response.data.success === true) {
                dispatch({
                    type: "SET_WORKSPACES",
                    payload: response.data,
                })
                dispatch({
                    type: "SET_SELECTED_WORKSPACES",
                    payload:response.data.allWorkspaces[0],
                })
            }
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const setSelectedWorkspace = (data) => {
    return async (dispatch) => {

        try {
         dispatch({
                    type: "SET_SELECTED_WORKSPACES",
                    payload: data,
        })
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}


export const addWorkspace = (inputValue,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/addworkspace`,inputValue)
            if (response.data.success === true) {
               dispatch(getWorkspace())
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
} 

export const updateVisitedWorkspace = (workspaceId,payload) => {
    return async (dispatch) => {
        try {
            const userId = localStorage.getItem("user_id");
            const response = await axios.post(KANBAN_API_URL + `workspace/updateRecentVisitedWorkspace/${userId}/${workspaceId}`,payload)
            if (response.data.success === true) {
                console.log("response",response.data.message)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
}

export const editWorkspace = (inputValue,workspaceId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/editWorkspace/${workspaceId}`,inputValue)
            if (response.data.success === true) {
               dispatch({
                type:"UPDATE_WORKSPACE",
                payload:{...inputValue,_id:workspaceId}
               })
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
}
export const newWorkspace = (inputValue,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/addworkspace`,inputValue)
            if (response.data.success === true) {
               dispatch({
                type:'SET_NEW_WORKSPACES',
                payload:response.data.workspaces[0]
               })
               dispatch({
                type: "SET_SELECTED_WORKSPACES",
                payload:response.data.workspaces[0],
            })
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
} 
export const inviteWorkspace = (payload,workspaceId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/InviteOnWorkspace/${workspaceId}`,payload)
            if (response.data.success === true) {
               callback(response)
            }else{
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
} 

export const shareWorkspace = (payload,workspaceId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/shareWorkspace/${workspaceId}`,payload)
            if (response.data.success === true) {
               callback(response)
            }else{
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
}
