import { useGSAP } from "@gsap/react";
import React from "react";
import { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import gsap from "gsap";
const HeroSection = () => {
  useGSAP(() => {
    const hero = document.querySelector(".hero");
    const tagLine = document.querySelector(".tagLine");
    const imgs = document.querySelector(".imgs");
    hero.addEventListener(
      "mousemove",
      (e) => {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 5;
        gsap.to(".product", {
          x: `${xMove * 0.5}%`,
        });
      },
      []
    );
    const tl = gsap.timeline();
    tl.from(
      tagLine,
      {
        delay: 1.5,
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
      },
      "-=0.5"
    ).from(
      imgs,
      {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power2.out",
      },
      "-=0.5"
    );
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-6" className="hero w-full h-screen relative bg-[url('/background.png')] bg-cover bg-center overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/gmcYUMETn8KodfFJ/scene.splinecode"
          className="absolute w-full h-full z-0"
        />
      </Suspense>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex justify-between">
        <div className="imgs w-1/2 h-full relative">
          <img
            src="/hero-base.png"
            alt=""
            className="absolute left-0 bottom-0 w-full h-full object-cover z-10"
          />
          <img
            src="/combine-product.png"
            alt=""
            className="absolute product left-[15%] bottom-[12%] w-[80%] object-cover z-20"
          />
        </div>
        <div className="tagLine w-1/2 h-full flex items-center justify-center p-6 flex-col gap-8">
          <h4 className="text-6xl text-center text-white font-['Majestic'] leading-22 tracking-wide">
            When people choose love and purity, they choose Rosier.
          </h4>
          <p className="text-2xl font-bold bg-[#D7A72F] text-[#743506] p-4 rounded-full">
            Slow, Pure, Remembered.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full py-25 px-10 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;
