import React, { useEffect, useReducer, useState } from "react";
import "../../assets/css/login-signup.css";
import { FaJira, FaMicrosoft, FaApple, FaSlack } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAlert } from 'react-alert'
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/action/user";
import { userLogout } from "../../redux/action/user";

const Registration = () => {
  const alert = useAlert()
  const dispatch=useDispatch();
  const [responseReceived, setResponseReceived] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const [formData, setFormData] = useState({ email: "", password: "", userName: "", });
  const { email } = useParams();
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      // const hashedPassword = hashPassword(formData.password);
      let payload={ // using id in URL
        email: formData.email,
        userName: formData.userName,
        password: formData.password,

      }
      dispatch(userRegister(payload,async function(response){
        if(response.data.success){
          setResponseReceived(true);
          window.location.reload();
          window.location.replace('/projectsetup')
        }else if(response.data.errors){
          alert.show(response.data.errors[0].msg)
        }else if(!response.data.success){
          alert.show(response.data.message,{
            onClose:
              navigate('/login')
            
          })
         
        }
      }))
      
    } catch (error) {
      setResponseReceived(false)
      
      const errorString = error.response.request.response;
      const errorObject = JSON.parse(errorString);

      const errorMessage = errorObject.errors[0].msg;

      setErrorMsg(errorMessage)

    }
  };

    useEffect (()=>{
      
    dispatch(userLogout(async function(){
      console.log("CLEAR STORAGE") 
        // window.location.reload();
    })) 
    },[])
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center justify-content-center ">
          <div className="col-md-5 py-3 px-5 shadow">
            <div className="mb-4">
              <h3 className="d-flex justify-content-center fill my-3">
                {" "}
                <FaJira />

                <span className="ml-10"> <NavLink to="/" className="text-decoration-none" >Task Deployer</NavLink> </span>
              </h3>
              <p className="d-flex justify-content-center mb-4">
                Sign up to continue
              </p>
            </div>
            <form>
              <div className="form-group first my-2">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Enter email..."
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group first my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name..."
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password..."
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="d-flex mb-3 align-items-center">
                <span className="caption">
                  By signing up, I accept the Task Deployer{" "}
                  <a href="#"> Cloud Terms of Service</a> and acknowledge the{" "}
                  <a href="#">Privacy Policy</a>.
                </span>
              </div>

              <button
                type="button"
                className="btn btn-block btn-primary mt-2"
                style={{ width: "100%" }}
                onClick={handleSignup}
                disabled={responseReceived}
              >
                {responseReceived ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : (
                  "Signup"
                )}
              </button>
              {errorMsg && (
           <strong>
             <p className="text-dark text-center  " style={{font:"caption" }}>
                  {errorMsg}
                </p>
           </strong>    
              )}
              {/* <button type="submit" className="btn btn-block btn-primary">
                Sign up
              </button> */}
              <span className="d-block text-center my-4 text-muted">
                — OR —
              </span>
              <div className="social-login">
                <a
                  href="#"
                  className="google btn d-flex justify-content-around "
                >
                  <FcGoogle className="social-icon  mr-3" />{" "}
                  <span>continue with Google</span>
                </a>
                <a
                  href="#"
                  className="microsoft btn d-flex  justify-content-around  "
                >
                  <FaMicrosoft className="social-icon  mr-3" />{" "}
                  <span>continue with Microsoft</span>
                </a>
                <a
                  href="#"
                  className="apple btn d-flex  justify-content-around  "
                >
                  <FaApple className="social-icon mr-3" />{" "}
                  <span>continue with Apple</span>
                </a>
                <a
                  href="#"
                  className="slack btn d-flex  justify-content-around "
                >
                  <FaSlack className="social-icon mr-3" />{" "}
                  <span>continue with Slack</span>
                </a>
              </div>
            </form>
            <p className="d-flex justify-content-center">
              Already have Task Deployer account? <NavLink to="/login" > Login </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
