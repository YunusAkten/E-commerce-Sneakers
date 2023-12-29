import React, { useState } from "react";
import SneakerCard from "./SneakerCard";
import Filter from "./Filter";
import Footer from "./Footer";
import { useSelector } from "react-redux";
interface SneakersProps {
  sale?: boolean;
  latest?: boolean;
}
function Sneakers({ sale, latest }: SneakersProps) {
  const sneakers = useSelector((state: any) => state.filter.sneakers);
  const filteredSneakers = useSelector(
    (state: any) => state.filter.filteredSneakers
  );
  const activeFilters = useSelector((state: any) => state.filter.activeFilters);
  const priceFilter = useSelector((state: any) => state.filter.priceFilter);
  const renderSneakers = () => {
    let renderSneakers: JSX.Element[] = [];
    if (activeFilters.length > 0 || priceFilter) {
      renderSneakers = filteredSneakers.map((sneaker) => {
        return <SneakerCard key={sneaker.name} sneaker={sneaker} />;
      });
    } else {
      renderSneakers = sneakers.map((sneaker) => {
        return <SneakerCard key={sneaker.name} sneaker={sneaker} />;
      });
    }
    return renderSneakers;
  };
  return (
    <div className="flex  flex-col   h-screen ">
      <div className=" flex flex-col my-16 md:flex-row   ">
        <Filter></Filter>
        <div className="grid grid-cols-2 gap-4  gap-16 m-5 md:grid-cols-3 lg:grid-cols-5 ">
          {renderSneakers()}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Sneakers;
