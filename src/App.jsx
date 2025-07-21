import NavBar from "./Components/NavBar.jsx";
import MainRoute from "./Routes/MainRoute.jsx";
import Loader from "./Components/Loader.jsx";
const App = () => {
  return (
    <div className="w-full h-screen">
      <Loader />
      <NavBar />
      <MainRoute />
    </div>
  );
};

export default App;
