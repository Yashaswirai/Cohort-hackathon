import React from 'react';
import { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
return (
    <div className="w-full h-screen fixed top-0 left-0 z-10">
        <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/gmcYUMETn8KodfFJ/scene.splinecode" />
        </Suspense>
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex justify-between">
            <div className="imgs w-1/2 h-full relative">
                    <img src="/hero-base.png" alt=""  className="absolute left-0 bottom-0 w-full h-full object-cover z-10"/>
                    <img src="/Ghee.png" alt="" className="absolute left-[25%] bottom-[16%] w-1/2 h-1/2 object-cover z-20"/>
            </div>
            <div className="tagLing w-1/2 h-full flex items-center justify-center p-6 flex-col gap-8">
                    <h4 className="text-6xl text-center text-white font-['Majestic'] leading-22 tracking-wide">When people choose love and purity, they choose Rosier.</h4>
                    <p className="text-2xl font-bold bg-[#D7A72F] text-[#743506] p-4 rounded-full">Slow, Pure, Remembered.</p>
            </div>
        </div>
    </div>
);
};

export default HeroSection;
