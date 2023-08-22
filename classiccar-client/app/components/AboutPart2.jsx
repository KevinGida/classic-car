import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutPart from "../style/aboutPart.module.css";
import { Cardo } from "next/font/google";

const cardo = Cardo({
  weight: ["400"],
  subsets: ["latin"],
});

const AboutPart = ({ image, h2, p1, p2, btn, link }) => {
  return (
    <div className={aboutPart.part}>
      <div>
        <h2 className={`${aboutPart.title} ${cardo.className}`}>{h2}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <button className={aboutPart.button}>
          <Link href={link}>{btn}</Link>
        </button>
      </div>
      <Image
        src={image}
        alt="Picture of the author"
        className={aboutPart.image}
        width={400}
        height={600}
      />
    </div>
  );
};

export default AboutPart;
