export const getCars = () => async (dispatch) => {
  try {
    const response = await fetch("https://rent-cars-api.herokuapp.com/customer/car");

    const result = await response.json();

    result.forEach((car) => {
      car.passenger = "4 orang";
      car.engine = "Manual";
      car.year = "Tahun 2020";
    });

    dispatch({ type: "SET_CARS", payload: result });
  } catch (error) {
    console.log("error get cars", error);
  }
};
