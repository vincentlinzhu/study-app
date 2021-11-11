import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Carousel;
