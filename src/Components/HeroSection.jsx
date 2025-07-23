import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import gsap from "gsap";

const HeroSection = () => {
  const paraRef = useRef(null);

  useGSAP(() => {
    const hero = document.querySelector(".hero");
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
      imgs,
      {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power2.out",
      },
      "-=0.5"
    );
    gsap.from(".tagLine h4", {
      duration: 1.2,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      stagger: 0.2,
    });
    gsap.from(paraRef.current, {
      delay: 1.5,
      duration: 0.8,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
    gsap.from(".tagline-span", {
      delay: 2,
      duration: 0.6,
      opacity: 0,
      y: 20,
      ease: "back.out(1.7)",
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="hero w-full h-screen relative bg-[url('/background.png')] bg-cover bg-center overflow-hidden">
      {/* 3D Background */}
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />
        }
      >
        <Spline
          scene="https://prod.spline.design/gmcYUMETn8KodfFJ/scene.splinecode"
          className="absolute w-full h-full z-0"
        />
      </Suspense>

      {/* Content Container */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex flex-col lg:flex-row">
        {/* Product Images Section */}
        <div className="imgs w-full lg:w-1/2 h-1/2 lg:h-full relative order-2 lg:order-1">
          <img
            src="/hero-base.png"
            alt=""
            className="absolute left-0 bottom-0 w-full h-full object-cover z-10"
          />
          <img
            src="/combine-product.png"
            alt=""
            className="absolute product left-[10%] sm:left-[15%] bottom-[8%] sm:bottom-[12%] w-[80%] object-cover z-20"
          />
        </div>

        {/* Text Content Section */}
        <div className="tagLine w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12 flex-col gap-4 sm:gap-6 lg:gap-8 order-1 lg:order-2">
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-['Majestic'] leading-tight lg:leading-[1.2] tracking-wide px-2">
            When people choose love and purity, they choose Rosier.
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p
              ref={paraRef}
              className="text-lg sm:text-xl lg:text-2xl font-bold bg-[#D7A72F] text-[#743506] px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-center"
            >
              <span className="tagline-span">Slow,</span>{" "}
              <span className="tagline-span">Pure,</span>{" "}
              <span className="tagline-span">Remembered.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 lg:h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
