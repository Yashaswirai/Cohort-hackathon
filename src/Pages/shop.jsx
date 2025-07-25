import { TypewriterEffectSmooth } from "../Constants/TypeWritterEffect";
import { CardBody, CardContainer, CardItem } from "../Constants/CardEffect";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useCart } from '../context/CartContext';

const shop = () => {
  const { addToCart } = useCart();
  const words = [
    {
      text: "Choose",
    },
    {
      text: "From",
    },
    {
      text: "Our",
    },
    {
      text: "Collections.",
      className: "text-amber-500 dark:text-amber-500",
    },
  ];
  const Collection = [
    {
      name: "A2 Ghee",
      price: 899,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork60.jpg?v=1749285565",
      link: "/collection/a2-ghee",
      id: "a2-ghee",
    },
    {
      name: "Better Bars",
      price: 299,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/1_Cocoa_Almond.jpg?v=1743769781",
      link: "/collection/better-bars",
      id: "better-bars",
    },
    {
      name: "Khapli Atta",
      price: 469,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/Glycemic_Index_5kg.jpg?v=1743752714",
      link: "/collection/khapli-atta",
      id: "khapli-atta",
    },
    {
      name: "Stone Pressed Oils",
      price: 390,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/3_44d9514b-3756-469e-8e37-dbf6bda694a7.jpg?v=1746730336",
      link: "/collection/stone-pressed-oils",
      id: "stone-pressed-oils",
    },
    {
      name: "Raw Honey",
      price: 499,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344",
      link: "/collection/raw-honey",
      id: "raw-honey",
    },
    {
      name: "Pooja Essentials",
      price: 290,
      image:
        "https://www.rosierfoods.com/cdn/shop/files/BakhoorStand.jpg?v=1743151474",
      link: "/collection/pooja-essentials",
      id: "pooja-essentials",
    },
  ];

  const handleAddToCart = (item, e) => {
    e.preventDefault();
    e.stopPropagation();

    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: "Organic Product",
    };

    addToCart(cartItem, 1);
  };

  return (
    <div className="w-full bg-black text-amber-500 py-15">
      <div className="w-full flex justify-center">
        <TypewriterEffectSmooth
          words={words}
          textClassName={"text-black dark:text-white"}
          cursorClassName={"bg-amber-500 dark:bg-amber-500"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 max-w-6xl mx-auto">
        {Collection.map((item, index) => (
          <Link key={index} to={item.link}>
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item.image}
                    className="w-full h-60 object-cover object-bottom rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                  <div className="w-full text-center">
                    <h3 className="text-2xl font-normal dark:text-amber-500 text-black mb-2">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">
                      ₹{item.price}
                    </p>
                    <button
                      onClick={(e) => handleAddToCart(item, e)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default shop;
