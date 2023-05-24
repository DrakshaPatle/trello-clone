import React from 'react'
import "../../assets/css/home.css";
import Home from "../../assets/images/banner.jpg";

const NewHome = () => {
  return (
    <> 
    <div className="container">
        <div className="row gy-5">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div id="parent">
              <div id="child">
                <h2 className='hero-text text-start'>
                 Achieving Greatness Through  <span>Collaboration</span>
                </h2> 
                <div className="d-grid gap-2 d-md-block text-start mt-4">
                  <a className="btn btn-primary" href="/get-started">
                    <span> Try Now</span>
                  </a>  
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="p-3">
              <img src='http://task.consdeployer.com/api/assets/webImage/web-attach_1679637373925.jpg' className="img" />
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default NewHome;