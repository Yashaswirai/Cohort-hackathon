import React, { useEffect, Suspense } from "react";
import NavBar from "./Components/NavBar.jsx";
import MainRoute from "./Routes/MainRoute.jsx";
import Loader from "./Components/Loader.jsx";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
  });
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
