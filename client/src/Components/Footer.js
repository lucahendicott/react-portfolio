import React from "react";
import resume from "../images/Resume.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-div">
          <div className="col-lg-4 col-md-6 col-sm-6 footer-div-two align-items-center">
            <div className="d-flex">
              <a href="mailto:lucahdavidd88@gmail.com">
                lucahdavid88@gmail.com
              </a>
            </div>
            <div className="d-flex ">
              <a href="tel:6145563122">+1(614)556-3122</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 ml-auto align-items-center">
            <div className="row">
              <div className="col ">
                <a
                  href="https://www.linkedin.com/in/lucahendicott/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <br />
                <a href="https://github.com/lucahendicott" target="_blank">
                  GitHub
                </a>
                <br />
                <a href={resume} target="_blank">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
