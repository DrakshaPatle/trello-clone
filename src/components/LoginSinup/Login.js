import React, { useState } from "react";
import "../../assets/css/login-signup.css";
import { FaJira, FaMicrosoft, FaApple, FaSlack } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import { useAlert } from "react-alert";
import { userLogin } from "../../redux/action/user";
import { useDispatch } from "react-redux";


// const hashPassword = password => {
//   return crypto.createHash('sha256').update(password).digest('hex')
// }
const Login = () => {
  const alert = useAlert()
  const [errorMsg, setErrorMsg] = useState("")
  const [responseReceived, setResponseReceived] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    let data = {
      email: formData.email,
      password: formData.password

    }
    console.log("api called", data)
    setResponseReceived(true);
    localStorage.clear();
    try {   
      dispatch(userLogin(data,async function(response){
        if(response.data.success){
          setResponseReceived(true);
          alert.success(response.data.message)
          window.location.reload();
          window.location.replace('/')
        }else{
          alert.error(response.data.message)
          setResponseReceived(false);
        }
      }))
      
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      alert.error(error.response.data.errors[0].msg)
      setResponseReceived(false);


      const errorString = error.response.request.response;
      const errorObject = JSON.parse(errorString);

      const errorMessage = errorObject.errors[0].msg;
      setErrorMsg(errorMessage)
    }

  };
  return (
    <>

      {/* <Header/> */}
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
                Log in to continue
              </p>
            </div>
            <form>
              <div className="form-group first my-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email..."
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                // disabled
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
                  "Login"
                )}
              </button>
              {errorMsg && (
           <strong>
             <p className="text-dark text-center  " style={{font:"caption" }}>
                  {errorMsg}
                </p>
           </strong>    
              )}
            

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
            <div className="d-flex">
            <p className="d-flex justify-content-center mx-4">
              Can't log in? <a href="/get-started"> Create an account</a>
            </p>

<NavLink to="/forgot-password" className="mx-3"><p>Forgot Password</p></NavLink>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
