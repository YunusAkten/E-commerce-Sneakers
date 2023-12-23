import React, { useState } from "react";
import CreateShoeCard from "./CreateShoeCard";
import shoes from "../data/shoes";
import BasicNavbar from "./BasicNavbar";
import Sidebar from "./Sidebar";
function Shop() {
  return (
    <>
      <BasicNavbar></BasicNavbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="grid grid-cols-5 gap-4  m-5 ">
          {shoes.map((shoe) => {
            return (
              <CreateShoeCard
                img={shoe.img}
                name={shoe.name}
                price={shoe.price}
              />
            );
          })}
        </div>{" "}
      </div>
    </>
  );
}

export default Shop;
