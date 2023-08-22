import React from "react";
import header from "../style/header.module.css";
import { Cardo } from "next/font/google";

const cardo = Cardo({
  weight: ["400"],
  subsets: ["latin"],
});

const Header = ({ head, p1, p2 }) => {
  return (
    <div className={header.container}>
      <div className={header.content}>
        <h1 className={cardo.className}>{head}</h1>
        <hr className={header.line} />
        <p className={header.first}>{p1}</p>
        <p className={header.second}>{p2}</p>
      </div>
    </div>
  );
};

export default Header;
