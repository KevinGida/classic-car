import React from "react";
import information from "@/app/style/information.module.css";
import { Cardo } from "next/font/google";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Information = ({ name, detail }) => {
  return (
    <div className={information.container}>
      <div className={information.content}>
        <h2 className={`${information.subtitle} ${cardo.className}`}>
          INFORMATION
        </h2>
        <h3 className={`${information.title} ${cardo.className}`}>{name}</h3>
        <p className={information.detail}>{detail}</p>
      </div>
    </div>
  );
};

export default Information;
