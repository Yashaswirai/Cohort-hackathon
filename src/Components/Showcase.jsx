import Shery from "sheryjs";
const Showcase = () => {
  return (
    <div className="w-full h-screen bg-black relative z-20 flex justify-between">
      <div className="left h-full w-[60%] border-r-2 border-white relative">

      </div>
      <div className="right h-full w-[40%] bg-[url('Nature.jpg'))] bg-cover bg-bottom relative">
        <img src="hero-base.png" alt="" className="absolute bottom-0 left-0 z-10" />
        <img
          src="Jam.png"
          alt=""
          className="w-[60%] object-cover absolute left-[21%] bottom-[13%] z-20"
        />
      </div>
    </div>
  );
};

export default Showcase;

