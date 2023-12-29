import { HeartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addToFavs, removeFromFavs } from "../redux/appSlice";
import { Sneaker } from "../data/sneakers";
import { Link } from "react-router-dom";
interface Props {
  sneaker: Sneaker;
  size?: string;
}
function SneakerCard({ sneaker, size }: Props) {
  const favs = useSelector((state: any) => state.app.favs);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (favs.find((fav) => fav.id === sneaker.id)) {
      dispatch(removeFromFavs(sneaker));
    } else {
      dispatch(addToFavs(sneaker));
    }
  };
  return (
    <Link to={`/sneaker/${sneaker.blob}`}>
      <div className={` sneakerDiv m-2 relative w-100 h-100  `}>
        <HeartIcon
          onClick={handleClick}
          className={`h-6 w-6  text-gray-500 hover:text-red-500 cursor-pointer absolute m-2 top-0 right-0
          ${
            favs.find((fav) => fav.id === sneaker.id) &&
            "fill-red-500 text-red-500"
          }`}
        ></HeartIcon>
        <img className="" alt="name" src={sneaker.img}></img>{" "}
        <div className="textDiv my-4">
          <p> {sneaker.name}</p>
          <p className="bold">${sneaker.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default SneakerCard;
