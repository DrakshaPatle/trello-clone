


import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { FaApple, FaJira, FaMicrosoft, FaSlack } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../redux/action/user';

const VerifyOtpPage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', otp: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email: formData.email,
      password: formData.password,
      otp: formData.otp,
    };


try {   
    dispatch(forgotPassword(data,async function(response){
      if(response.data.success){
        alert.success(response.data.message)
         setTimeout(() => {
             navigate("/login")
            
         }, 2000);
      }else{
        alert.error(response.data.message)
        
      }
    }))
    
  } catch (error) {
    console.log("Error")
  }}
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center justify-content-center ">
          <div className="col-md-5 py-3 px-5 shadow">
            <div className="mb-4">
              <h3 className="d-flex justify-content-center fill my-3">
                {' '}
                <FaJira />
                <span className="ml-10">
                  {' '}
                  <NavLink to="/" className="text-decoration-none">
                    Task Deployer
                  </NavLink>{' '}
                </span>
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group first my-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email..."
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter new password..."
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm new password..."
                  name="confirmPassword"
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Otp..."
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-block btn-primary mt-2"
                style={{ width: '100%' }}
              >
                Continue
              </button>
            </form>

            <p className="d-flex justify-content-center mx-4 mt-3">
              Can't log in? <NavLink to="/get-started">Create an account</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtpPage;
