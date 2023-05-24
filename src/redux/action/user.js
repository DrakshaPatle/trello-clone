import axios from "axios"

import {API_URL } from "../../components/services/url"

export const getUsers = (callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API_URL + `users/getAllUsers`,{
                headers:{
                    'x-access-token':localStorage.getItem('taskD_token')
                }
            })
            if (response.data.success === true) {
                dispatch({
                    type: "SET_USERS",
                    payload: response.data.AllUsers,
                })
                callback(response.data.AllUsers)
            }
        }
        catch (error) {
            console.log("Error in get all workspace ", error)
        }
    }
}

export const userRegister = (payload,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(API_URL + `users/register`,payload )
            if (response.data.success === true) {
                localStorage.setItem('user_id', response.data.userId);
                localStorage.setItem('taskD_token',response.data.token)
                dispatch({
                    type: "SET_USER_PROFILE",
                    payload: response.data.user,
                })
                callback(response)
            }else{
                callback(response)
            }
        }
        catch (error) {
            callback(error.response)
            console.log("Error in user register", error)
        }
    }
}

export const userLogin = (payload,callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(API_URL + `users/login`,payload )
            console.log(response,"login response")
            if (response.data.success === true) {
                localStorage.setItem('user_id', response.data.userid);
                localStorage.setItem('taskD_token',response.data.token)
                dispatch({
                    type: "SET_USER_PROFILE",
                    payload: response.data.user,
                })
                callback(response)
            }else{
                callback(response)
            }
        }
        catch (error) {
            console.log("Error in user login ", error)
        }
    }
}


export const sendOtp = (payload,callback) => {
    return async () => {
        try {
            const response = await axios.post(API_URL + `users/sendOtp`,payload )
            console.log(response,"otp response")
            if (response.data.success === true) {
               console.log("Success")
             callback(response)
           
            }else{
                callback(response)
            }
        }
        catch (error) {
            console.log("Error in Send Email ", error)
        }
    }
}


export const forgotPassword = (payload,callback) => {
    return async () => {
        try {
            const response = await axios.post(API_URL + `users/forgotPassword`,payload )
            console.log(response,"Otp Verify response")
            if (response.data.success === true) {
               console.log("Success     ....")
               
              callback(response)
           
            }else{
                callback(response)
            }
        }
        catch (error) {
            console.log("Error in Send Email ", error)
        }
    }
}
export const userLogout = (callback) => {
    return async (dispatch) => {
       
        dispatch({
            type:'USER_CLEAR'
        })
        dispatch({
            type:'WORKSPACE_CLEAR'
        })  
        dispatch({
            type:'BOARD_CLEAR'
        }) 
        dispatch({
            type:'BUCKET_CLEAR'
        })   
        dispatch({
            type:'CARD_CLEAR'
        })
        setTimeout(()=>{
            localStorage.clear();
            callback();
        },2000)
      
}}