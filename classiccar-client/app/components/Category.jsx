import React from "react";
import category from "../style/category.module.css";
import Link from "next/link";

const Category = () => {
  return (
    <div className={category.container}>
      <div className={category.content}>
        <div className={category.items_container}>
          <Link className={category.item} href="/contact">
            <p>SHOWROOM</p>
          </Link>
        </div>
        <div className={category.items_container}>
          <Link className={category.item} href="/cars/for-sale">
            <p>CARS FOR SALE</p>
          </Link>
        </div>
        <div className={category.items_container}>
          <Link className={category.item} href="/cars/sold">
            <p>SOLD CARS</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
