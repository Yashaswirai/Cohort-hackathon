import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import OurStory from "../Pages/OurStory.jsx";
import Shop from "../Pages/shop.jsx";
import Community from "../Pages/Community.jsx";
import PageNotFound from "../Pages/PageNotFound.jsx";
import Contact from "../Pages/Contact.jsx";
import LoginRegister from "../Pages/LoginRegister.jsx";
import ProductDetail from "../Pages/ProductDetail.jsx";
import BuildYourOwnBox from "../Pages/BuildYourOwnBox.jsx";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourStory" element={<OurStory />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/community" element={<Community />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="/loginRegister" element={<LoginRegister />} />
      <Route path="/collection/:productId" element={<ProductDetail />} />
      <Route path="/build-your-own-box" element={<BuildYourOwnBox />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoute;
