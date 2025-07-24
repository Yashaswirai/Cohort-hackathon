import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Footer from '../Components/Footer';

const BuildYourOwnBox = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [boxSize, setBoxSize] = useState('medium');
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const titleRef = useRef(null);
  const boxRef = useRef(null);
  const productsRef = useRef(null);
  const summaryRef = useRef(null);
const selectedItemsRef = useRef([]);

useGSAP(() => {
    gsap.utils.toArray('.product-card').forEach((card) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                ease: "power2.out", 
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: true,
                    toggleActions: "play none none none"
                }
            }
        );
    });
}, []);

  const availableProducts = [
    {
      id: 'a2-ghee',
      name: 'Premium A2 Ghee',
      price: 899,
      image: 'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork60.jpg?v=1749285565',
      category: 'Dairy',
      size: 'medium'
    },
    {
      id: 'khapli-atta',
      name: 'Khapli Atta',
      price: 469,
      image: 'https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042',
      category: 'Grains',
      size: 'large'
    },
    {
      id: 'mustard-oil',
      name: 'Stone Pressed Mustard Oil',
      price: 390,
      image: 'https://www.rosierfoods.com/cdn/shop/files/2_d81dc980-086e-4dba-a716-52444f13ae45.jpg?v=1746730339',
      category: 'Oils',
      size: 'small'
    },
    {
      id: 'honey',
      name: 'Wild Forest Honey',
      price: 499,
      image: 'https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344',
      category: 'Natural Sweeteners',
      size: 'medium'
    },
    {
      id: 'better-bars',
      name: 'Better Bars (Pack of 6)',
      price: 299,
      image: 'https://www.rosierfoods.com/cdn/shop/files/1_Cocoa_Almond.jpg?v=1743769781',
      category: 'Snacks',
      size: 'small'
    },
    {
      id: 'coconut-oil',
      name: 'Organic Coconut Oil',
      price: 350,
      image: 'https://www.rosierfoods.com/cdn/shop/files/3_44d9514b-3756-469e-8e37-dbf6bda694a7.jpg?v=1746730336',
      category: 'Oils',
      size: 'medium'
    },
    {
      id: 'almond-butter-crunchy',
      name: 'Almond Butter Crunchy',
      price: 565,
      image: 'https://cdn.shopify.com/s/files/1/0653/2605/5654/files/almondfront.jpg?v=1743060338',
      category: 'Dairy',
      size: 'small'
    },
    {
      id: 'amla-prash',
      name: 'Amla Prash',
      price: 590,
      image: 'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork67.jpg?v=1743061958',
      category: 'Natural Sweeteners',
      size: 'medium'
    }
  ];

  const boxSizes = {
    small: { capacity: 3, price: 99, name: 'Small Box (3 items)' },
    medium: { capacity: 5, price: 149, name: 'Medium Box (5 items)' },
    large: { capacity: 8, price: 199, name: 'Large Box (8 items)' }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(boxRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    )
    .fromTo(productsRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  useEffect(() => {
    const total = selectedProducts.reduce((sum, product) => sum + product.price, 0) + boxSizes[boxSize].price;
    setTotalPrice(total);
  }, [selectedProducts, boxSize]);

  const addToBox = (product) => {
    if (selectedProducts.length >= boxSizes[boxSize].capacity) {
      // Shake animation for full box
      gsap.to(boxRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: "power2.out"
      });
      return;
    }

    if (selectedProducts.find(p => p.id === product.id)) return;

    setIsAnimating(true);
    setSelectedProducts(prev => [...prev, product]);

    // Animation for adding product
    gsap.fromTo(`.product-card-${product.id}`,
      { scale: 1 },
      { 
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        onComplete: () => setIsAnimating(false)
      }
    );

    // Box scale animation
    gsap.to(boxRef.current, {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
  };

  const removeFromBox = (productId) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
    
    // Remove animation
    const itemIndex = selectedProducts.findIndex(p => p.id === productId);
    if (selectedItemsRef.current[itemIndex]) {
      gsap.to(selectedItemsRef.current[itemIndex], {
        opacity: 0,
        x: 50,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  const handleBoxSizeChange = (size) => {
    if (selectedProducts.length > boxSizes[size].capacity) {
      setSelectedProducts(prev => prev.slice(0, boxSizes[size].capacity));
    }
    setBoxSize(size);
    
    // Box transition animation
    gsap.to(boxRef.current, {
      rotationY: 360,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  const handleCheckout = () => {
    if (selectedProducts.length === 0) return;
    
    gsap.to(summaryRef.current, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
    
    console.log('Checkout:', { boxSize, selectedProducts, totalPrice });
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-20">
        <nav className="text-gray-400 text-sm mb-8">
          <Link to="/" className="hover:text-amber-500">Home</Link> / 
          <Link to="/shop" className="hover:text-amber-500"> Shop</Link> / 
          <span className="text-white"> Build Your Own Box</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Build Your Own Box
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Create your perfect collection of organic, traditional products. Choose your box size and add your favorite items.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Box Size Selection */}
          <div className="lg:col-span-3 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Choose Your Box Size</h2>
            <div className="flex flex-wrap gap-4">
              {Object.entries(boxSizes).map(([size, details]) => (
                <button
                  key={size}
                  onClick={() => handleBoxSizeChange(size)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    boxSize === size 
                      ? 'border-amber-500 bg-amber-500/10' 
                      : 'border-gray-600 hover:border-amber-400'
                  }`}
                >
                  <div className="text-lg font-semibold">{details.name}</div>
                  <div className="text-amber-400">₹{details.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Available Products</h2>
            <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableProducts.map((product) => {
                const isSelected = selectedProducts.find(p => p.id === product.id);
                const isDisabled = selectedProducts.length >= boxSizes[boxSize].capacity && !isSelected;
                
                return (
                  <div
                    key={product.id}
                    className={`product-card-${product.id} bg-gray-900 rounded-lg p-4 border-2 transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? 'border-green-500 bg-green-500/10' 
                        : isDisabled
                        ? 'border-gray-700 opacity-50 cursor-not-allowed'
                        : 'border-gray-700 hover:border-amber-500'
                    }`}
                    onClick={() => !isDisabled && addToBox(product)}
                  >
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-100 object-cover rounded-lg mb-3"
                      />
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          ✓
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-400 font-bold">₹{product.price}</span>
                      <span className="text-xs text-gray-500 capitalize">{product.size} size</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Box Summary */}
          <div className="lg:col-span-1">
            <div ref={summaryRef} className="bg-gray-900 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-semibold mb-4">Your Box</h2>
              
              {/* Visual Box */}
              <div ref={boxRef} className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg p-6 mb-6 text-center">
                <div className="text-white font-bold text-lg mb-2">
                  {boxSizes[boxSize].name}
                </div>
                <div className="text-amber-100">
                  {selectedProducts.length} / {boxSizes[boxSize].capacity} items
                </div>
                <div className="w-full bg-amber-800 rounded-full h-2 mt-3">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(selectedProducts.length / boxSizes[boxSize].capacity) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              {/* Selected Items */}
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {selectedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    ref={el => selectedItemsRef.current[index] = el}
                    className="flex items-center justify-between bg-gray-800 rounded-lg p-3"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <div className="font-medium text-sm">{product.name}</div>
                        <div className="text-amber-400 text-sm">₹{product.price}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromBox(product.id)}
                      className="text-red-400 hover:text-red-300 text-xl"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Box Price:</span>
                  <span>₹{boxSizes[boxSize].price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Products:</span>
                  <span>₹{selectedProducts.reduce((sum, p) => sum + p.price, 0)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-amber-400 border-t border-gray-700 pt-2">
                  <span>Total:</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleCheckout}
                disabled={selectedProducts.length === 0}
                className={`w-full mt-6 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProducts.length === 0
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
              >
                {selectedProducts.length === 0 ? 'Add Products to Continue' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildYourOwnBox;
