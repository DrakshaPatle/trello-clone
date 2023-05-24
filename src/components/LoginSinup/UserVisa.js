import React, { useState } from "react";
import "../../assets/css/login-signup.css";
import Banner from "../../assets/images/home.jpg";
import { FaJira, FaMicrosoft, FaApple, FaSlack } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const UserVisa = () => {

  return (
    <>
      <div className="content my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Banner} alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 contents shadow">
              <div className="row justify-content-center">
                <div className="col-md-8 ">
                  <div className="mb-4">
                    <h3 className="d-flex justify-content-center  my-3"> 
                     Welcome Back, User Visa
                    </h3> 
                  </div>
                  
                  <form action="#" method="post">
                  <div className="form-group first my-2">
                      <label>Work Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="d-flex mb-3 align-items-center">
                      <span className="caption"> 
                        <a href="#"> sign in with a different Task Deployer account </a> .
                      </span>
                    </div>
                    <div className="form-group first my-2">
                      <label>Your Site</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="d-flex mb-3 align-items-center">
                      <span className="caption">
                        By Clicking below, You are Agree to Task Deployer {" "}
                        <a href="#">  Terms of Service</a> and <a href="#">Privacy Policy</a>.
                      </span>
                    </div>

                    <a
                  href="/home" 
                  className="btn disabled btn-block btn-secondary  mt-2" style={{width: "100%"}}
                > 
                  Agree
                </a>


                    {/* <button
                      type="submit"
                      className="btn disabled btn-block btn-secondary  mt-2"
                    >
                      Agree
                    </button> */}
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

export default UserVisa;
