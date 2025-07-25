import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const imgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "bottom 100%",
        end: "bottom 70%",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
    });
    gsap.from("footer .image p", {
      scrollTrigger: {
        trigger: "footer .image p",
        start: "bottom 100%",
        end: "bottom 70%",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
    });
    gsap.from("footer .Links", {
      scrollTrigger: {
        trigger: "footer .Links",
        start: "bottom 100%",
        end: "bottom 98%",
        scrub: true,
        // markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out",
    });
  },[]);
  return (
    <footer className="w-full bg-black py-10 relative">
      <div className="image relative flex flex-col items-center justify-center gap-4 text-white text-center">
        <img ref={imgRef}
          src="https://cdn.shopify.com/s/files/1/0653/2605/5654/files/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.png?v=1710946898"
          className="w-32 object-cover"
        />
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold font-['Majestic'] tracking-widest">
          “We are reviving the traditional ways of old Bharat”
        </p>
      </div>
      <div className="Links w-full flex justify-around gap-10 text-white text-sm sm:text-base mt-10 border-t border-white/20 pt-5">
        <div className="helpful-link flex flex-col gap-2 sm:gap-4">
          <h3 className="font-semibold text-amber-300 text-xl">
            Helpful Links
          </h3>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/ourStory"
          >
            Our Story
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/products"
          >
            All Products
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/recipes"
          >
            Recipes
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/lab-reports"
          >
            Lab Reports
          </Link>
        </div>
        <div className="policies flex flex-col gap-2 sm:gap-4">
          <h3 className="font-semibold text-amber-300 text-xl">Policies</h3>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/refund-policy"
          >
            Refund Policy
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/shipping-policy"
          >
            Shipping Policy
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/terms-of-service"
          >
            Terms of Service
          </Link>
        </div>
        <div className="Contact flex flex-col gap-2 sm:gap-4">
          <h3 className="font-semibold text-amber-300 text-xl">Contact Us</h3>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/help"
          >
            Help
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="/career"
          >
            Career
          </Link>
        </div>
        <div className="followUS flex flex-col gap-2 sm:gap-4">
          <h3 className="font-semibold text-amber-300 text-xl">Follow Us</h3>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="https://www.facebook.com/rosierfoods/"
          >
            <i className="ri-facebook-circle-fill"></i> Facebook
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="https://www.instagram.com/rosier.foods/"
          >
            <i className="ri-instagram-fill"></i> Instagram
          </Link>
          <Link
            className="hover:text-white text-white/80 font-black transition-colors"
            to="https://www.youtube.com/channel/UCq82cLzzIqllEOsdpb_2lxg"
          >
            <i className="ri-youtube-fill"></i> Youtube
          </Link>
        </div>
      </div>
      <div className="w-full text-center text-white/60 text-xs sm:text-sm mt-2">
        <p>© 2025, All rights reserved by ROSIER FOOD</p>
      </div>
    </footer>
  );
};

export default Footer;
