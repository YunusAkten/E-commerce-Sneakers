import { HeartIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToFavs } from "../redux/appSlice";
import { Shoe } from "../data/shoes";
interface Props {
  shoe: Shoe;
  size?: string;
}
function SneakerCard({ shoe, size }: Props) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToFavs(shoe));
  };
  return (
    <a href={`/sneakers/${shoe.blob}`}>
      <div
        className={`${size === "sm" ? "h-48 w-48" : ""} shoediv m-2 relative `}
      >
        <HeartIcon
          onClick={handleClick}
          className="h-6 w-6  text-gray-500 hover:text-red-500 cursor-pointer absolute m-2 top-0 right-0
          "
        ></HeartIcon>
        <img alt="name" src={shoe.img}></img>{" "}
        <div className="textDiv">
          <p> {shoe.name}</p>
          <p className="bold">${shoe.price}</p>
        </div>
      </div>
    </a>
  );
}

export default SneakerCard;
