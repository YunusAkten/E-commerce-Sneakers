import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import nikeBanner from "../images/homeImages/nikeBanner.jpg";
import { Sneaker } from "../data/sneakers";
import SneakerCard from "./SneakerCard";

function NikeSection() {
  const sneakers: Sneaker[] = useSelector((state: any) => state.app.sneakers);
  const [nikes, setNikes] = useState<Sneaker[]>([]);
  useEffect(() => {
    const nikes = sneakers.filter((shoe) => {
      return shoe.brand === "nike";
    });
    setNikes(nikes);
  }, []);
  return (
    <div className="flex flex-row gap-2 m-6">
      <div className="flex-2  relative">
        <div className="absolute     py-2.5 bottom-12 right-0 m-6      leading-4">
          <h1 className="text-4xl my-5 font-bold">Jordan</h1>
          <button className="bg-black hover:bg-gray-800   text-white p-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <img className="h-screen" src={nikeBanner} alt="nike" />
      </div>
      <div className="grid gap-2 flex-1    grid-cols-3">
        {nikes.map((sneaker) => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} />;
        })}
      </div>
    </div>
  );
}

export default NikeSection;
