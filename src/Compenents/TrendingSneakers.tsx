import { useEffect, useState } from "react";
import { Sneaker } from "../data/sneakers";
import { useSelector } from "react-redux";
import SneakerCard from "./SneakerCard";
function TrendingSneakers() {
  const sneakers = useSelector((state: any) => state.app.sneakers);
  const [sortedSneakers, setSortedSneakers] = useState<Sneaker[]>([]);
  useEffect(() => {
    if (sortedSneakers.length === 0) {
      const sorted = [...sneakers].sort((a, b) => {
        return b.sales - a.sales;
      });
      setSortedSneakers(sorted.slice(0, 5));
    }
  }, [sneakers]);
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
