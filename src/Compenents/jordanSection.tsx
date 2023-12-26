import { useState, useEffect } from "react";
import jordanBanner from "../images/homeImages/jordanBanner.jpg";
import { Shoe } from "../data/shoes";
import shoes from "../data/shoes";
import { Link } from "react-router-dom";
function JordanSection() {
  const [jordans, setJordans] = useState<Shoe[]>([]);
  useEffect(() => {
    const jordans = shoes.filter((shoe) => {
      return shoe.brand === "jordan";
    });
    setJordans(jordans);
  }, []);
  return (
    <div className="flex flex-row gap-2 m-6">
      <div className="flex-2  relative">
        <div className="absolute     py-2.5 bottom-0 right-0 m-6      leading-4">
          <h1 className="text-4xl my-5 font-bold">Jordan</h1>
          <button className="bg-black hover:bg-gray-800   text-white p-2 rounded-lg">
            Shop Now
          </button>
        </div>

        <img className="h-screen" src={jordanBanner} alt="nike" />
      </div>
      <div className="grid gap-2 flex-1    grid-cols-3">
        {jordans.map((shoe) => {
          return (
            <Link key={shoe.name} to={`/sneakers${shoe.blob}`}>
              <img className=" " src={shoe.img} alt={shoe.name} />
              <h1 className="text-center text-xl font-bold">{shoe.name}</h1>
              <h1 className="text-center text-xl font-bold">${shoe.price}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default JordanSection;
