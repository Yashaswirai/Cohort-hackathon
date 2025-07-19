import NavBar from "./Components/NavBar.jsx";
import MainRoute from "./Routes/MainRoute.jsx";

const App = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[url('background.png')] bg-cover bg-center overflow-x-auto">
      <NavBar />
      <MainRoute />
    </div>
  );
};

export default App;
