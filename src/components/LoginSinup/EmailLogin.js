import React, { useState } from "react";
import "../../assets/css/login-signup.css";
import Banner from "../../assets/images/home.jpg";
import axios from "axios";
import { genWebColor, genMaterialColor, default as genRGBColor } from 'generate-color'
import { FcGoogle } from "react-icons/fc";
import { useAlert } from "react-alert";
import {API_URL } from "../services/url";
import { useNavigate } from "react-router-dom";
const EmailLogin = () => {
  const [email,setEmail]=useState("");
  const [btn_status,setBtn_Status]=useState("unclick");
  const alert=useAlert();
  const navigate= useNavigate();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const formData ={
      email:email,
      account_type:"normal"
    }
    setBtn_Status("click")
    const response = await axios.post(`${API_URL}/users/emailverification`,formData)
    console.log(response,"response")
    if(response.data.success){
      if(response.data.message==='User Already Exists')
      {
        alert.success(response.data.message,{
          onClose:
            navigate("/login")
        })
      }else{
        alert.success(response.data.message)
      }
    }else{
      setBtn_Status("unclick")
      setEmail("");
    }

  }

  return (
    <>
      <div className="content my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637430470.jpg' alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-5 contents shadow">
              <div className="row justify-content-center">
                <div className="col-md-8 ">
                  <div className="mb-4">
                    <h3 className="d-flex justify-content-center fill my-3">
                      {" "}
                      Get Started
                    </h3>
                    <p className="d-flex justify-content-center mb-4">
                      Free for up yo 10 users
                    </p>
                  </div>
                  <div className="social-login">
                    <a
                      href="#"
                      className="google btn d-flex justify-content-center "
                    >
                      <FcGoogle className="social-icon mr-3" />{" "}
                      <span>continue with Google</span>
                    </a>
                  </div>
                  <span className="d-block text-center my-4 text-muted">
                    — OR —
                  </span>

                  <form>
                    <div className="form-group first my-2">
                      <label>Work Email</label>
                      <input
                        type="email"
                        className="form-control"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="d-flex mb-3 align-items-center">
                      <span className="caption">
                      <input type="checkbox" className="mr-3"  required/> 
                        By signing up, I accept the Atlassian{" "}
                        <a href="#"> Cloud Terms of Service</a> and acknowledge
                        the <a href="#">Privacy Policy</a>.
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="btn  btn-block btn-secondary  mt-2"
                      onClick={handleSubmit}
                      disabled={btn_status==="click"}
                    >
                      Agree
                    </button>

                    <span className="d-block text-center my-4 text-muted">
                      No Credit Card Required
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailLogin;
