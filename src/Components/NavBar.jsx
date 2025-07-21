import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { use } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  useGSAP(() => {
    let nav = document.querySelector("nav");
    document.addEventListener("wheel", function (e) {
      if (e.wheelDelta >= 0) {
        gsap.to(nav, {
          y: "0",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(nav, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  });
  return (
    <nav className="w-full px-8 py-3 fixed top-0 left-0 flex justify-between items-center z-50 bg-transparent">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://www.rosierfoods.com/cdn/shop/files/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.png?v=1743060161&width=135"
          alt=""
          className="w-20 object-cover"
        />
      </Link>
      <div className="flex items-center gap-8">
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white hover:bg-white hover:text-black"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white hover:bg-white hover:text-black"
            }`
          }
          to="/ourStory"
        >
          Our Story
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white hover:bg-white hover:text-black"
            }`
          }
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white hover:bg-white hover:text-black"
            }`
          }
          to="/comunity"
        >
          Community
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white hover:bg-white hover:text-black"
            }`
          }
          to="/contactUs"
        >
          Contact us
        </NavLink>
      </div>
      <div className="icons flex gap-4 items-center">
        <Link to={"/loginRegister"}>
          <i className="ri-user-3-fill text-white text-2xl hover:text-gray-300 transition-colors duration-200"></i>
        </Link>
        <Link to={"/cart"}>
          <i className="ri-handbag-fill text-white text-2xl hover:text-gray-300 transition-colors duration-200"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
