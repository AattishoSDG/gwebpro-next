"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const AutoScrollSlider = () => {
  const sliderRef = useRef(null);
  const autoScrollInterval = useRef(null);

  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
  };

  const handleMouseMove = (e) => {
    const { offsetX, target } = e.nativeEvent;
    const containerWidth = target.offsetWidth;

    if (offsetX < containerWidth / 2) {
      // Mouse is in the left half, scroll to the left
      startAutoScroll("left");
    } else {
      // Mouse is in the right half, scroll to the right
      startAutoScroll("right");
    }
  };

  const startAutoScroll = (direction) => {
    stopAutoScroll(); // Clear any existing interval
    autoScrollInterval.current = setInterval(() => {
      if (sliderRef.current) {
        direction === "left"
          ? sliderRef.current.slickPrev()
          : sliderRef.current.slickNext();
      }
    }, 1000); // Adjust the interval as needed
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  return (
    <div
      className="container mt-5"
      onMouseMove={handleMouseMove}
      onMouseLeave={stopAutoScroll}
    >
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
        <div>
          <h3>Slide 4</h3>
        </div>
        <div>
          <h3>Slide 5</h3>
        </div>
        <div>
          <h3>Slide 6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default AutoScrollSlider;
