import styled from "styled-components";
const img = require("./images/homeImg1.jpg");
export const HomeStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-image: url(${img});
  background-position-y: 50%;
  background-position-x: center;

  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  color: white;
`;
