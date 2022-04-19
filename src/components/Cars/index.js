import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cars = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  return (
    <div id="cars">
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
