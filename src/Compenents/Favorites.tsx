import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
function Favorites() {
  const favs = useSelector((state: any) => state.favs);

  return (
    <div className="   flex  flex-col h-screen ">
      <div
        className=" m-2   
         "
      >
        <h1 className="text-3xl text-center ">Favorites</h1>
        {favs ? (
          favs.map((fav: any) => {
            return (
              <div key={fav.id}>
                <img src={fav.img} alt={fav.name} />
                <h1>{fav.name}</h1>
                <h1>{fav.price}</h1>
              </div>
            );
          })
        ) : (
          <h1 className="text-2xl">No Favorites</h1>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Favorites;
