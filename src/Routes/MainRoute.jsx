import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import OurStory from "../Pages/OurStory.jsx";
import Shop from "../Pages/shop.jsx";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourStory" element={<OurStory />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default MainRoute;
