import { useEffect, useState } from "react";

const WhyRosier = () => {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    window.onmousemove = (e) =>{
      const x = e.clientX - window.innerWidth/2;
      const y = e.clientY - window.innerHeight/2;
      setRotate((Math.atan2(y, x) * (180 / Math.PI))-180);
    }
   }, [rotate]);
  return (
    <div className="w-full h-screen bg-black pt-20">
      <h1 className="text-white text-4xl font-bold text-center">
        Why Choose Rosier?
      </h1>
      <p className="text-white mt-4 text-center">
        Discover the benefits of our products and services.
      </p>
      <div className="w-full mt-10 flex justify-center relative">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/67428560dc96418aaad8f7991182d9f8.mov"
          autoPlay
          loop
          muted
          className="w-full h-auto"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="left absolute top-0 left-0 w-1/2 h-full flex flex-col justify-around gap-4">
            <div className="quality flex flex-col items-center text-white text-lg">
              <img className="w-24 h-24"
                src="https://www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=150"
                alt=""
              />
              <h4 className="tracking-wide">100% Clean</h4>
            </div>
            <div className="quality flex flex-col items-center text-white text-lg">
              <img className="w-24 h-24"
                src="https://www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=150"
                alt=""
              />
              <h4 className="tracking-wide">Farm Fresh</h4>
            </div>
          </div>
          <div className="right absolute top-0 right-0 w-1/2 h-full flex flex-col justify-around gap-4">
            <div className="quality flex flex-col items-center text-white text-lg">
              <img className="w-24 h-24"
                src="https://www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=150http://rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=150"
                alt=""
              />
              <h4 className="tracking-wide">Made in Small Batches</h4>
            </div>
            <div className="quality flex flex-col items-center text-white text-lg">
              <img className="w-24 h-24"
                src="https://www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=150"
                alt=""
              />
              <h4 className="tracking-wide">Rooted in Traditions</h4>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 p-6 rounded-lg flex items-center justify-around w-1/4 h-1/4">
          <div className="lefteye w-32 h-32 rounded-full bg-white/20 relative flex items-center justify-center" >
            <div className={`bar w-full`} style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="w-8 h-8 rounded-full bg-black"></div>
            </div>
          </div>
          <div className="righteye w-32 h-32 rounded-full bg-white/20 relative flex items-center justify-center">
            <div className={`bar w-full`} style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="w-8 h-8 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRosier;
