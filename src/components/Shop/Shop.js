import React from "react";
import "./Shop.css";
import ThreeWheeler from "../ThreeWheeler/ThreeWheeler";
import TwoWheeler from "../TwoWheeler/TwoWheeler";
import FourWheeler from "../FourWheeler/FourWheeler";

const Shop = () => {
  return (
    <div>
      <ThreeWheeler></ThreeWheeler>
      <TwoWheeler></TwoWheeler>
      <FourWheeler></FourWheeler>
    </div>
  );
};

export default Shop;
