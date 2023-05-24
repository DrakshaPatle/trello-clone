
const initialState={
    allCard:[],
    selectedCard:{}
}

const CardReducer = (state=initialState,action) => {
    switch(action.type)
    {
      
        case "SET_CARD":
            return {
                ...state,
                allCard:action.payload
            } 
        case "SET_SELECTED_CARD":
            return {
                ...state,
                selectedCard:action.payload
            } 
        case "CARD_CLEAR" :
            return {
                ...state,
                allCard:[],
                selectedCard:{}
            }
        default:
            return state
    }
  
}

export default CardReducer
