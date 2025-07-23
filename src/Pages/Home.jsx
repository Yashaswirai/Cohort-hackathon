import HeroSection from "../Components/HeroSection";
import Best from "../Components/Best";
import Category from "../Components/Category";
import WhyRosier from "../Components/WhyRosier";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <HeroSection />
      <Best />
      <Category />
      <WhyRosier />
      <Footer />
    </div>
  );
};

export default Home;
