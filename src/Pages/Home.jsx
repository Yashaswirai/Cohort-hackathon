import HeroSection from "../Components/HeroSection";
import Best from "../Components/Best";
import Category from "../Components/Category";
import WhyRosier from "../Components/WhyRosier";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Best />
      <Category />
      <WhyRosier />
    </div>
  );
};

export default Home;
