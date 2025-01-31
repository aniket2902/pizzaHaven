import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizza from "../assets/mixed-pizza-with-various-ingridients.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={pizza} alt="Pizza" className="w-full h-auto object-cover" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
