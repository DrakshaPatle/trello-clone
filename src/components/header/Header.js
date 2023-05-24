import React from "react";
import "../../assets/css/header.css";
import {
  FaUserAlt,
  FaSearch,
  FaJira,
  FaArrowRight,
  FaLightbulb,
  FaBars,
} from "react-icons/fa";
import { BsGrid3X3GapFill, BsArrowUpRight } from "react-icons/bs"; 
import ProjectGridPopup from "./ProjectGridPopup";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  shadow ">
        <div className="container container-nav">
          <a className="navbar-brand" href="#">
            Task Deployer
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
          > <FaBars/>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Products
                </a>
                <div className="dropdown-menu shadow">
                  <div className="mega-content px-4">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 py-4">
                          <div className="list-group">
                            <div className="row">
                              <h5 className="featured">FEATURED</h5>
                              <div className="col-12 col-sm-6 col-md-6 py-2 text-color">
                                <div className="ListeObjekt">
                                  <a href="" className="bg-right">
                                    <FaJira className="menu-logo-gray" />
                                    <div className=" ">
                                      <h4> Apps Deployer</h4>
                                      <p>Project and issue tracking</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 py-2 text-color">
                                <div className="ListeObjekt">
                                  <a href="" className="bg-right">
                                    <FaJira className="menu-logo-gray" />
                                    <div className=" ">
                                      <h4>Idea Deployer</h4>
                                      <p>Project and issue tracking</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 py-2 text-color">
                                <div className="ListeObjekt">
                                  <a href="" className="bg-right">
                                    <FaJira className="menu-logo-gray" />
                                    <div className=" ">
                                      <h4> Task Deployer </h4>
                                      <p>Project and issue tracking</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 py-2 text-color">
                                <div className="ListeObjekt">
                                  <a href="" className="bg-right">
                                    <FaJira className="menu-logo-gray" />
                                    <div className=" ">
                                      <h4> Risk Deployer</h4>
                                      <p>Project and issue tracking</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12">
                            <div className=" nav_product">
                              <a href="">
                                View All Products
                                <FaArrowRight className="link-arrow" />
                              </a>
                            </div>
                          </div>
                          <div className="card ">
                            <div className="card-body b50">
                              <div className="row">
                                <div className="col-xs-8 col-sm-8 col-md-8">
                                  <div className="py-2 text-color">
                                    <div className="ListeObjekt">
                                      <a href="" className="bg-right">
                                        <FaLightbulb className="light" />
                                        <div className=" ">
                                          <h4> New products from Point A</h4>
                                          <p>Innovations from Atlassian</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-4 col-sm-4 col-md-4 ">
                                  <div className="nav_product textend">
                                    <a href="" className="">
                                      View All
                                      <FaArrowRight className="link-arrow" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-12 col-xs-6 col-sm-6 col-md-6 py-2 text-color">
                                  <div className="ListeObjekt">
                                    <a href="" className="bg-right">
                                      <FaJira className="menu-logo-gray white" />
                                      <div className=" ">
                                        <h4>Atlas</h4>
                                        <p>Teamwork directory</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-12 col-xs-6 col-sm-6 col-md-6 py-2 text-color">
                                  <div className="ListeObjekt">
                                    <a href="" className="bg-right">
                                      <FaJira className="menu-logo-gray white" />
                                      <div className=" ">
                                        <h4>Compass</h4>
                                        <p>Developer experience platform</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="col-12 col-xs-12 col-sm-12 col-md-12  ">
                            <div>
                              <span> Marketplace</span>
                              <a href="" className="spam-color nav_product">
                                Connect thousands of apps for all your Atlassian
                                products
                                <FaArrowRight className="link-arrow" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4 py-4 vertical">
                          <div className="row">
                            <h5 className="featured">BROWSE BY SOLUTION</h5>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Agile & DevOps</h4>
                                <p>
                                  Run a world-class agile software organization
                                  from discovery to delivery and operations
                                </p>
                              </a>
                            </div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>IT Service Management</h4>
                                <p>
                                  Empower autonomous teams without losing
                                  organizational alignment
                                </p>
                              </a>
                            </div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Work Management</h4>
                                <p>
                                  Empower autonomous teams without losing
                                  organizational alignment
                                </p>
                              </a>
                            </div>
                          </div>

                          <div className="row">
                            <h5 className="featured">BROWSE BY TEAM TYPE</h5>
                            <ul className="nav flex-column ">
                              <li className="nav-item">
                                <a className="nav-link active  " href="#">
                                  Enterprise
                                </a>
                              </li>
                              <li className="nav-item ">
                                <a className="nav-link active" href="#">
                                  Small business
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  Startup
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  Non-profit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  For teams
                </a>
                <div className="dropdown-menu shadow">
                  <div className="mega-content px-4">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9 py-4">
                          <div className="row">
                            <div className="col-12col-xs-12 col-sm-12 col-md-4">
                              <h5 className="featured">BY TEAM SIZE</h5>
                              <div className="row">
                                <div className="col-12col-xs-12 col-sm-12 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Startups</h4>
                                    <p>
                                      Great for startups, from incubator to IPO
                                    </p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Small business</h4>
                                    <p>
                                      Get the right tools for your growing
                                      business
                                    </p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Enterpriset</h4>
                                    <p>
                                      Learn how we make big teams successful
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-8">
                              <h5 className="featured">BY TEAM FUNCTION</h5>
                              <div className="row">
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Software</h4>
                                    <p>Plan, build, & ship quality products</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Marketing</h4>
                                    <p>Bring together a winning strategy</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 py-3">
                                  <a href="" className="bg-right">
                                    <h4>HR</h4>
                                    <p>Streamline people management</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Legal</h4>
                                    <p>Operate securely and reliably</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Operations</h4>
                                    <p>Run your business efficiently</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 py-3">
                                  <a href="" className="bg-right">
                                    <h4>IT</h4>
                                    <p>Provide great service and support</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-xs-12 col-sm-12 col-md-12  ">
                            <a href="" className="spam-color nav_product">
                              View all products
                            </a>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-3 py-4 vertical">
                          <div className="row">
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Marketplace</h4>
                                <p>Apps that enhance Atlassian products</p>
                              </a>
                            </div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Developers</h4>
                                <p>
                                  Developers Docs and resources to build
                                  Atlassian apps
                                </p>
                              </a>
                            </div>
                            <div className="line"></div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color ">
                              <a href="" className="bg-right">
                                <h4>Trust & security</h4>
                                <p>
                                  Compliance, privacy, platform roadmap, and
                                  more
                                </p>
                              </a>
                            </div>
                            <div className="line"></div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Work Life blog</h4>
                                <p>Stories on culture, tech, teams, and tips</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Support
                </a>
                <div className="dropdown-menu shadow">
                  <div className="mega-content px-4">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9 py-4">
                          <div className="row">
                            <div className="col-12 col-xs-12 col-sm-12 col-md-4">
                              <h5 className="featured">RESOURCES</h5>
                              <div className="row">
                                <div className="col-12 col-xs-6 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Documentation</h4>
                                    <p>Guides to all of our products</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-6 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Atlassian Migration Program</h4>
                                    <p>Tools and guidance for migrating</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-6 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Cloud roadmap</h4>
                                    <p>Upcoming feature releases</p>
                                  </a>
                                </div>
                                <div className="col-12 col-xs-6 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Upcoming feature releases</h4>
                                    <p>FAQs about our policies</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                              <h5 className="featured">SUPPORT SERVICES</h5>
                              <div className="row">
                                <div className="col-12 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Enterprise services</h4>
                                    <p>Personal support for large teams</p>
                                  </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Partner support</h4>
                                    <p>Trusted third-party consultants</p>
                                  </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Atlassian Support</h4>
                                    <p>A resource hub for teams and admins</p>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4">
                              <h5 className="featured">LEARN & CONNECT</h5>
                              <div className="row">
                                <div className="col-12 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>About us</h4>
                                    <p>Our mission and history</p>
                                  </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-12 py-3">
                                  <a href="" className="bg-right">
                                    <h4>Careers</h4>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" col-sm-12 col-md-3 py-4 vertical">
                          <div className="row">
                            <div className="col-12 col-sm-6 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Marketplace</h4>
                                <p>Apps that enhance Atlassian products</p>
                              </a>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 py-2 text-color ">
                              <a href="" className="bg-right">
                                <h4>Developers</h4>
                                <p>
                                  Developers Docs and resources to build
                                  Atlassian apps
                                </p>
                              </a>
                            </div>
                            <div className="line"></div>
                            <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Trust & security</h4>
                                <p>
                                  Compliance, privacy, platform roadmap, and
                                  more
                                </p>
                              </a>
                            </div>
                            <div className="line"></div>
                            <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                              <a href="" className="bg-right">
                                <h4>Work Life blog</h4>
                                <p>Stories on culture, tech, teams, and tips</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="d-flex ms-auto">
              <NavLink to="get-started">

              <button type="button" className="nav-try-now btn-sm">
                Try now
              </button>

              </NavLink>
              <button type="button" className="nav-buy-now btn-sm">
                Buy now
              </button>
              <button className="search-icon btn">
                {" "}
                <FaSearch />{" "}
              </button>

              <ProjectGridPopup/>
              {/* <div className="dropdown mt-2 px-2">
                <a
                  className="dropdown-toggle icon-toggle-hide"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsGrid3X3GapFill />
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end px-3"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <div className="d-flex flex-row" style={{ width: "13rem" }}>
                      <div className="p-2 d-flex justify-content-start">
                        Switch to
                      </div>
                      <div className="d-flex justify-content-end p-2">
                        <a className=" " href="https://www.appsdeployer.com/">
                          <span className="websiteLinkText">Apps Deployer</span>
                          <BsArrowUpRight />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.appsdeployer.com/"
                    >
                      <FaJira className=" navIconWebsite" />
                      <span className="websiteLinkText">Apps Deployer</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://cx.consdeployer.com">
                      <FaJira className=" navIconWebsite" />
                      <span className="websiteLinkText">Task Deployer</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://idea.consdeployer.com"
                    >
                      <FaJira className=" navIconWebsite" />
                      <span className="websiteLinkText"> Idea Deployer</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://risk.condeployer.com">
                      <FaJira className=" navIconWebsite" />
                      <span className="websiteLinkText"> Risk Deployer</span>
                    </a>
                  </li>
                </ul>
              </div> */}
             
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu">
                <li className="nav-item dropdown-center">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUserAlt />
                  </a>

                  <ul
                    className="dropdown-menu dropdown-menu-end "
                    aria-labelledby="navbarDropdown"
                  >
                    {" "}
                    <li>
                      <a className="dropdown-item user-icon" href="#">
                        Find my team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item user-icon" href="/login">
                        <i className="fas fa-cog fa-fw" /> Log In
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
