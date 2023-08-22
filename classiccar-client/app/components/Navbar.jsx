"use client";
import Link from "next/link";
import Image from "next/image";
import nav from "../style/nav.module.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [colour, setColour] = useState("transparent");

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 90) {
        setColour("#000814");
      } else {
        setColour("transparent");
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);

  return (
    <nav className={nav.container} style={{ backgroundColor: `${colour}` }}>
      <div className={nav.content}>
        <div className={nav.link}>
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="Classic car logo"
              width={600}
              height={400}
              className={nav.image}
            />
          </Link>
        </div>
        <div className={nav.web_list}>
          <Link href="/"> Home</Link>
          <Link href="/cars/for-sale"> For Sale </Link>
          <Link href="/services"> Services </Link>
          <Link href="/cars/sold"> Sold Car </Link>
          <Link href="/about"> About </Link>
          <Link href="/contact"> Contact </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
