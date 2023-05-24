
const initialState={
    allBoards:[],
    selectedBoard:{},
}

const BoardReducer = (state=initialState,action) => {
    switch(action.type)
    {
      
        case "SET_BOARD":
            return {
                ...state,
                allBoards:action.payload
            } 
        case "SET_SELECTED_BOARD":
            return {
                ...state,
                selectedBoard:action.payload
            } 
        case "UPDATE_BOARD":
            return {
                ...state,
                allBoards:state.allBoards.map((board)=>
                    board._id===action.payload.boardId? {...board,boardName:action.payload.boardName}:board
                ),
                selectedBoard:{...state.selectedBoard ,boardName:action.payload.boardName}
            }
        case "BOARD_CLEAR" :
            return {
                ...state,
                allBoards:[],
                selectedBoard:{}
            }    
        default:
            return state
    }
  
}

export default BoardReducer
