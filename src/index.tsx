import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Home from "./Home";
import Sneakers from "./Compenents/Sneakers";
import SneakerDetails from "./Compenents/SneakerDetail";
import BasicNavbar from "./Compenents/BasicNavbar";
import Favorites from "./Compenents/Favorites";
import Cart from "./Compenents/Cart";
import { store } from "./redux/store.js";
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
        <BasicNavbar></BasicNavbar>
        <Sneakers />
      </>
    ),
  },
  {
    path: "/sneakers/sale",
    element: (
      <>
        <BasicNavbar></BasicNavbar>
        <Sneakers sale={true} />
      </>
    ),
  },
  {
    path: "/sneakers/latest",
    element: (
      <>
        <BasicNavbar></BasicNavbar>
        <Sneakers latest={true} />
      </>
    ),
  },
  {
    path: "/:id",
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
        <Favorites />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <BasicNavbar></BasicNavbar>
        <Cart></Cart>
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
