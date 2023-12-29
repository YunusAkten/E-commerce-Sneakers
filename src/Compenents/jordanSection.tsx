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
    <div className="flex flex-col gap-2 mt-16 mx-6 md:flex-row">
      <div className="flex-2  relative">
        <div className="absolute     py-2.5 bottom-0 right-0 m-6      leading-4">
          <h1 className="text-4xl my-5 font-bold">Jordan</h1>
          <button className="bg-black hover:bg-gray-800   text-white p-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <img className="h-screen" src={jordanBanner} alt="jordan" />
      </div>
      <div className="grid gap-2 flex-1    grid-cols-3">
        {jordans.map((sneaker) => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} />;
        })}
      </div>
    </div>
  );
}

export default JordanSection;
