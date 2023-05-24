import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import UnAuthRouts from "./Routes/UnAuthRouts";
import Dashboard from '../src/components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Bucket from './components/Bucket/kanban'
import ProjectSetup from './components/Pages/ProjectSetup'
import Createboard from './components/Pages/CreateBoard'
import Workspace from '../src/boards/workspace'
import Board from './boards/Board'
import AddCard from "./components/Card/addNewCard";
import Members from "./components/Members/Members";
import Guests from "./components/Members/Guests";
import Pending from "./components/Members/Pending";
import Registration from "./components/LoginSinup/Registration";
function App() {
  return (
    <>
      <BrowserRouter>
        {
          localStorage.getItem("taskD_token") ? 
          <Routes>
              <Route path='/' element={<Dashboard/>} >
                      <Route path='/boards/:boardId' element={<Bucket/>}/>
                      <Route path='/members' element={<Members/>}/>
                      <Route path='/guests' element={<Guests/>}/>
                      <Route path='/pending' element={<Pending/>}/>
              </Route>
              <Route path='/workspace' element={<Workspace/>}/>
              <Route path='/userboard' element={<Board/>}/>
           
              <Route path='/account-setup'  element={<Registration/>} />
              <Route path='/home' element={<Home/>}/>
              <Route path='/addcard' element={<AddCard/>}/>
              <Route path='/projectsetup' element={<ProjectSetup/>} />
              <Route path='/createboard/:workspaceId' element={<Createboard/>} />
          </Routes> 
            :
            <>
              <Header />
              <UnAuthRouts />
            </>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
