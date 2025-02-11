import React, { useEffect } from "react";
import PizzaCard from "./PizzaCard";
import pizza from "../assets/mixed-pizza-with-various-ingridients.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzasThunk } from "../Redux/thunks/PizzaThunk";

const PizzaCardContainer = () => {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2  bg-gray-300 opacity-80 text-gray p-3 rounded-full cursor-pointer z-10 transition-opacity hover:bg-opacity-100"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 opacity-80 text-gray p-3 rounded-full cursor-pointer z-10 transition-opacity hover:bg-opacity-100"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // const pizzas = [
  //   {
  //     id: 1,
  //     image: pizza,
  //     name: "Margherita Pizza",
  //     description:
  //       "A classic margherita pizza with fresh mozzarella, tomatoes, and basil.",
  //     itemSizes: [
  //       {
  //         size: "SMALL",
  //         price: "10.99",
  //       },
  //       {
  //         size: "MEDIUM",
  //         price: "12.99",
  //       },
  //       {
  //         size: "LARGE",
  //         price: "14.99",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     image: pizza,
  //     name: "Pepperoni Pizza",
  //     description:
  //       "A delicious pepperoni pizza with a crispy crust and melted cheese.",
  //     itemSizes: [
  //       {
  //         size: "SMALL",
  //         price: "10.99",
  //       },
  //       {
  //         size: "MEDIUM",
  //         price: "12.99",
  //       },
  //       {
  //         size: "LARGE",
  //         price: "14.99",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     image: pizza,
  //     name: "Pepperoni Pizza",
  //     description:
  //       "A delicious pepperoni pizza with a crispy crust and melted cheese.",
  //     itemSizes: [
  //       {
  //         size: "SMALL",
  //         price: "10.99",
  //       },
  //       {
  //         size: "MEDIUM",
  //         price: "12.99",
  //       },
  //       {
  //         size: "LARGE",
  //         price: "14.99",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     image: pizza,
  //     name: "Pepperoni Pizza",
  //     description:
  //       "A delicious pepperoni pizza with a crispy crust and melted cheese.",
  //     itemSizes: [
  //       {
  //         size: "SMALL",
  //         price: "10.99",
  //       },
  //       {
  //         size: "MEDIUM",
  //         price: "12.99",
  //       },
  //       {
  //         size: "LARGE",
  //         price: "14.99",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     image: pizza,
  //     name: "Pepperoni Pizza",
  //     description:
  //       "A delicious pepperoni pizza with a crispy crust and melted cheese.",
  //     itemSizes: [
  //       {
  //         size: "SMALL",
  //         price: "10.99",
  //       },
  //       {
  //         size: "MEDIUM",
  //         price: "12.99",
  //       },
  //       {
  //         size: "LARGE",
  //         price: "14.99",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     image: pizza,
  //     name: "Pepperoni Pizza",
  //     description:
  //       "A delicious pepperoni pizza with a crispy crust and melted cheese.",
  //     itemSizes: [
  //       {
  //         size: "SMALL",
  //         price: "10.99",
  //       },
  //       {
  //         size: "MEDIUM",
  //         price: "12.99",
  //       },
  //       {
  //         size: "LARGE",
  //         price: "14.99",
  //       },
  //     ],
  //   },
  // ];

  const pizzas = useSelector((state) => state.pizzaReducer.allPizzas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzasThunk());
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 mb-10">
      <h1 className="text-center text-3xl font-bold mb-10">Our Pizzas</h1>
      <Slider {...settings}>
        {pizzas?.map((pizza) => (
          <div key={pizza.id} className="px-2">
            {" "}
            {/* Added padding for spacing */}
            <PizzaCard pizza={pizza} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PizzaCardContainer;
