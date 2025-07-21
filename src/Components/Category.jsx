import MagicBento from "../Constants/MagicBento";

const Category = () => {
  return (
    <div className="w-full py-6 md:py-10 bg-black text-white">
      <div className="header flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-10 px-4">
        <div className="w-1/6 md:w-1/4 h-0.5 md:h-1 bg-amber-300"></div>
        <span className="text-2xl md:text-4xl font-bold text-center tracking-wide whitespace-nowrap">
          Shop By Category
        </span>
        <div className="w-1/6 md:w-1/4 h-0.5 md:h-1 bg-amber-300"></div>
      </div>
      <div className="body w-full px-2 md:px-0 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="184, 138, 31"
        />
      </div>
    </div>
  );
};

export default Category;
