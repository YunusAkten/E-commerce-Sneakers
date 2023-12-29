import React from "react";
import Footer from "./Footer";

function PageNotFound() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col  items-center justify-center h-screen">
        <h1 className="text-4xl text-gray-800 font-bold">404</h1>
        <h1 className="text-2xl text-gray-800 font-bold">Page Not Found</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PageNotFound;
