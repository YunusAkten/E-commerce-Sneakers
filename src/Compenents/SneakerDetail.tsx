import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Shoe } from "../data/shoes";
import shoes from "../data/shoes";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addToCart, addToFavs } from "../redux/appSlice";
function SneakerDetails() {
  const [shoe, setShoe] = React.useState<Shoe>();
  const location = useLocation();
  const blob = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    const shoe = shoes.find((shoe) => {
      return shoe.blob === blob;
    });
    setShoe(shoe);
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <h1>Shoe Details</h1>
      <div className="flex justify-center">
        <img className="w-48 h-48" src={shoe?.img} alt="" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{shoe?.name}</h1>
          <h1 className="text-xl font-bold">${shoe?.price}</h1>
        </div>
        <HeartIcon
          onClick={() => dispatch(addToFavs(shoe))}
          className="h-6 w-6 hover:fill-red-600 hover:stroke-red-600"
        ></HeartIcon>{" "}
        <ShoppingCartIcon
          onClick={() => dispatch(addToCart(shoe))}
          className="h-6 w-6"
        ></ShoppingCartIcon>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default SneakerDetails;
