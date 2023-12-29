import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jordanBanner from "../images/homeImages/jordanBanner.jpg";
import { Sneaker } from "../data/sneakers";
import { sneakers } from "../data/sneakers";

import SneakerCard from "./SneakerCard";

function JordanSection() {
  const [jordans, setJordans] = useState<Sneaker[]>([]);
  useEffect(() => {
    const jordans = sneakers.filter((sneaker) => {
      return sneaker.brand === "jordan";
    });
    setJordans(jordans);
  }, []);
  return (
    <div className="flex flex-col my-16 mx-6 md:flex-row md:gap-8 ">
      <div className="    relative flex  l  ">
        <div className="absolute   bottom-0 mb-8 left-1/2   leading-4 ">
          <h1 className="text-4xl my-5 font-bold">Jordan</h1>
          <button className="bg-black hover:bg-gray-800 float-end   text-white p-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <img className="h-screen" src={jordanBanner} alt="jordan" />
      </div>
      <div className="  grid  grid-cols-3  gap-16 sm:gap-4   ">
        {jordans.map((sneaker) => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} />;
        })}
      </div>
    </div>
  );
}

export default JordanSection;
