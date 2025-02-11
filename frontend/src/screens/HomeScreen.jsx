import React from "react";
import Carousel from "../components/Carousel";
import PizzaCardContainer from "../components/PizzaCardContainer";
import OutletFinder from "../components/OutletFinder";

const HomeScreen = () => {
  return (
    <>
      <OutletFinder />
      <Carousel />
      <PizzaCardContainer />
    </>
  );
};

export default HomeScreen;
