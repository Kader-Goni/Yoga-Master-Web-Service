import React from "react";

import { FiFacebook } from "react-icons/fi";
import { BsChatDotsFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center footer">
      <div className="d-flex mb-3">
        <button className="btn p-1 rounded-pill me-2 bt-social">
          <a href="" target="_blank">
            <FiFacebook></FiFacebook>
          </a>
        </button>
        <button className="btn p-1 rounded-pill mx-2 bt-social">
          <a href="">
            <BsChatDotsFill></BsChatDotsFill>
          </a>
        </button>
        <button className="btn p-1 rounded-pill mx-2 bt-social">
          <a href="" target="_blank">
            <BsTwitter></BsTwitter>
          </a>
        </button>
        <button className="btn p-1 rounded-pill mx-2 bt-social">
          <a href="" target="_blank">
            <BsInstagram></BsInstagram>
          </a>
        </button>
      </div>

      <div class="footer-details">
        <h2 class="heading">Spiritual Yoga Master...</h2>
        <p>Copyright © 2022. All rights reserved By Kader Goni.</p>
      </div>
    </div>
  );
};

export default Footer;
