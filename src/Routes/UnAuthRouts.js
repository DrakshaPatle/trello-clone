import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import BoardSidebar from '../boards/BoardSidebar'
import NewHome from '../components/home/NewHome'
import EmailLogin from '../components/LoginSinup/EmailLogin'
import ForgotPassword from '../components/LoginSinup/ForgotPassword'
import Login from '../components/LoginSinup/Login'
import Registration from '../components/LoginSinup/Registration'
import UserVisa from '../components/LoginSinup/UserVisa'
import VerifyOtpPage from '../components/LoginSinup/VerifyOtpPage'
const UnAuthRouts = () => {
  return (
    <>
    <Routes>
        <Route path='/board' element={<BoardSidebar/>} /> 
        <Route path='/' element={<NewHome/>} />
        <Route path='/get-started' element={<EmailLogin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/resetpass' element={<VerifyOtpPage/>} />
        <Route path='/account-setup'  element={<Registration/>} />
        <Route path='/uservisa' element={<UserVisa/>} />
        
    </Routes>
    
    </>
  )
}

export default UnAuthRouts