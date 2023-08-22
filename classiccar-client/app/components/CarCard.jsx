import React from "react";
import Link from "next/link";
import Image from "next/image";
import carCard from "../style/carCard.module.css";
import { fetchThumbnail } from "../utils/fetch";

const CarCard = async ({ car }) => {
  const { manufacturer, model, id } = car;
  const images = await fetchThumbnail(id);
  return (
    <div className={carCard.container}>
      <Link href={`/cars/${id}`}>
        <Image
          className={carCard.image}
          src={images[0].path}
          alt={`${manufacturer} ${model}`}
          width={500}
          height={400}
        ></Image>
      </Link>
    </div>
  );
};

export default CarCard;
