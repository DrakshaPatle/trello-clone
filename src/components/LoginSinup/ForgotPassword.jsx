import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../../redux/action/user";

const ForgotPassword = () => {
  const alert = useAlert();
  const dispatch = useDispatch(); 
  const navigate = useNavigate()
  const [email, setEmail] = useState("");



  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email: email,
      
    };


try {   
    dispatch(sendOtp(data,async function(response){
      if(response.data.success){
        alert.success(response.data.message)
         setTimeout(() => {
             navigate("/resetpass")
            
         }, 1000);
      }else{
        alert.error(response.data.message)
      }
    }))
    
  } catch (error) {
    console.log("Error",error)
    
  }}
  
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  return (
    <>
      <div className="container">
        <div
          className="col-md-5 contents shadow mx-auto"
          style={{ marginTop: "100px" }}
        >
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              <div className="mb-4">
                <h3 className="d-flex justify-content-center fill my-3">
                  {" "}
                  Forgot Password
                </h3>
              </div>
              <form className="p-3" onSubmit={handleSubmit}>
                <div className="form-group first my-2">
                  <label className="m-2"> Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email here..."
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="d-flex mb-3 align-items-center"></div>
                <button
                  type="submit"
                  className="btn  btn-block btn-secondary  mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
