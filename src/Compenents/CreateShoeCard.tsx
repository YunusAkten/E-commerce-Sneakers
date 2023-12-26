import { HeartIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToFavs } from "../redux/appSlice";
function CreateShoeCard({ shoe }: any) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToFavs(shoe));
  };
  return (
    <div className="shoediv m-2">
      <a href={`/sneakers/${shoe.blob}`}>
        <div className="  relative">
          <HeartIcon
            onClick={handleClick}
            className="h-6 w-6 absolute top-0 right-0 m-2 hover:fill-red-600 hover:stroke-red-600 "
          ></HeartIcon>
          <img alt="name" className="shoeImg" src={shoe.img}></img>
          <div className="textDiv">
            <p> {shoe.name}</p>
            <p className="bold">${shoe.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CreateShoeCard;
