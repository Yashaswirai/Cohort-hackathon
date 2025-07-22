import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useRef } from "react";

const Best = () => {
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const allItems = [
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork61.jpg?v=1749285565",
      title: "Wireless Headphones",
      price: 99.99,
      quantity: 15,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/Website_2kg.jpg?v=1750338216",
      title: "Smart Watch",
      price: 149.99,
      quantity: 8,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/newoldhoneypostforlisting.jpg?v=1743060337",
      title: "Smart Watch",
      price: 149.99,
      quantity: 8,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/2_d81dc980-086e-4dba-a716-52444f13ae45.jpg?v=1746730339",
      title: "Bluetooth Speaker",
      price: 59.99,
      quantity: 20,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork61.jpg?v=1749285565",
      title: "Wireless Headphones",
      price: 99.99,
      quantity: 15,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/Website_2kg.jpg?v=1750338216",
      title: "Smart Watch",
      price: 149.99,
      quantity: 8,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/newoldhoneypostforlisting.jpg?v=1743060337",
      title: "Smart Watch",
      price: 149.99,
      quantity: 8,
    },
    {
      img: "https://www.rosierfoods.com/cdn/shop/files/2_d81dc980-086e-4dba-a716-52444f13ae45.jpg?v=1746730339",
      title: "Bluetooth Speaker",
      price: 59.99,
      quantity: 20,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black pt-16 sm:pt-20 lg:pt-25 relative px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="header w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-20 max-w-7xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Best Sellers
        </h1>
        <Link
          to="/best-sellers"
          className="text-white bg-[#D7A72F] hover:bg-[#b8921f] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-200 whitespace-nowrap"
        >
          View All
        </Link>
      </div>

      {/* Carousel Container */}
      <div
        className="swiper-container w-full relative max-w-full mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Overlays - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-1/8 lg:w-1/8 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 right-0 w-1/8 lg:w-1/8 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 800,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
              centeredSlides: false,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
            1536: {
              slidesPerView: 4.5,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pb-12"
        >
          {allItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item text-white bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-yellow-500 p-4 sm:p-6 rounded-2xl shadow-lg">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-semibold h-12 sm:h-14 overflow-hidden">
                    {item.title}
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="text-yellow-500 font-bold text-lg sm:text-xl">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Stock: {item.quantity}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                    <button
                      className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-yellow-100 px-3 sm:px-4 py-2 rounded-full font-semibold text-center text-sm sm:text-base transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to="/shop"
                      className="flex-1 border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 px-3 sm:px-4 py-2 rounded-full font-semibold text-center text-sm sm:text-base transition-all duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Best;