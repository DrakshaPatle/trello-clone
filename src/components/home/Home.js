import React from "react";
import "../../assets/css/home.css";
import Banner from "../../assets/images/home.jpg";
import Team23 from "../../assets/images/Team23_1.png";
import { BsArrowRightShort, BsTwitter } from "react-icons/bs";
import { SiNasa } from "react-icons/si";


import { 
  FaReact,
  FaJira,
  FaAmazon, 
  FaCcAmazonPay,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row gy-5">
          <div className="col-xs-12 col-sm-12 col-md-5">
            <div id="parent">
              <div id="child">
                <h2 className="home-h2">
                  Unlocking the Power of Working <span>Together</span>
                </h2>

                <div className="d-grid gap-2 d-md-block text-start mt-4">
                  <a className="btn-border" href="#">
                    <span> Buy Now</span>
                  </a>
                  <a className="btn-grad" href="#">
                    <span> Try Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7">
            <div className="p-3">
              <img src={Banner} className="img" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Team section ======== */}
      <div className="container">
        <div classname="row">
        <div classname="col-md-4  offset-md-3">
          <div className="card team23 card_mx-5" >
            <div className="card-body d-flex justify-content-between">
             <div>
              <img src={Team23} />
             </div>
             <p className="text-light">Hear that? It’s team harmony. Learn how to tackle the <br/> impossible at Team ‘23, April 18–20.</p>
             <div  className="justify-content-center mt-3">
              <a href="#" className="text-center">Register now</a>
             </div>
              </div>
          </div>
        </div>
        </div>
      </div>
      {/* ===== tab section ======== */}
      <div className="container">
        <div classname="row">
          <h1 className="nav-text-h1">
            Task Deployer solutions are designed for all types of work
          </h1>
          <ul
            className="nav nav-pills d-flex justify-content-around mb-4"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item " role="presentation">
              <button
                className="nav-link btn-color active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Work Management
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link btn-color"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                IT Service Management
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link btn-color"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Agile and DevOps
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="row gy-5">
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <h3 className="nav-text-h3">
                    Make work flow across teams <br /> while connecting back to
                    company <br /> goals
                  </h3>
                  <a href="#" className="mb-2">
                    {" "}
                    Work differently, together <BsArrowRightShort />{" "}
                  </a>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 mt-3 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" bg-right nav__text">
                            <h4 className=" ">Confluence</h4>
                            <p>Content collaboration</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" ">
                            <h4> Trello</h4>
                            <p>Visual Project Management</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 mt-3 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" ">
                            <h4> Apps Deployer work Management</h4>
                            <p> Business team collaboration</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="p-3">
                    <img src={Banner} className="img" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="row gy-5">
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <h3 className="nav-text-h3">
                    Enable your dev, IT ops, and <br />
                    business teams to deliver great <br /> service experiences
                  </h3>
                  <a href="#" className="mb-2">
                    {" "}
                    Deliver at high velocity <BsArrowRightShort />{" "}
                  </a>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 mt-3 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" bg-right nav__text">
                            <h4 className=" ">Jira Service Management</h4>
                            <p>High-velocity ITSM</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="p-3">
                    <img src={Banner} className="img" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex={0}
            >
              <div className="row gy-5">
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <h3 className="nav-text-h3">
                    Run a world-class agile software <br /> company—from
                    discovery to <br /> delivery and operations
                  </h3>
                  <a href="#" className="mb-2">
                    {" "}
                    Explore Open DevOps <BsArrowRightShort />{" "}
                  </a>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 mt-3 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" bg-right nav__text">
                            <h4 className=" ">Apps Deployer </h4>
                            <p>Project and issue tracking</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" ">
                            <h4> Trello</h4>
                            <p>Enterprise Agile planning</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 mt-3 py-2 text-color">
                      <div className="ListeObjekt">
                        <a href="" className="nav__text">
                          <FaJira className="nav-btn-logo" />
                          <div className=" ">
                            <h4>Compass Compass </h4>
                            <p> Developer experience platform</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="p-3">
                    <img src={Banner} className="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================Client Section ====== */}
      <div className="py-5">
  <div className="container-fluid client-bg">
    {/* row */}
    <div className="row mb-6 justify-content-center">
      {/* caption */}
      <div className="col-lg-8 col-md-12 col-12 text-center">
        <h3>Join the teams that achieve the impossible every day</h3>
        <span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl py-3">
        Watch a customer story
        </span>
      </div>
    </div>
    {/* row */}
    <div className="row py-5">
      {/* logo */}
      <div className="col-lg-2 col-md-4 col-6">
        <div className="mb-4 text-center align-middle">
          <BsTwitter size={70}/> 
        </div>
      </div>
      {/* logo */}
      <div className="col-lg-2 col-md-4 col-6">
        <div className="mb-4 text-center">
          <SiNasa size={70}/>
        </div>
      </div>
      {/* logo */}
      <div className="col-lg-2 col-md-4 col-6">
        <div className="mb-4 text-center">
          <FaReact size={70}/>
        </div>
      </div>
      {/* logo */}
      <div className="col-lg-2 col-md-4 col-6">
        <div className="mb-4 text-center">
          <FaAmazon size={70}/>
        </div>
      </div>
      {/* logo */}
      <div className="col-lg-2 col-md-4 col-6">
        <div className="mb-4 text-center">
          <FaCcAmazonPay  size={70}/>
        </div>
      </div> 
      <div className="col-lg-2 col-md-4 col-6">
        <div className="mb-4 text-center">
          <SiNasa  size={70}/>
        </div>
      </div> 
    </div>
  </div>
</div>


    </>
  );
};

export default Home;
