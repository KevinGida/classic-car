"use client";
import React, { useState } from "react";
import slider from "../style/slider.module.css";

const Slider = ({ slides }) => {
  const [CurrentIndex, SetCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = CurrentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : CurrentIndex - 1;
    SetCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = CurrentIndex == slides.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    SetCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    SetCurrentIndex(slideIndex);
  };

  return (
    <div className={slider.container}>
      <div className={slider.content}>
        <div className={slider.left} onClick={goToPrevious}>
          〈
        </div>
        <div className={slider.right} onClick={goToNext}>
          〉
        </div>
        <div
          className={slider.slide}
          style={{ backgroundImage: `url(${slides[CurrentIndex].path})` }}
        />
        <div className={slider.dotContainer}>
          {slides.map((slide, slideIndex) => (
            <div
              className={slider.dot}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
