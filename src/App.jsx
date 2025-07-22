import React, { useEffect, Suspense } from "react";
import NavBar from "./Components/NavBar.jsx";
import MainRoute from "./Routes/MainRoute.jsx";
import Loader from "./Components/Loader.jsx";
const App = () => {
  return (
    <>
      <div className="w-full h-screen font-[satoshi]">
        <Loader />
        <NavBar />
        <MainRoute />
      </div>
    </>
  );
};

export default App;
