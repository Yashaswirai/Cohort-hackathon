import HeroSection from "../Components/HeroSection";
import Best from "../Components/Best";
import Category from "../Components/Category";
import WhyRosier from "../Components/WhyRosier";
import Note from "../Components/Note";

const Home = () => {
  return (
    <div className="w-full bg-black">
      <HeroSection />
      <Best />
      <Category />
      <WhyRosier />
      <Note/>
    </div>
  );
};

export default Home;
