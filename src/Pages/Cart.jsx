import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCart } from '../context/CartContext';
import Footer from '../Components/Footer';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const cartRef = useRef(null);
  const summaryRef = useRef(null);

  useGSAP(() => {
    if (items.length > 0) {
      gsap.fromTo('.cart-item',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
      
      gsap.fromTo(summaryRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
      );
    }
  }, [items]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
    
    // Animate quantity change
    gsap.to(`.quantity-${id}`, {
      scale: 1.2,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
  };

  const handleRemoveItem = (id) => {
    // Animate removal
    gsap.to(`.cart-item-${id}`, {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => removeFromCart(id)
    });
  };

  const handleClearCart = () => {
    gsap.to('.cart-item', {
      opacity: 0,
      y: -50,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: clearCart
    });
  };

  if (items.length === 0) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">Add some products to get started!</p>
          <Link
            to="/shop"
            className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-20">
        <nav className="text-gray-400 text-sm mb-8">
          <Link to="/" className="hover:text-amber-500">Home</Link> / 
          <span className="text-white"> Cart</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold">Shopping Cart</h1>
          <button
            onClick={handleClearCart}
            className="text-red-400 hover:text-red-300 text-sm underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2" ref={cartRef}>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`cart-item cart-item-${item.id} bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row items-center gap-4`}
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image || item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.category || 'Organic Product'}</p>
                    <p className="text-amber-400 font-bold text-lg">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
                    >
                      -
                    </button>
                    <span className={`quantity-${item.id} w-12 text-center font-semibold`}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-center md:text-right min-w-[100px]">
                    <p className="font-bold text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-400 hover:text-red-300 p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div ref={summaryRef} className="bg-gray-900 rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                  <span>₹{getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>₹{Math.round(getCartTotal() * 0.18).toLocaleString()}</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between text-xl font-bold text-amber-400">
                  <span>Total:</span>
                  <span>₹{Math.round(getCartTotal() * 1.18).toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  className="w-full border border-amber-500 hover:bg-amber-500 hover:text-black text-amber-500 py-3 px-6 rounded-lg font-semibold text-center block transition-all"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Promo Code */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="font-semibold mb-3">Promo Code</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                  />
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
