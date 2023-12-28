import { useSelector } from "react-redux";
import Footer from "./Footer";
import SneakerCard from "./SneakerCard";
function Favorites() {
  const favs = useSelector((state: any) => state.app.favs);

  return (
    <div className="   flex  flex-col h-screen ">
      <div
        className=" m-2   
         "
      >
        <h1 className="text-3xl  text-center ">Favorites</h1>
        <div className="grid grid-cols-5">
          {favs ? (
            favs.map((fav: any) => {
              return <SneakerCard key={fav.id} sneaker={fav} />;
            })
          ) : (
            <h1 className="text-2xl">No Favorites</h1>
          )}{" "}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Favorites;
