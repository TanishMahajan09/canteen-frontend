import React, { useEffect, useState } from "react";
import Canteen from "./Canteen";
import axios from "axios";
import ImageCarousel from "./ImageCarousel";
import canteen1 from "../public/canteen1.jpeg";
import canteen2 from "../public/canteen2.webp";
import canteen3 from "../public/canteen3.jpeg";

const Home = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/general/listofcanteens")
      .then((response) => {
        setInformation(response.data.data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center m-4">
        Welcome to Panjab University Canteens.
      </h1>
      <h2 className="text-center font-bold text-3xl ">Our Canteens</h2>
      <div>
        <ImageCarousel images={[canteen1, canteen2, canteen3]} />
      </div>
      <h2 className="text-center font-bold text-xl ">
        Select a canteen from where you want to eat food.
      </h2>
      {information.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Canteen information={information} />
      )}
    </div>
  );
};

export default Home;
