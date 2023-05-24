import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bucket from '../components/Bucket/kanban'
import Board from '../boards/BoardProfile'
import Workspace from '../boards/WorkspaceProfile' 
import BoardDashboard from '../components/Dashboard/boardHome'  
import AddCard from '../components/Card/addNewCard'
import Members from '../components/Members/Members'

import Guests from "../components/Members/Guests";
import Pending from "../components/Members/Pending";


const AuthRoute = () => {
  return (
    <>
     {/*** all route with nav and sidbar */}
    <Routes>

        <Route path='/' element={<BoardDashboard/>} />
        <Route path='/board' element={<Board/>}/>
        <Route path='/workspace' element={<Workspace/>}/>
        <Route path='/boards/:boardId' element={<Bucket/>}/> 
        <Route path='/members' element={<Members/>}/>

        <Route path='/guests' element={<Guests/>}/>
        <Route path='/pending' element={<Pending/>}/>

    </Routes> 
    </>
  )
}

export default AuthRoute