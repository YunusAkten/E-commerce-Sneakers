import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Sneakers from "./Compenents/Sneakers";
import "./index.css";
import SneakerDetails from "./Compenents/SneakerDetail";
import BasicNavbar from "./Compenents/BasicNavbar";
import Favorites from "./Compenents/Favorites";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Footer from "./Compenents/Footer";

const router = createBrowserRouter([
  { element: <BasicNavbar></BasicNavbar> },
  {
    path: "/",
    element: (
      <>
        <BasicNavbar></BasicNavbar>
        <Home />
      </>
    ),
  },
  {
    path: "/sneakers",
    element: (
      <>
        {" "}
        <BasicNavbar></BasicNavbar>
        <Sneakers />{" "}
      </>
    ),
  },
  {
    path: "/sneakers/:id",
    element: (
      <>
        <BasicNavbar></BasicNavbar>
        <SneakerDetails />
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <>
        <BasicNavbar></BasicNavbar>
        <Favorites />{" "}
      </>
    ),
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
