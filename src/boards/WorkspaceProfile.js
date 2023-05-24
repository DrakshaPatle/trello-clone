import React from "react";
import "./board.css"; 
import { BsCheck2Square, BsThreeDots } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import {
  AiOutlineDown,
  AiOutlinePlus,
  AiOutlineEye, 
} from "react-icons/ai";
import { VscListFlat } from "react-icons/vsc";
import { FaPaperPlane, FaAirbnb } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; 

const BoardHome = () => {
  return (
    <>
      {/* Feed Starts */}
      <div className="col-md-6">
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="row mb-3">
              <div class="card-header">
                <BsCheck2Square className="ul__icon" />
                <span className="ul__text"> Your Items </span>
                <FaAirbnb />
              </div>
              <p class="pt-2 px-5 card-text">
                when you are added checklist Items.
              </p>
            </div>
            <div className="row">
              <div class="card-header mb-2">
                <MdOutlineWatchLater className="ul__icon" />
                <span className="ul__text">Up next </span>
              </div>
              <div class="card border-light card-box-shadow pr-0 mb-3">
                <div class="row g-0 pr-0">
                  <div class="col-md-3">
                    <img
                      src="https://a.trellocdn.com/prgb/assets/6841b60bdc0a1588b82b.svg"
                      class="img-fluid rounded-start"
                      width={150}
                      alt="image"
                    />
                  </div>
                  <div class="col-md-9 align-self-center">
                    <div class="card-body ">
                      <h5 class="card-title">Up to next </h5>
                      <p class="card-text">keep track of upcoming due dates.</p>
                      <p class="card-text">
                        <small class="text-muted">
                          <a href="#" className="text-center">
                            {" "}
                            <span>Go it! Dissmiss this</span>{" "}
                          </a>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div class="card card-box-shadow">
                <div className="card-bg-img p-4">
                  <div className="card--shadow bg-light">
                    <small>1. Learning</small>
                    <div class="d-flex justify-content-between">
                      <div>
                        <AiOutlineEye size={25} /> <VscListFlat size={25} />
                      </div>
                      <span class="circle">SV</span>
                    </div>
                  </div>
                </div>

                <div class="card-body ">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="Listeboard mx-3">
                        <a href="" className="bg-right">
                          <span class="circle">SV</span>
                          <div className=" ">
                            <h4>swati added by you</h4>
                            <p>a month ago</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 ml-auto">
                      <div class="d-flex justify-content-end mx-3">
                        {" "}
                        <BsThreeDots size={25} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="card-link btn btn-outline-secondary">
                    <FaPaperPlane /> Card link
                  </a>
                  <a href="#" class="card-link btn btn-outline-secondary">
                    <RxCross2 /> Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feed Ends */}
      {/* Widgets Starts */}
      <div className="col-md-3">
        <div className="widgets">
          <div className="list-group">
            <div className="row">
              <h5 className="featured">
                {" "}
                <MdOutlineWatchLater /> recently viewed
              </h5>
              <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                <div className="Listeboard">
                  <a href="" className="box-right">
                    <span className="board-box"> </span>
                    <div className=" ">
                      <h4> Apps Deployer</h4>
                      <p>AppsDeployer</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                <div className="Listeboard">
                  <a href="" className="box-right">
                    <span className="board-box"> </span>
                    <div className=" ">
                      <h4>Task Deployer</h4>
                      <p>AppsDeployer</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                <div className="Listeboard">
                  <a href="" className="box-right">
                    <span className="board-box"> </span>
                    <div className=" ">
                      <h4>Idea Deployer</h4>
                      <p>AppsDeployer</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 py-2 text-color">
                <a
                  href="#"
                  class="nav-link "
                  role="button"
                  data-bs-toggle="button"
                >
                  {" "}
                  <AiOutlineDown /> Show More
                </a>
              </div>
            </div>
            <div className="row mt-4">
              <h4 className="featured">Link </h4>
              <div className="col-12 col-sm-12 col-md-12 ">
                <small>
                  {" "}
                  <AiOutlinePlus /> Create A Board
                </small>
              </div>
            </div>
          </div>

          {/* <div className="widgets__article">
            <div className="widgets__articleLeft">
              <i className="material-icons"> fiber_manual_record </i>
            </div>
            <div className="widgets__articleRight">
              <h4>Coding LinkedIn Clone</h4>
              <p>Top news - 4500 readers</p>
            </div>
          </div>
          <div className="widgets__article">
            <div className="widgets__articleLeft">
              <i className="material-icons"> fiber_manual_record </i>
            </div>
            <div className="widgets__articleRight">
              <h4>Coding LinkedIn Clone</h4>
              <p>Top news - 4500 readers</p>
            </div>
          </div> */}
        </div>
      </div>
      {/* Widgets Ends */}
    </>
  );
};

export default BoardHome;
