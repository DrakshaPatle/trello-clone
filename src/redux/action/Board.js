import axios from "axios"

import { KANBAN_API_URL } from "../../components/services/url"

export const getBoard = (workspaceId) => {
    return async (dispatch) => {
        const user_id = localStorage.getItem("user_id");

        try {
            const response = await axios.get(KANBAN_API_URL + `board/getAllBoardsbyWorkspaceId/${workspaceId}/${user_id}`)
            if (response.data.success === true) {
                dispatch({
                    type: "SET_BOARD",
                    payload: response.data.allboards,
                })
            } else{
                dispatch({
                    type: "SET_BOARD",
                    payload: [],
                })
            
            dispatch({
                type: "SET_SELECTED_BOARD",
                payload: {},
            })
        }
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const createBoard = (inputValue,callback) => {
    return async (dispatch) => {

        try {
            const response = await axios.post(KANBAN_API_URL + `board/addboard`,inputValue)
            if (response.data.success === true) {
               dispatch(getBoard(inputValue.workspaceId))
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
}

export const editBoard = ( boardId,boardName,callback) => {
    return async (dispatch) => {

        let payload ={boardName}
        try {
            const response = await axios.post(KANBAN_API_URL + `board/editBoard/${boardId}`,payload)
            if (response.data.success === true) {
               dispatch({
                    type:'UPDATE_BOARD',
                    payload:{
                        boardId,
                        boardName
                    }
               })
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
}

export const setSelectedBoard = (data) => {
    console.log(data,"setSelectedBoard")
    return async (dispatch) => {

        try {
         dispatch({
                    type: "SET_SELECTED_BOARD",
                    payload: data,
                })
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const inviteBoard = (payload,workspaceId,boardId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/InviteOnBorad/${workspaceId}/${boardId}`,payload)
            if (response.data.success === true) {
                getBoard(workspaceId)
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

export const shareBoard= (payload,workspaceId,boardId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `workspace/shareBoard/${workspaceId}/${boardId}`,payload)
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

export const updateVisitedBoard = (boardId,payload) => {
    return async (dispatch) => {
        try {
            const userId = localStorage.getItem("user_id");
            const response = await axios.post(KANBAN_API_URL + `board/updateRecentVisitedBoard/${userId}/${boardId}`,payload)
            if (response.data.success === true) {
                console.log("response",response.data.message)
            }
        }
        catch (error) {
            console.log("Error in add board", error)
        }
    }
}


export const recentVisitedBoard = (callback) => {
    return async (dispatch) => {
        try {
            const userId = localStorage.getItem("user_id");
            const response = await axios.get(KANBAN_API_URL + `board/getRecentVisitedBoard/${userId}`)
            if (response.data.success === true) {
                callback(response)
            }
        }
        catch (error) {
            console.log("Error in add board", error)
        }
    }
}


export const getUsersAllBoard = (callback) => {
    return async (dispatch) => {
        try {
            const userId = localStorage.getItem("user_id");
            const response = await axios.get(KANBAN_API_URL + `board/usersAllBoard/${userId}`)
            if (response.data.success === true) {
                callback(response)
            }

        }catch(error){
            console.log("Error in add user board", error)
        }
    }
}