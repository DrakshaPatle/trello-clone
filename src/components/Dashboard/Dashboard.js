import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar1/Sidebar";
import "./Dashboard.css";
import Kanban from '../Bucket/kanban'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import AuthRoute from "../../Routes/AuthRoute";
import updateUserActivity from '../../UserActivity'

const Dashboard = () => {

  

  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [workspace,setWorkspace]=useState({});

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const iconClicked = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{ 
    localStorage.setItem("log",new Date())
    return () => {
        updateUserActivity('home')
    } 
  },[])
  const selectWorkspace =(data) =>{
    setWorkspace(data)
  }

  return (
    <>
      <div className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}>
      
      <Navbar 
         iconClicked={iconClicked}
         selectWorkspace={selectWorkspace}
      />

        {/* ..............................Other Sections ..............................*/}

        <div className="content-wrapper">
          <Sidebar
            setIsSidebarOpen={setIsSidebarOpen}
            show={show}
            workspace={workspace}
           
          />
          {/* Content Part */}
          <main className="main-content">
               <AuthRoute/>

          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
