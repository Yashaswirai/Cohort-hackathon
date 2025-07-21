import HeroSection from "../Components/HeroSection"
import Best from "../Components/Best"
import Category from "../Components/Category"

const Home = () => {
  return (
    <div className='w-full'>
      <HeroSection/>
      <Best/>
      <Category/>
    </div>
  )
}

export default Home