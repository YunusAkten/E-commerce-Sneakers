import React from "react";
import { homeImages } from "../data/homeImages";
function Carousel() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const length = homeImages.length;
  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };
  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  return (
    <div className="carousel items-center flex    ">
      <button
        className="left-0 ml-2 bg-white text-xl  absolute text-black p-2"
        onClick={prevImage}
      >
        <> &#60;</>
      </button>
      <img
        className="object-cover h-96 w-full"
        src={homeImages[currentImage].link}
        alt={homeImages[currentImage].id}
      />
      <div className="absolute ml-16">
        <h1
          className="text-white font-bold
         text-3xl text-center  "
        >
          {homeImages[currentImage].title}
        </h1>
        <button className=" absolute m-2  bg-green-500 hover:bg-green-600  rounded p-1">
          Shop Now
        </button>
      </div>
      <button
        className="right-0 mr-2 bg-white  text-xl absolute text-black p-2"
        onClick={nextImage}
      >
        <> &#62;</>
      </button>
    </div>
  );
}

export default Carousel;
