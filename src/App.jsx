import React, { useEffect, useRef, Suspense } from "react";
import NavBar from "./Components/NavBar.jsx";
import MainRoute from "./Routes/MainRoute.jsx";
import Loader from "./Components/Loader.jsx";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize LocomotiveScroll
    if (scrollRef.current) {
      scrollRef.current.destroy();
    }

    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
    });

    // Clean up on route change
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, [location.pathname]);

  return (
    <>
      <CartProvider>
        <div className="w-full h-screen font-[satoshi]" data-scroll-container>
          <Loader />
          <NavBar />
          <MainRoute />
        </div>
      </CartProvider>
    </>
  );
};

export default App;
