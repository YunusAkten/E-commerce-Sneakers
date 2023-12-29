import { useState, useEffect } from "react";
import nikeBanner from "../images/homeImages/nikeBanner.jpg";
import { Sneaker } from "../data/sneakers";
import { sneakers } from "../data/sneakers";

import SneakerCard from "./SneakerCard";

function NikeSection() {
  const [nikes, setNikes] = useState<Sneaker[]>([]);
  useEffect(() => {
    const nikes = sneakers.filter((sneaker) => {
      return sneaker.brand === "nike";
    });
    setNikes(nikes);
  }, []);
  return (
    <div className="flex flex-col my-16 mx-6 md:flex-row md:gap-8 ">
      <div className="    relative flex  l  ">
        <div className="absolute   bottom-0 mb-8 left-1/2   leading-4 ">
          <h1 className="text-4xl my-5 font-bold">Nike</h1>
          <button className="bg-black hover:bg-gray-800 float-end   text-white p-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <img className="h-screen" src={nikeBanner} alt="jordan" />
      </div>
      <div className="  grid  grid-cols-3  gap-16 sm:gap-4   ">
        {nikes.map((sneaker) => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} />;
        })}
      </div>
    </div>
  );
}

export default NikeSection;
