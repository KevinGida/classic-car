import React from "react";
import catalogue from "../style/catalogue.module.css";
import { fetchCarsIsSold } from "../utils/fetch";
import CarCard from "./CarCard";
import { Cardo } from "next/font/google";

const cardo = Cardo({
  weight: ["400"],
  subsets: ["latin"],
});

const Catalogue = async ({ title, isSold }) => {
  const allcars = await fetchCarsIsSold(isSold);
  console.log("test" + allcars);
  return (
    <div className={catalogue.container}>
      <h2 className={`${catalogue.title} ${cardo.className}`}>{title}</h2>
      <div className={catalogue.content}>
        {allcars.map((car) => (
          <CarCard car={car} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
