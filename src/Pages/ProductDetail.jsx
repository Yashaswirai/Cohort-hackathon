import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Footer from '../Components/Footer';

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  // Product data - in a real app, this would come from an API
  const products = {
    'a2-ghee': {
      id: 'a2-ghee',
      name: 'Premium A2 Ghee',
      price: 899,
      originalPrice: 1200,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork60.jpg?v=1749285565',
        'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork61.jpg?v=1749285565',
        'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork64.jpg?v=1749285565'
      ],
      description: 'Pure A2 Ghee made from grass-fed cow milk using traditional methods. Rich in vitamins A, D, E, and K, this ghee is perfect for cooking and has numerous health benefits.',
      features: [
        '100% Pure A2 Cow Ghee',
        'Made from Grass-fed Cows',
        'Traditional Bilona Method',
        'Rich in Omega-3 fatty acids',
        'No artificial preservatives',
        'Lactose-free'
      ],
      specifications: {
        'Weight': '500g',
        'Shelf Life': '12 months',
        'Storage': 'Store in cool, dry place',
        'Origin': 'Made in India'
      },
      inStock: true,
      rating: 4.8,
      reviews: 156
    },
    'better-bars': {
      id: 'better-bars',
      name: 'Nutritious Better Bars',
      price: 299,
      originalPrice: 399,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/1_Cocoa_Almond.jpg?v=1743769781',
        'https://cdn.shopify.com/s/files/1/0653/2605/5654/files/7_Berry_Coconut.jpg?v=1743769781'
      ],
      description: 'Healthy and delicious energy bars made with natural ingredients. Perfect for pre/post workout or as a healthy snack option.',
      features: [
        'No Added Sugar',
        'Rich in Protein & Fiber',
        'Natural Ingredients Only',
        'Gluten-Free',
        'Vegan Friendly',
        'Multiple Flavors Available'
      ],
      specifications: {
        'Weight': '50g per bar',
        'Pack Size': '6 bars',
        'Shelf Life': '6 months',
        'Calories': '180 per bar'
      },
      inStock: true,
      rating: 4.6,
      reviews: 89
    },
    'khapli-atta': {
      id: 'khapli-atta',
      name: 'Khapli (Emmer) Wheat Atta',
      price: 469,
      originalPrice: 499,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/Bestseller.jpg?v=1743589042',
        'https://www.rosierfoods.com/cdn/shop/files/4_fedc4cd5-aac6-4300-8b7b-bf9ab4d6bdc4.jpg?v=1743752714',
        'https://www.rosierfoods.com/cdn/shop/files/Glycemic_Index_5kg.jpg?v=1743752714',
        'https://www.rosierfoods.com/cdn/shop/files/3_cf0af3cb-5ad3-40ba-b11c-5ddf680d064e.jpg?v=1743752714',
        'https://www.rosierfoods.com/cdn/shop/files/5_f799b3f4-7226-4736-a884-5b16c22e3b3b.jpg?v=1743676455'
      ],
      description: 'Rooted in ancient Ayurvedic wisdom, Khapli Atta is milled from 100% non-GMO Emmer wheat, a heritage grain cultivated through timeless farming traditions. It is stone ground using the traditional chakki method, providing unadulterated nourishment and a lower glycemic index which promotes balanced blood sugar levels; this is ideal for harmonizing Pitta and supporting metabolic health. Boasting 50% more fiber than modern wheat, Khapli enhances digestion and detoxification, nurturing Agni (digestive fire) and soothing Vata. This nutrient-dense atta bridges ancestral farming practices with holistic wellness, offering sustained energy and gut vitality. Rediscover nourishment as nature’s timeless gift.',
      features: [
        'Ayurvedic Balance',
        'Low Glycemic Index',
        '50% More Fiber',
        'Ancient Stone-Ground (Chakki) Method',
        '100% Non-GMO Heritage Grain',
        'Gluten-Rich Nutrition',
        'Timeless Farming Wisdom'
      ],
      specifications: {
        'Weight': '500g',
        'Shelf Life': '12 months',
        'Storage': 'Store in cool, dry place',
        'Origin': 'Made in India'
      },
      inStock: true,
      rating: 4.8,
      reviews: 156
    },
    'stone-pressed-oils':{
      id: 'stone-pressed-oils',
      name: 'Stone Pressed Black Mustard Oil',
      price: 390,
      originalPrice: 390,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/2_d81dc980-086e-4dba-a716-52444f13ae45.jpg?v=1746730339',
        'https://www.rosierfoods.com/cdn/shop/files/2_d81dc980-086e-4dba-a716-52444f13ae45.jpg?v=1746730339',
        'https://www.rosierfoods.com/cdn/shop/files/2_d81dc980-086e-4dba-a716-52444f13ae45.jpg?v=1746730339'
      ],
      description: 'Made from high-quality mustard seeds that have been stone pressed and extracted without the use of any chemicals or solvents, this oil is a healthier and more flavorful alternative to traditional cooking oils.',
      features: [
        'Nourishment',
        'Skin & Hair',
        'Boosts immunity',
        'Good for Heart',
        'High Smoke Point'
      ],
      specifications: {
        'Weight': '250ml',
        'Shelf Life': '12 months',
        'Storage': 'Store in a cool, dark place',
        'Origin': 'Made in India'
      },
      inStock: true,
      rating: 4.7,
      reviews: 120
    },
    'raw-honey': {
      id: 'organic-honey',
      name: 'Wild Forest Honey',
      price: 499,
      originalPrice: 589,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344',
        'https://www.rosierfoods.com/cdn/shop/files/nutritionfactsposthoney_300g.jpg?v=1743060349&width=823',
        'https://www.rosierfoods.com/cdn/shop/files/newoldhoneypostforlisting.jpg?v=1743060337'
      ],
      description: 'Wild Flower Honey is a multi-floral honey, responsibly collected from bees feeding on wild forest flowers nectar from the forest of the Himalayas. The honey is rich in bio-diverse vitamins, minerals, and amino acids boosting good health. 100% Natural | Ayurvedic | No added sugar',
      features: [
        'Rich in Vitamin C,B2,B3,B5 and B6',
        'Anti-viral and Anti-fungal.',
        'Helps in curing cough and cold.',
        'Good for skin.'
      ],
      specifications: {
        'Weight': '500g',
        'Shelf Life': '12 months',
        'Storage': 'Store in a cool, dry place',
        'Origin': 'Made in India'
      },
      inStock: true,
      rating: 4.9,
      reviews: 200
    },
    'pooja-essentials': {
      id: 'pooja-essentials',
      name: 'Rosier Havan Cups – Bakhoor',
      price: 290,
      originalPrice: 290,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/BakhoorCupFront.jpg?v=174315143',
        'https://www.rosierfoods.com/cdn/shop/files/BakhoorStand.jpg?v=1743151474',
        'https://www.rosierfoods.com/cdn/shop/files/BakhoorCupBack.jpg?v=1743151437',
        'https://www.rosierfoods.com/cdn/shop/files/BakhoorCup.jpg?v=1743151463'
      ],
      description: 'Rosier Bakhoor Havan Cups are crafted using Desi Gir Cow Dung, Gum Benzoin, Calendula Officinalis, Vachellia Farnesiana, and Cocoa Nucifera Shell, infused with the sacred essence of wood bark powder. Designed for pooja, meditation, and space purification, these cups create a serene and positive ambiance, aligning tradition with eco-conscious living.',
      features: [
        'Purifies & Energizes',
        'Sacred Aroma',
        'Eco-Friendly & Natural',
        'Long-Lasting Burn'
      ],
      specifications: {
        'Contents': 'Incense Sticks, Camphor, Diya Wicks, Pooja Thali',
        'Shelf Life': '12 months',
        'Storage': 'Store in a cool, dry place',
        'Origin': 'Made in India'
      },
      inStock: true,
      rating: 4.5,
      reviews: 75
    },
    'essentials-pack': {
      id: 'essentials-pack',
      name: 'Essential Kitchen Pack',
      price: 2616,
      originalPrice: 2798,
      images: [
        'https://www.rosierfoods.com/cdn/shop/files/kitchen_pack.jpg?v=1750338216',
        'https://www.rosierfoods.com/cdn/shop/files/kitchen_pack.jpg?v=1750338216',
        'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork60_2789b614-2cf4-4f15-b0f0-da4521ae6b39.jpg?v=1753355631',
        'https://www.rosierfoods.com/cdn/shop/files/81zHR0l51XL._SL1500.jpg?v=1750338216',
        'https://www.rosierfoods.com/cdn/shop/files/Black_Mustard_Oil_2.jpg?v=1750338216'
      ],
      description: 'The Essential Kitchen Pack is a curated collection of premium, organic staples designed to elevate your culinary experience. This pack includes our signature Premium A2 Ghee, Khapli Atta (Emmer Wheat Flour), Stone Pressed Mustard Oil, and Wild Forest Honey, all sourced from sustainable farms and crafted with care. Perfect for health-conscious individuals and families, this pack offers a wholesome foundation for nutritious meals and snacks.',
      features: [
        'Premium A2 Ghee',
        'Khapli Atta (Emmer Wheat Flour)',
        'Stone Pressed Mustard Oil',
        'Wild Forest Honey',
        'Organic and Natural Ingredients',
        'Sustainably Sourced'
      ],
      specifications: {
        'Contents': 'A2 Ghee (500g), Khapli Atta (500g), Mustard Oil (250ml), Wild Forest Honey (500g)',
        'Shelf Life': '12 months',
        'Storage': 'Store in a cool, dry place',
        'Origin': 'Made in India'
      },
    },
  };

  const product = products[productId] || products['a2-ghee'];

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(imageRef.current, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(detailsRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );
  }, []);

  const handleAddToCart = () => {
    if (productId === 'build-your-own-box') {
      window.location.href = '/build-your-own-box';
      return;
    }
    // Add to cart logic
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  const handleBuyNow = () => {
    if (productId === 'build-your-own-box') {
      window.location.href = '/build-your-own-box';
      return;
    }
    // Buy now logic
    console.log(`Buying ${quantity} ${product.name}`);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-32 pt-15">
        <nav className="text-gray-400 text-sm">
          <Link to="/" className="hover:text-amber-500">Home</Link> / 
          <Link to="/shop" className="hover:text-amber-500"> Shop</Link> / 
          <span className="text-white"> {product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div ref={imageRef} className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-900">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-700'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div ref={detailsRef} className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-amber-500">★</span>
                  <span className="ml-1">{product.rating}</span>
                  <span className="text-gray-400 ml-2">({product.reviews} reviews)</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  product.inStock ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-amber-500">₹{product.price}</span>
              {product.price!=product.originalPrice && <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>}
              {product.price!=product.originalPrice && <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                {Math.round((1 - product.price/product.originalPrice) * 100)}% OFF
              </span>}
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-lg">Quantity:</span>
              <div className="flex items-center border border-gray-600 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-800"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-600">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 bg-white hover:bg-gray-200 text-black py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Specifications</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-400">{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
