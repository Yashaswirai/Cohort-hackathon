import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/ourStory", label: "Our Story" },
    { to: "/shop", label: "Shop" },
    { to: "/comunity", label: "Community" },
    { to: "/contactUs", label: "Contact us" },
  ];

  return (
    <>
      <nav className="w-full px-4 sm:px-6 lg:px-8 py-3 fixed top-0 left-0 flex justify-between items-center z-50 ">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://www.rosierfoods.com/cdn/shop/files/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.png?v=1743060161&width=135"
            alt="Rosier Foods"
            className="w-16 sm:w-20 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded transition-all duration-200 text-sm xl:text-base whitespace-nowrap ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:bg-white hover:text-black"
                }`
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to={"/loginRegister"} className="p-1">
            <i className="ri-user-3-fill text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors duration-200"></i>
          </Link>
          <Link to={"/cart"} className="p-1">
            <i className="ri-handbag-fill text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors duration-200"></i>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <i
              className={`text-xl sm:text-2xl ${
                isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"
              }`}
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:bg-white/10"
                }`
              }
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
