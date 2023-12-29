import React from "react";
import { brands } from "../data/brands";
import { Brand } from "../data/brands";
function Brands() {
  return (
    <>
      <h1 className="m-2 mt-10  text-2xl text-center"> Brands</h1>
      <div className="grid grid-cols-8 justify-center  md:flex">
        {brands.map((brand: Brand) => {
          return (
            <a key={brand.id} href={`/sneakers/${brand.name}`}>
              <img className="w-16 m-6" src={brand.link} alt={brand.id} />
            </a>
          );
        })}
      </div>{" "}
    </>
  );
}

export default Brands;
