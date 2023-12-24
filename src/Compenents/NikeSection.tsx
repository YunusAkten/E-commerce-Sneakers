import { useState, useEffect } from "react";
import nikeBanner from "../images/homeImages/nikeBanner.jpg";
import { Shoe } from "../data/shoes";
import shoes from "../data/shoes";
import CreateShoeCard from "./CreateShoeCard";
function NikeSection() {
  const [nikes, setNikes] = useState<Shoe[]>([]);
  useEffect(() => {
    const nikes = shoes.filter((shoe) => {
      return shoe.brand === "nike";
    });
    setNikes(nikes);
  }, []);
  return (
    <div className="flex flex-row gap-2 m-6">
      <div className="flex-2  relative">
        <div className="absolute     py-2.5 bottom-0 right-0 m-6      leading-4">
          <h1 className="text-4xl my-5 font-bold">Nike</h1>
          <button className="bg-black hover:bg-gray-800   text-white p-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <img className="h-screen" src={nikeBanner} alt="nike" />
      </div>
      <div className="grid gap-2 flex-1    grid-cols-3">
        {nikes.map((shoe) => {
          return (
            <a href={`/sneakers${shoe.name}`}>
              <img className=" " src={shoe.img} alt={shoe.name} />
              <h1 className="text-center text-xl font-bold">{shoe.name}</h1>
              <h1 className="text-center text-xl font-bold">${shoe.price}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NikeSection;
