import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Detail from "./Detail";

const CarDetail = () => {
  const { id } = useParams();
  const { cars } = useSelector((state) => state.carsReducer);

  const car = cars.find((el) => el.id.toString() === id);
  
  return (
    <div id="car-detail">
      <Detail />
      <div>
        <Card car={car} />
      </div>
    </div>
  );
};

export default CarDetail;
