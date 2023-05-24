import axios from "axios"

import { KANBAN_API_URL } from "../../components/services/url"
import { getBucket } from "./Bucket"

export const setSelectedCard = (card) => {
    return async (dispatch) => {

        try {
         dispatch({
                    type: "SET_SELECTED_CARD",
                    payload: card,
                })
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const addCard = (inputValue,boardId,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `card/addcard`,inputValue)
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

export const DragandDropCard = (inputValue,allBucket) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `card/dndCard`,inputValue)
            console.log(response,"response dnd card")
            if (response.data.success === true) {
               dispatch({
                type:"SET_DND_BUCKET",
                payload:allBucket
               })
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
} 

export const updateCard = (boardId,bucketId,cardId,payload) =>{
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `card/editCard/${bucketId}/${cardId}`,payload)
            if (response.data.success === true) {
               dispatch(getBucket(boardId))
               let allCard = response.data.updatedBucket[0].cards;

               let sourceItem = allCard.find((item) => String(item._id) === cardId
                );
                console.log(sourceItem,"Card update")
               dispatch(setSelectedCard(sourceItem))
            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }
}


export const addCardAttachment = (boardId,bucketId,cardId,payload,callback) =>{
    return async (dispatch) => {
        try {
            const response = await axios.post(KANBAN_API_URL + `card/editAttachmentCard/${bucketId}/${cardId}`,payload)
            
            if (response.data.success === true) {
               dispatch(getBucket(boardId))
               console.log(response,"response")

               let allCard = response.data.updatedBucket.cards;
               console.log(allCard,"all card update")

               let sourceItem = allCard.find(
                (item) => String(item._id) === cardId
                );
                console.log(sourceItem,"Card update")
               dispatch(setSelectedCard(sourceItem))
               callback(sourceItem)

            }
        }
        catch (error) {

            console.log("Error in add board", error)
        }
    }

}