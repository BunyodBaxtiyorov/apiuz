import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#">Home</a>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>© 2024 RapidAPI. All Rights Reserved. </p>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
          <div className="icons">
            <CiFacebook />
            <FaXTwitter />
            <CiLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
