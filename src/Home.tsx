import React, { useEffect } from "react";
import Brands from "./Compenents/Brands";
import Carousel from "./Compenents/Carousel";
import TrendingSneakers from "./Compenents/TrendingSneakers";
import Footer from "./Compenents/Footer";
import NikeSection from "./Compenents/NikeSection";
import JordanSection from "./Compenents/jordanSection";
function Home() {
  return (
    <div className="flex flex-col   h-screen">
      <Carousel />
      <Brands /> <NikeSection />
      <TrendingSneakers />
      <JordanSection />
      <Footer />
    </div>
  );
}

export default Home;
