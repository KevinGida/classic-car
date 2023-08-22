import React from "react";
import { GetAllCars } from "../utils/fetch";

const CarList = async () => {
  const allcars = await GetAllCars();
  console.log(allcars);
  return (
    <div>
      <h1>Car List</h1>
      {allcars.map((car) => (
        <h2>{`${manufacturer} ${model}`}</h2>
      ))}
    </div>
  );
};

export default CarList;
