import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Sneaker } from "../data/sneakers";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToFavs, removeFromFavs } from "../redux/appSlice";
import SneakerCard from "./SneakerCard";
function SneakerDetails() {
  const sneakers: Sneaker[] = useSelector((state: any) => state.app.sneakers);
  const [sneaker, setSneaker] = useState<Sneaker>();
  const [activeSize, setActiveSize] = useState<string>();
  const [relatedProducts, setRelatedProducts] = useState<Sneaker[]>();
  const [showSizeAlert, setShowSizeAlert] = useState<boolean>(false);
  const checkFav = useSelector((state: any) =>
    state.app.favs.find((fav: any) => fav.id === sneaker?.id)
  );
  const sizes = ["36", "38", "40", "41", "42", "43", "44", "45"];
  const location = useLocation();
  const blob = location.pathname.split("/")[2];

  const handleAddToCart = () => {
    if (!activeSize) {
      setShowSizeAlert(true);
      return;
    }
    dispatch(addToCart({ ...sneaker, size: activeSize }));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const sneaker = sneakers.find((sneaker) => {
      return sneaker.blob === blob;
    });
    setSneaker(sneaker);
    if (sneaker) {
      const relatedProducts = sneakers.filter((relatedSneaker) => {
        return (
          sneaker.id !== relatedSneaker.id &&
          sneaker.brand === relatedSneaker.brand
        );
      });
      // if there are more than 5 related products, we only want to show 5
      if (relatedProducts.length >= 5) {
        setRelatedProducts(relatedProducts.slice(0, 5));
        console.log(relatedProducts);
      }
      // if there are less than 5 related products, we want to show the related products and the top selling products
      else {
        const topSneakers = [...sneakers].sort((a, b) => {
          return b.sales - a.sales;
        });
        const neededProducts = 5 - relatedProducts.length;
        const restOfProducts = topSneakers.slice(0, neededProducts);
        setRelatedProducts([...relatedProducts, ...restOfProducts]);
      }
    }
  }, []);

  return (
    <div className="flex flex-col  h-screen  ">
      <div className=" p-5  grid  justify-center  lg:grid-cols-2   ">
        <img className="" src={sneaker?.img} alt={sneaker?.name} />
        <div className="flex flex-col m-6    ">
          <Link
            className="capitalize text-gray-600"
            to={`/sneakers/${sneaker && sneaker.brand}`}
          >
            {sneaker?.brand}
          </Link>
          <h1 className="text-3xl font-bold">{sneaker?.name}</h1>
          <h1 className="text-xl font-bold">${sneaker?.price}</h1>
          <div className="grid grid-cols-3  sizesDiv  w-3/4   sm:grid-cols-4 lg:grid-cols-6">
            {sizes.map((size) => {
              return (
                <p
                  key={size}
                  onClick={
                    sneaker && sneaker.size.includes(size)
                      ? () => setActiveSize(size)
                      : () => {}
                  }
                  className={` border text-center  border-black p-2 mr-2 my-2 w-16 rounded ${
                    sneaker && sneaker.size.includes(size)
                      ? "cursor-pointer  "
                      : " cursor-not-allowed text-gray-500"
                  }
                  ${activeSize === size && "bg-black text-white"}`}
                >
                  {size}
                </p>
              );
            })}
          </div>
          <p
            className={`mx-2 text-red-600   ${
              showSizeAlert ? "block" : "hidden"
            } ${activeSize && "hidden"}`}
          >
            You must pick a size!
          </p>
          <div className="flex buttonDiv flex-col items-start md:flex-row  ">
            <button
              className="flex flex-row  px-4 relative p-2 rounded-lg my-2 mx-0 text-white w-48   bg-gray-600 hover:bg-gray-700 "
              onClick={handleAddToCart}
            >
              <span> Add To Cart</span>
              <ShoppingCartIcon className="h-6 w-6 absolute  right-5"></ShoppingCartIcon>
            </button>
            <button
              className={`flex flex-row p-2 px-4 rounded-lg my-2 mx-0 
              text-white  relative bg-gray-600 hover:bg-gray-700 md:mx-2  ${
                checkFav ? "w-60" : "w-48"
              }`}
              onClick={
                checkFav
                  ? () => dispatch(removeFromFavs(sneaker))
                  : () => dispatch(addToFavs(sneaker))
              }
            >
              <span>
                {checkFav ? "Remove from  Favorite" : "Add to Favorite"}
              </span>
              <HeartIcon
                className={`h-6 w-6 absolute right-5 ${
                  checkFav && "fill-red-600 stroke-red-600"
                }  hover:fill-red-600 hover:stroke-red-600`}
              ></HeartIcon>
            </button>
          </div>

          <div className="flex badgesDiv my-2  flex-col ">
            <div className="flex flex-row m-2">
              <div className="flex ">
                Safe Payment
                <ShieldCheckIcon className="h-6 w-6 mx-2"></ShieldCheckIcon>
              </div>
              <div className="flex mx-2 ">
                Free Shipping
                <TruckIcon className="h-6 w-6 mx-2"></TruckIcon>
              </div>
            </div>
          </div>
          <div className="flex descDiv flex-col my-2">
            <h1 className="text-2xl font-bold">Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              facere, quos dicta optio a nemo aliquid officia magnam quaerat,
              provident quas neque nisi eveniet porro aliquam enim voluptatem
              est laboriosam vitae impedit quis excepturi iste minima facilis.
              <br></br>
              <br></br>
              Est perspiciatis tenetur libero minima consequatur sint reiciendis
              quam dolorum ad totam accusantium dicta unde, cumque veritatis
              vero eos delectus asperiores laboriosam expedita excepturi?
              Asperiores maiores neque distinctio qui dolorum porro, quo aliquid
              sequi necessitatibus perferendis corrupti autem praesentium alias
              quam temporibus beatae aut tempora sint illo impedit quisquam ea
              soluta minus id? Laborum similique quasi libero sint et error,
              ipsa repellat aspernatur.
            </p>
          </div>
        </div>
      </div>
      <div className=" relatedProductsDiv flex flex-col  m-16">
        <h1 className="text-2xl">Related Products</h1>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {relatedProducts?.map((sneaker) => {
            return (
              <SneakerCard
                key={sneaker.id}
                sneaker={sneaker}
                size="sm"
              ></SneakerCard>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SneakerDetails;
