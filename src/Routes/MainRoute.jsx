import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import OurStory from "../Pages/OurStory.jsx";
import Shop from "../Pages/shop.jsx";
import Community from "../Pages/Community.jsx";
import PageNotFound from "../Pages/PageNotFound.jsx";
import Contact from "../Pages/Contact.jsx";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourStory" element={<OurStory />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/community" element={<Community />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoute;
