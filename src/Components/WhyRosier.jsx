import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyRosier = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      const angle = Math.atan2(y, x) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const h1ref = useRef(null);
  const pRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const imgs = document.querySelectorAll(".quality img");
    const vdo = document.querySelector("video");

    imgs.forEach((img) => {
      const tl = gsap.timeline();
      tl.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          end: "bottom 78%",
          scrub: true,
        },
        opacity: 0,
        ease: "power2.out",
      });
      tl.fromTo(
        img,
        { scale: 0.5 },
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          repeat: -1,
          yoyo: true,
        }
      );
    });

    gsap.from(h1ref.current, {
      scrollTrigger: {
        trigger: h1ref.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(pRef.current, {
      scrollTrigger: {
        trigger: pRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(vdo, {
      scrollTrigger: {
        trigger: vdo,
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
      },
      opacity: 0,
      scale: 0.4,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <div className="w-full bg-black pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
        <h1
          ref={h1ref}
          className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          Why Choose Rosier?
        </h1>
        <p
          ref={pRef}
          className="text-white/80 mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
        >
          Discover the benefits of our products and services.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center relative max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/67428560dc96418aaad8f7991182d9f8.mov"
          autoPlay
          loop
          muted
          className="w-full h-auto min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] object-cover"
        />

        {/* Mobile/Tablet Layout */}
        <div className="absolute inset-0 bg-black/30 lg:hidden">
          <div className="h-full flex flex-col justify-center px-4 sm:px-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-md mx-auto">
              <div className="quality flex flex-col items-center text-white text-sm sm:text-base lg:text-lg space-y-2 sm:space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full p-3 sm:p-4 backdrop-blur-sm">
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=150"
                    alt="100% Clean"
                  />
                </div>
                <h4 className="tracking-wide text-center font-semibold">
                  100% Clean
                </h4>
              </div>

              <div className="quality flex flex-col items-center text-white text-sm sm:text-base lg:text-lg space-y-2 sm:space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full p-3 sm:p-4 backdrop-blur-sm">
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=150"
                    alt="Farm Fresh"
                  />
                </div>
                <h4 className="tracking-wide text-center font-semibold">
                  Farm Fresh
                </h4>
              </div>

              <div className="quality flex flex-col items-center text-white text-sm sm:text-base lg:text-lg space-y-2 sm:space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full p-3 sm:p-4 backdrop-blur-sm">
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=150"
                    alt="Small Batches"
                  />
                </div>
                <h4 className="tracking-wide text-center font-semibold">
                  Made in Small Batches
                </h4>
              </div>

              <div className="quality flex flex-col items-center text-white text-sm sm:text-base lg:text-lg space-y-2 sm:space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full p-3 sm:p-4 backdrop-blur-sm">
                  <img
                    className="w-full h-full object-contain"
                    src="https://www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=150"
                    alt="Rooted in Traditions"
                  />
                </div>
                <h4 className="tracking-wide text-center font-semibold">
                  Rooted in Traditions
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="absolute inset-0 bg-black/20 hidden lg:flex items-center justify-center">
          {/* Left Side */}
          <div className="left absolute top-0 left-0 w-1/2 h-full flex flex-col justify-around px-8 xl:px-16">
            <div className="quality flex flex-col items-center text-white text-lg xl:text-xl space-y-4">
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full p-4 backdrop-blur-sm">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=150"
                  alt="100% Clean"
                />
              </div>
              <h4 className="tracking-wide font-semibold">100% Clean</h4>
            </div>

            <div className="quality flex flex-col items-center text-white text-lg xl:text-xl space-y-4">
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full p-4 backdrop-blur-sm">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=150"
                  alt="Farm Fresh"
                />
              </div>
              <h4 className="tracking-wide font-semibold">Farm Fresh</h4>
            </div>
          </div>

          {/* Right Side */}
          <div className="right absolute top-0 right-0 w-1/2 h-full flex flex-col justify-around px-8 xl:px-16">
            <div className="quality flex flex-col items-center text-white text-lg xl:text-xl space-y-4">
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full p-4 backdrop-blur-sm">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=150"
                  alt="Small Batches"
                />
              </div>
              <h4 className="tracking-wide font-semibold">Made in Small Batches</h4>
            </div>

            <div className="quality flex flex-col items-center text-white text-lg xl:text-xl space-y-4">
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full p-4 backdrop-blur-sm">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=150"
                  alt="Rooted in Traditions"
                />
              </div>
              <h4 className="tracking-wide font-semibold">Rooted in Traditions</h4>
            </div>
          </div>

          {/* Interactive Eyes - Desktop Only */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 p-6 xl:p-8 rounded-2xl flex items-center justify-center gap-6 xl:gap-8 backdrop-blur-md">
            <div className="lefteye w-24 h-24 xl:w-32 xl:h-32 rounded-full bg-white/30 relative flex items-center justify-center backdrop-blur-sm">
              <div
                className="bar w-full h-full flex items-center justify-center absolute"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-black transform translate-x-3 xl:translate-x-4"></div>
              </div>
            </div>
            <div className="righteye w-24 h-24 xl:w-32 xl:h-32 rounded-full bg-white/30 relative flex items-center justify-center backdrop-blur-sm">
              <div
                className="bar w-full h-full flex items-center justify-center absolute"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-black transform translate-x-3 xl:translate-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRosier;
