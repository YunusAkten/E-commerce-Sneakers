import React, { useEffect, useState } from "react";
import shoes from "../data/shoes";
import { Shoe } from "../data/shoes";
import { Link } from "react-router-dom";
function TrendingSneakers() {
  const [sortedShoes, setSortedShoes] = useState<Shoe[]>([]);
  if (sortedShoes.length === 0) {
    const sorted = shoes.sort((a, b) => {
      return b.sales - a.sales;
    });
    setSortedShoes(sorted.slice(0, 5));
  }

  return (
    <div className="m-6">
      <h1 className="  text-2xl  ">Trending Sneakers</h1>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5  ">
        {sortedShoes.map((shoe) => {
          return (
            <Link
              key={shoe.name}
              to={`
            /sneakers/${shoe.blob}
            `}
            >
              <div className="flex  flex-col items-center">
                <img className="w-48 h-48 " src={shoe.img} alt="" />
                <h1 className="text-center text-xl font-bold">{shoe.name}</h1>
                <h1 className="text-center text-xl font-bold">${shoe.price}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TrendingSneakers;
