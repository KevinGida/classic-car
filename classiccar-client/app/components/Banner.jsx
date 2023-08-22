import React from "react";
import banner from "../style/banner.module.css";

const Banner = ({ header }) => {
  return (
    <div className={banner.container}>
      <h1>{header}</h1>
    </div>
  );
};

export default Banner;
