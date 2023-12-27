import React, { useEffect, useState } from "react";
import { sneakers } from "../data/sneakers";
import { Sneaker } from "../data/sneakers";
import { Link } from "react-router-dom";
import SneakerCard from "./SneakerCard";
function TrendingSneakers() {
  const [sortedSneakers, setSortedSneakers] = useState<Sneaker[]>([]);
  if (sortedSneakers.length === 0) {
    const sorted = sneakers.sort((a, b) => {
      return b.sales - a.sales;
    });
    setSortedSneakers(sorted.slice(0, 5));
  }

  return (
    <div className="m-10">
      <h1 className="  text-2xl  ">Trending Sneakers</h1>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5  ">
        {sortedSneakers.map((sneaker) => {
          return <SneakerCard key={sneaker.id} sneaker={sneaker} size="sm" />;
        })}
      </div>
    </div>
  );
}

export default TrendingSneakers;
