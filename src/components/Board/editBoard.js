import { useState ,useEffect} from "react";
import {editBoard} from '../../redux/action/Board'
import { useDispatch,useSelector } from "react-redux";
const EditBucket =(props) =>{
    const { selectedBoard } = useSelector((store) => store.boardRoot);
    const [changes,setChanges]=useState("");

    const dispatch = useDispatch();
    const [boardName,setBoardName]=useState(selectedBoard.boardName ? selectedBoard.boardName : "");
    
    const [boardId,setBoardId]=useState(selectedBoard._id ? selectedBoard._id : "");
    console.log(props,"propsssssssssssss")
    
    const handleEditBoardName =() =>{
        console.log("dispacthed call")
        dispatch(editBoard(boardId,boardName,async function (response){
            props.handleClose()
        }))
        
    }
  // console.log(changes,"-------changes")

    useEffect(() => {
        
        const timer = setTimeout(() => {
            console.log(changes,"********************")
          if(changes===true){
            console.log("matched")
            handleEditBoardName()
          }
          else if(changes===""){
            setChanges("")
            props.handleClose()
          }
        }, 5000)
    
        return () => clearTimeout(timer)
      }, [boardName,changes])

    const handleChangeboardname = (evt) =>{
        console.log("board",evt.target.value)
            setChanges(true)
        setBoardName(evt.target.value)
      }
    return(
    <input 
                  value={boardName} 
                  onChange={(e)=>handleChangeboardname(e)}  
                  type="text" 
                  className="form-control"
                  onBlur={()=>handleEditBoardName()}   
                  style ={{height:'38px',width:'200px'}}  
                  autoFocus
                /> 
    )
}
export default EditBucket;