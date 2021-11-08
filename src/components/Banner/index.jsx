import React from "react";
import "./styles.scss"
import banner from "./22222.jpeg";
const Banner = () => {
  return (
    <div className="main-banner">
        <div className="gradient"></div>
        <div className="main-banner-image">
            <img src={banner} alt="" />
        </div>
        <div className="main-banner-box">
            <div className="main-banner-title"><h1>Flex up</h1></div>
            <div className="main-banner-subtitle"><h2>Subtitle 2</h2></div>
            <button className="main-banner-button">Explore now</button>
        </div>
    </div>
  );
};

export default Banner;
