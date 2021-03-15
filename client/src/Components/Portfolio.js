import React from "react";
import burgerEater from "../images/burger-eater.gif";
import durationStation from "../images/duration-station.png";
import mixtape from "../images/mixtape-usage.gif";
import "react-popupbox/dist/react-popupbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Portfolio = () => {
  const burgerPopup = () => {
    const content = (
      <div className="popup-box">
        <img className="photo-popup" src={burgerEater} alt="burger-eater-app" />
        <p>
          An application where user's can enter burger's they would like to eat
          and devour them! This app demonstrates the utilization of a mysql
          database using express and express-handlebars.
        </p>
        <a
          className="link btn btn-info m-2"
          onClick={() =>
            window.open("https://github.com/lucahendicott/burger-eater.git")
          }
        >
          Github Repo
        </a>
        <br />
        <a
          className="link btn btn-info m-2"
          onClick={() =>
            window.open("https://murmuring-badlands-36701.herokuapp.com/?")
          }
        >
          Deploy App
        </a>
      </div>
    );

    PopupboxManager.open({ content });
  };

  const durationPopup = () => {
    const content = (
      <div>
        <img
          className="photo-popup"
          src={durationStation}
          alt="duration-station-app"
          style={{ width: "500px" }}
        />
        <p>
          An application designed to return music artist's album information, by
          searching album names.
        </p>
        <a
          className="link btn btn-info m-2"
          onClick={() =>
            window.open("https://github.com/lucahendicott/duration-station.git")
          }
        >
          Github Repo
        </a>
        <br />
        <a
          className="link btn btn-info m-2"
          onClick={() =>
            window.open("https://lucahendicott.github.io/duration-station/")
          }
        >
          Deploy App
        </a>
      </div>
    );

    PopupboxManager.open({ content });
  };

  const handlePopupBurger = {
    titleBar: {
      enable: true,
      text: "EAT-THE-BURGER",
    },
    fadeIn: true,
    fadeInSpeed: 300,
  };

  const handlePopupDuration = {
    titleBar: {
      enable: true,
      text: "DURATION STATION",
    },
    fadeIn: true,
    fadeInSpeed: 300,
  };

  return (
    <div id="portfolio" className="porfolio-styles">
      <div className="container portfolio-container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-wrapper row justify-content-center">
          <div className="portfolio-photo-box" onClick={burgerPopup}>
            <img
              className="portfolio-photo"
              src={burgerEater}
              alt="burger-eater-app"
            />
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
            <div className="photo-hover"></div>
          </div>

          <div className="portfolio-photo-box" onClick={durationPopup}>
            <img
              className="portfolio-photo duration-photo"
              src={durationStation}
              alt="duration-station-app"
            />
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
            <div className="photo-hover"></div>
          </div>

          <div className="portfolio-photo-box">
            <img className="portfolio-photo" src={mixtape} alt="mixtape-app" />
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
            <div className="photo-hover"></div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...handlePopupBurger} />
      <PopupboxContainer {...handlePopupDuration} />
    </div>
  );
};

export default Portfolio;
