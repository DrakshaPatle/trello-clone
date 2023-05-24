
const initialState={
    allBucket:[],
    selectedBucket:{},
}

const bucketReducer = (state=initialState,action) => {
    switch(action.type)
    {
      
        case "SET_BUCKET":
            return {
                ...state,
                allBucket:action.payload
            } 
        case "SET_SELECTED_BUCKET":
            return {
                ...state,
                selectedBucket:action.payload
            } 
        case "SET_DND_BUCKET":
            return{
                ...state,
                allBucket: action.payload
            } 
        case "UPDATE_BUCKET":
            return {
                ...state,
                allBucket:state.allBucket.map((bucket)=>
                    bucket._id===action.payload.bucketId? {...bucket,bucketName:action.payload.bucketName}:bucket
                ),
                selectedBucket:{...state.selectedBucket ,bucketName:action.payload.bucketName}
            }  
        case "BUCKET_CLEAR" :
            return {
                ...state,
                allBucket:[],
                selectedBucket:{}
            }
        case "SET_SELECTED_BUCKET_ID" :
            return {
                ...state,
                selectedBucketId:action.payload
            }    
        default:
            return state
    }
  
}

export default bucketReducer
