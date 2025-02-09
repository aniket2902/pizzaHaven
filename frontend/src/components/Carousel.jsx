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
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      image: pizza,
      text: "Delicious Pepperoni Pizza",
    },
    {
      image: pizza,
      text: "Cheesy Margherita Pizza",
    },
    {
      image: pizza,
      text: "Spicy BBQ Chicken Pizza",
    },
  ];

  return (
    <div className="carousel-container cursor-pointer">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-lvh">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <div className="bg-gradient-to-r from-black/70 to-black/20 px-6 py-3 rounded-lg">
                <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg animate-fadeIn">
                  {slide.text}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
