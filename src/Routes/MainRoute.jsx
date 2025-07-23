import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import OurStory from "../Pages/OurStory.jsx";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ourStory" element={<OurStory />} />
    </Routes>
  );
};

export default MainRoute;
