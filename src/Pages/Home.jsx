import HeroSection from "../Components/HeroSection"
import Showcase from "../Components/Showcase"

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroSection/> 
      <div className="h-screen relative z-20"></div> {/* Spacer to allow scrolling */}
      <Showcase/>
    </div>
  )
}

export default Home