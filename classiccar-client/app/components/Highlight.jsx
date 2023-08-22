import React from "react";
import highlight from "@/app/style/highlight.module.css";
import { Cardo } from "next/font/google";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Highlight = ({
  year,
  manufacturer,
  model,
  origin,
  price,
  transmission,
  km,
  horsepower,
  body_style,
}) => {
  return (
    <div className={highlight.container}>
      <div className={highlight.content}>
        <h2 className={`${highlight.subtitle} ${cardo.className}`}>
          SPECIFICATION
        </h2>
        <div className={highlight.card}>
          <div className={highlight.info}>
            <h3>YEAR</h3>
            <p>{year}</p>
          </div>
          <div className={highlight.info}>
            <h3>MANUFACTURER</h3>
            <p>{manufacturer}</p>
          </div>
          <div className={highlight.info}>
            <h3>MODEL</h3>
            <p>{model}</p>
          </div>
          <div className={highlight.info}>
            <h3>BODY STYLE</h3>
            <p>{body_style}</p>
          </div>
          <div className={highlight.info}>
            <h3>KM</h3>
            <p>{km}</p>
          </div>
          <div className={highlight.info}>
            <h3>TRANSMISSION</h3>
            <p>{transmission}</p>
          </div>
          <div className={highlight.info}>
            <h3>ORIGIN</h3>
            <p>{origin}</p>
          </div>
          <div className={highlight.info}>
            <h3>HORSEPOWER</h3>
            <p>{horsepower}</p>
          </div>
          <div className={highlight.info}>
            <h3>PRICE</h3>
            <p>£ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
