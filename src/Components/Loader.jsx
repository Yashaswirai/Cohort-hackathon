import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      duration: 1.5,
      scale: 10,
      opacity: 0,
      transformOrigin: "center center",
      ease: "Expo.easeInOut",
      onUpdate: function () {
        if (this.progress() >= 0.85) {
          document.querySelector(".svg").remove();
          this.kill();
        }
      },
    });
  });
  return (
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group ">
              <text
                x="50%"
                y="50%"
                fontSize="50"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="satoshi"
              >
                ROSIER
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./background.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
    </div>
  );
};

export default Loader;
