import React ,{useEffect} from "react";
import BoardHeader from "../Navbar/BoardHeader";
import TaskCard from "./Bucket"; 
import updateUserActivity from '../../UserActivity'
 const Kanban = () =>{
    useEffect(()=>{ 
        localStorage.setItem("log",new Date())
        return () => {
            console.log("kanban screeen")
          updateUserActivity('kanban')
        } 
      },[])
    return(
        <> 
           <BoardHeader/>
            <TaskCard />
        </>
    )
}
export default Kanban