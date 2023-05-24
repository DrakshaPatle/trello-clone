
const initialState={
    allUsers:[],
    userProfile:{}
}

const UserReducer = (state=initialState,action) => {
    switch(action.type)
    {
      
        case "SET_USERS":
            return {
                ...state,
                allUsers:action.payload
            }
        case "SET_USER_PROFILE":
                return {
                    ...state,
                    userProfile:action.payload
                }  
        case "USER_CLEAR" :
            return {
                ...state,
                allUsers:[],
                userProfile:{}
            }
        default:
            return state
    }
  
}

export default UserReducer
