import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import {  FaJira } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <>
        <footer className="text-center text-lg-start"style={{backgroundColor : "#f4f5f7"}}>
          {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
               <FaFacebookSquare/>
              </a>
              <a href="" className="me-4 text-reset">
                <FaTwitter/>
              </a>
              <a href="" className="me-4 text-reset">
               <FaLinkedin/>
              </a> 
              <a href="" className="me-4 text-reset">
               <FaInstagram/>
              </a> 
              <a href="" className="me-4 text-reset">
                <FaYoutube/>
              </a>
            </div>
          </section> */}

          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 ml-5">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <FaJira className="fas fa-gem me-3" />
                    Task Deployer
                  </h6>
                  <p >
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Apps Deployer
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Task Deployer
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Idea Deployer
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Risk Deployer 
                    </a>
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">RESOURCES</h6>
                  <p>
                    <a href="#!" className="text-reset">
                    Technical Support
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Purchasing & licensing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Atlassian Community
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    My Account
                    </a>
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">RESOURCES</h6>
                  <p>
                    <a href="#!" className="text-reset">
                    Partners
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Training & Certification
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Documentation
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Developer Resources
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">ABOUT Task Deployer</h6>
                  <p>
                    <a href="#!" className="text-reset">
                    Company
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Careers
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Events
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Blogs
                    </a>
                  </p>
                </div>

                
              </div>
            </div>
          </section>

          {/* <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }} >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div> */}

          <section
            className="d-flex justify-content-center justify-content-lg-between py-4 px-5" 
          >
            <div className="me-5 d-none d-lg-block">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link text-reset " href="#">
                  Privacy policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-reset" href="#">
                  Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-reset" href="#">
                  Modern Slavery Act
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-reset" href="#">
                  Impressum
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center ">
              © 2021 Copyright:
              <a className="text-reset fw-bold" href="#">
                Task Deployer
              </a>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <FaFacebookSquare />
              </a>
              <a href="" className="me-4 text-reset">
                <FaTwitter />
              </a>
              <a href="" className="me-4 text-reset">
                <FaLinkedin />
              </a>
              <a href="" className="me-4 text-reset">
                <FaInstagram />
              </a>
              <a href="" className="me-4 text-reset">
                <FaYoutube />
              </a>
            </div>
          </section>
        </footer>
      </>
    </>
  );
};

export default Footer;
