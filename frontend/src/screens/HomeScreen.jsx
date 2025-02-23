import React from "react";
import Carousel from "../components/Carousel";
import PizzaCardContainer from "../components/PizzaCardContainer";
import OutletFinder from "../components/OutletFinder";

const HomeScreen = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      <OutletFinder />
      <Carousel />
      <PizzaCardContainer />
    </div>
  );
};

export default HomeScreen;
