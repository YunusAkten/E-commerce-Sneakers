import React, { useState } from "react";
import SneakerCard from "./SneakerCard";
import shoes from "../data/shoes";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function Sneakers() {
  return (
    <>
      <div className="flex  flex-col   h-screen">
        <Sidebar></Sidebar>
        <div className="grid grid-cols-5 gap-4  m-5 ">
          {shoes.map((shoe) => {
            return <SneakerCard key={shoe.name} shoe={shoe} />;
          })}
        </div>{" "}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Sneakers;
