import React, { useEffect } from "react";
import BasicNavbar from "./Compenents/BasicNavbar";
import Brands from "./Compenents/Brands";
import Carousel from "./Compenents/Carousel";
function Home() {
  return (
    <div className="flex flex-col  h-screen">
      <BasicNavbar />
      <Carousel />
      <Brands />
    </div>
  );
}

export default Home;
