import axios from "axios"

import { KANBAN_API_URL } from "../../components/services/url"

export const getBucket = (boardId) => {
    return async (dispatch) => {

        try {
            const response = await axios.get(KANBAN_API_URL + `card/getCardByBoardId/${boardId}`)
            console.log("response bucket",response.data.allcards)
            if (response.data.success === true) {
                dispatch({
                    type: "SET_BUCKET",
                    payload: response.data.allcards,
                })
                dispatch({
                    type: "SET_SELECTED_BUCKET",
                    payload: response.data.allcards[0],
                })
            } else{
                dispatch({
                    type: "SET_BUCKET",
                    payload: [],
                })
                dispatch({
                    type: "SET_SELECTED_BUCKET",
                    payload: {},
                })
            }
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const setSelectedBucket = (data) => {
    return async (dispatch) => {

        try {
         dispatch({
                    type: "SET_SELECTED_BUCKET",
                    payload: data,
                })
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const addBucket = (inputValue,boardId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `bucket/addbucket`,inputValue)
            console.log("response add bucket",response)
            if (response.data.success === true) {
               dispatch(getBucket(boardId))
               callback(response)
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
} 

// export const setSelectedBucketId = (data) => {
//     return async (dispatch) => {

//         try {
//          dispatch({
//                     type: "SET_SELECTED_BUCKET_ID",
//                     payload: data,
//                 })
//         }
//         catch (error) {
//             console.log("Error in get all workspace ", error)
//         }
//     }
// }
export const editBucket = (bucketId,bucketName,callback) => {
    return async (dispatch) => {
        try {
            let payload ={bucketName}
            const response = await axios.post(KANBAN_API_URL + `bucket/editBucket/${bucketId}`,payload)
            console.log("response add bucket",response)
            if (response.data.success === true) {
            //    dispatch(getBucket(boardId))
            dispatch({
                type:'UPDATE_BUCKET',
                payload:{
                    bucketId,
                    bucketName
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
export const DragandDropBucket = (inputValue,boardId) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `bucket/dndBucket`,inputValue)
            if (response.data.success === true) {
                dispatch(getBucket(boardId))

            
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
} 

