import { useSelector } from "react-redux";
import Footer from "./Footer";
import SneakerCard from "./SneakerCard";
import { Link } from "react-router-dom";
function Favorites() {
  const favs = useSelector((state: any) => state.app.favs);

  return (
    <div className="   flex  flex-col h-screen ">
      <div className="   flex   flex-col w-screen m-4   justify-center bg-cover bg-center bg-no-repeat">
        <h1 className="text-3xl    ">Favorites</h1>
        {favs.length > 0 && (
          <div className="flex flex-row m-16 gap-16 flex-wrap md:gap-8  ">
            {favs.map((sneaker: any) => {
              return <SneakerCard key={sneaker.name} sneaker={sneaker} />;
            })}
          </div>
        )}
        {favs.length === 0 && (
          <div className="m-4  ">
            <h1 className="text-2xl my-4  ">No favorites yet</h1>
            <Link
              className="w-36 ml-8 bg-green-700 hover:bg-green-800 text-white p-2 rounded   "
              to="/sneakers"
            >
              Check Sneakers
            </Link>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Favorites;
