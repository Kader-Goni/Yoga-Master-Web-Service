import React from "react";
import "../Style/Home.css";
import Kader from "../Images/Kader_Goni.png";
import { FiFacebook } from "react-icons/fi";
import { BsChatDotsFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="container my-5">
        <div
          className="card mb-3 text-start w-75 profile mx-auto"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="row g-0  align-items-center">
            <div className="col-md-4">
              <img src={Kader} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-8 d-flex px-2 align-items-center bg-success bg-opacity-10 h-100">
              <div className="card-body">
                <h4 class="fw-bold">Hi, I'm Kader Goni</h4>
                <p className="card-text">
                I'm a junior frontend developer.
                  I work as a full stack web developer. I like programming a lot. I am always aware of the project’s deadline and I try to deliver projects timely. 
                  <br />  <br />
                  I'm skilled at :<br />

➠ HTML <br />
➠ CSS <br />
➠ Bootstrap <br />
➠ tailwind <br /> 
➠ JavaScript <br /> 
➠ ReactJS <br />
➠ NodeJS <br />
➠ ExpressJS <br />
➠ MongoDB 

                </p>
                <div className="d-flex mb-3">
                  <button className="btn p-1 rounded-pill me-2 bt-social">
                    <a href="https://www.facebook.com/kader.goni35" target="_blank"><FiFacebook></FiFacebook></a>
                  </button>
                  <button className="btn p-1 rounded-pill mx-2 bt-social">
                      <a href="tel:01782269384"><BsChatDotsFill></BsChatDotsFill></a>
                    
                  </button>
                  <button className="btn p-1 rounded-pill mx-2 bt-social">
                      <a href="https://twitter.com/kader_goni" target="_blank"><BsTwitter></BsTwitter></a>
                    
                  </button>
                  <button className="btn p-1 rounded-pill mx-2 bt-social">
                      <a href="https://www.instagram.com/kader.goni35/" target="_blank"><BsInstagram></BsInstagram></a>
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
