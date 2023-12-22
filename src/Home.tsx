import React, { useEffect } from "react";
import BasicNavbar from "./Compenents/BasicNavbar";
import { HomeStyle } from "./HomeStyle";
import { ButtonStyle } from "./Compenents/styles/ButtonStyle";
import shoes from "./data/shoes";
import { useDispatch } from "react-redux";
function Home() {
  return (
    <>
      <BasicNavbar />
      <HomeStyle>
        <div>
          <h1>Jordan Why Not Zer0.3 Se Available</h1>

          <ButtonStyle $backgroundColor="green" $floatRight={true}>
            Shop Now
          </ButtonStyle>
        </div>
      </HomeStyle>
    </>
  );
}

export default Home;
