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
    <div className="w-full h-screen bg-black pt-25 relative">
      <div className="header w-full flex justify-between px-20">
        <h1 className="text-white text-4xl font-bold">Best Sellers</h1>
        <Link
          to="/best-sellers"
          className="text-white bg-[#D7A72F] px-6 py-2 rounded-full text-lg font-semibold"
        >
          View All
        </Link>
      </div>
      <div
        className="swiper-container w-full mt-20 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 800,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {allItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item text-white p-4 rounded-lg shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-50 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-500">Available: {item.quantity}</p>
                <div className="btns flex justify-between mt-4">
                  <Link className="block w-fit bg-[#D7A72F] text-[#743506] px-4 py-2 rounded-full font-semibold hover:bg-[#b88a1f] transition-colors">
                    Add to Cart
                  </Link>
                  <Link className="block w-fit bg-[#D7A72F] text-[#743506] px-4 py-2 rounded-full font-semibold hover:bg-[#b88a1f] transition-colors">
                    View Details
                  </Link>
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
