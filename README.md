# 🌾 Rosier Foods - Organic & Traditional Food Products Website

> **"When people choose love and purity, they choose Rosier."**

A modern, feature-rich e-commerce website built for Rosier Foods, showcasing organic and traditional food products with a focus on authentic Ayurvedic nutrition. This project was developed as part of the **Sheryians Coding School Hackathon** challenge.

## 🏆 Project Overview

This website represents a complete brand experience for Rosier Foods, featuring a sophisticated design with smooth animations, interactive product showcases, and a comprehensive shopping experience that bridges traditional Indian food culture with modern web technology.

## ✨ Features

### 🏠 **Core Pages**
- **Home Page** - Hero section with 3D animations, featured products, and brand story
- **Shop/Products Page** - Interactive product grid with hover effects and filtering
- **Product Detail Pages** - Comprehensive product information with image galleries
- **Build Your Own Box** - Custom product bundling with real-time pricing
- **Cart & Checkout** - Full shopping cart functionality with persistence
- **About/Our Story** - Brand storytelling with scroll-triggered animations
- **Community/Blog** - Content showcase with animated cards
- **Contact** - Interactive contact form with validation
- **Authentication** - Login/Register with form validation

### 🎨 **Design & Animation Features**
- **GSAP Animations** - Smooth scroll-triggered and interactive animations
- **3D Spline Integration** - Immersive 3D backgrounds and product showcases
- **Responsive Design** - Mobile-first approach with seamless cross-device experience
- **Interactive Cards** - Hover effects, particle animations, and magnetic interactions
- **Locomotive Scroll** - Smooth scrolling experience throughout the site
- **Gradient Animations** - Dynamic background gradients and color transitions

### 🛒 **E-commerce Functionality**
- **Shopping Cart** - Add/remove products, quantity management, persistent storage
- **Product Variants** - Multiple product images, specifications, and pricing
- **Custom Box Builder** - Interactive product bundling with visual feedback
- **Price Calculations** - Real-time pricing with tax and shipping calculations
- **Inventory Management** - Stock status and availability indicators

### 🔧 **Technical Features**
- **Context API** - Global state management for cart and user data
- **Local Storage** - Persistent cart and user preferences
- **React Router** - Seamless navigation with protected routes
- **Form Validation** - React Hook Form with comprehensive validation
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets

## 🚀 Tech Stack

### **Frontend Framework**
- **React 18** ⚛️ - Modern React with hooks and concurrent features
- **Vite** ⚡ - Ultra-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** 🎨 - Utility-first CSS framework
- **Custom CSS** - Advanced animations and responsive design
- **Remix Icons** 📦 - Beautiful icon library

### **Animations & 3D**
- **GSAP (GreenSock)** 🎬 - Professional-grade animation library
- **ScrollTrigger** 📜 - Scroll-based animation triggers
- **Spline** 🌐 - 3D design and animation platform
- **Locomotive Scroll** 🚂 - Smooth scrolling library

### **Routing & State**
- **React Router DOM** 🛣️ - Client-side routing
- **Context API** 🔄 - Global state management
- **React Hook Form** 📝 - Performant form handling

### **Development Tools**
- **ESLint** ✅ - Code linting and quality
- **Vite Plugins** 🔌 - Development enhancements

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher) 📦
- npm or yarn package manager 📋

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Hackathons
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**
```bash
npm run build
# or
yarn build
```

### **Preview Production Build**
```bash
npm run preview
# or
yarn preview
```

## 🎯 Project Structure

```
d:\PROJECTS\Hackathons\
├── 📁 public/
│   ├── 🖼️ fonts/                 # Custom font files
│   ├── 🖼️ background.png         # Hero background image
│   ├── 🖼️ hero-base.png         # Product showcase base
│   └── 🖼️ combine-product.png   # Combined product image
├── 📁 src/
│   ├── 📁 Components/            # Reusable UI components
│   │   ├── 🧩 NavBar.jsx         # Navigation component
│   │   ├── 🧩 HeroSection.jsx    # Hero section with 3D
│   │   ├── 🧩 Footer.jsx         # Footer component
│   │   ├── 🧩 Best.jsx           # Best sellers carousel
│   │   ├── 🧩 Category.jsx       # Product categories
│   │   └── 🧩 Loader.jsx         # Loading animation
│   ├── 📁 Pages/                 # Main page components
│   │   ├── 📄 Home.jsx           # Homepage
│   │   ├── 📄 shop.jsx           # Product listing
│   │   ├── 📄 ProductDetail.jsx  # Product details
│   │   ├── 📄 BuildYourOwnBox.jsx # Custom box builder
│   │   ├── 📄 Cart.jsx           # Shopping cart
│   │   ├── 📄 OurStory.jsx       # About page
│   │   ├── 📄 Community.jsx      # Blog/Community
│   │   ├── 📄 Contact.jsx        # Contact form
│   │   ├── 📄 LoginRegister.jsx  # Authentication
│   │   └── 📄 PageNotFound.jsx   # 404 page
│   ├── 📁 Constants/             # Reusable UI constants
│   │   ├── 🎨 MagicBento.jsx     # Interactive product grid
│   │   ├── 🎨 TypeWritterEffect.jsx # Typewriter animation
│   │   └── 🎨 CardEffect.jsx     # 3D card effects
│   ├── 📁 context/               # Global state management
│   │   └── 🔄 CartContext.jsx    # Shopping cart context
│   ├── 📁 Routes/                # Routing configuration
│   │   └── 🛣️ MainRoute.jsx      # Main route definitions
│   ├── 📁 utils/                 # Utility functions
│   │   └── 🛠️ cn.js              # Class name utility
│   ├── 🎨 index.css             # Global styles
│   ├── ⚛️ App.jsx               # Main app component
│   └── ⚛️ main.jsx              # App entry point
├── 📄 package.json              # Dependencies and scripts
├── 📄 tailwind.config.js        # Tailwind configuration
├── 📄 vite.config.js            # Vite configuration
└── 📄 README.md                 # Project documentation
```

## 🌟 Key Components

### **🏠 Home Page**
- 3D animated hero section with Spline integration
- Interactive product showcase with mouse parallax
- Smooth scroll animations and loading sequences
- Featured products carousel with auto-play

### **🛍️ Shop & Products**
- Dynamic product grid with hover animations
- Interactive 3D cards with particle effects
- Real-time filtering and search capabilities
- Responsive layout with mobile optimization

### **📦 Build Your Own Box**
- Interactive product selection with visual feedback
- Real-time price calculation and box capacity
- Smooth animations for adding/removing items
- Custom bundle creation with persistent state

### **🛒 Shopping Cart**
- Persistent cart with localStorage integration
- Quantity management with smooth animations
- Order summary with tax and shipping calculations
- Responsive design with mobile-first approach

## 🎨 Design Philosophy

### **Brand Identity**
- **Traditional Meets Modern** - Honoring ancient Ayurvedic wisdom with contemporary design
- **Warm Color Palette** - Amber, gold, and earth tones reflecting natural purity
- **Typography** - Custom fonts (Majestic, Satoshi) for premium brand feel

### **User Experience**
- **Intuitive Navigation** - Clear information hierarchy and user flow
- **Performance First** - Optimized loading and smooth interactions
- **Accessibility** - WCAG compliant design with proper contrast and navigation

### **Animation Strategy**
- **Purposeful Motion** - Every animation serves a functional purpose
- **Performance Optimized** - Hardware-accelerated animations with GSAP
- **Progressive Enhancement** - Graceful degradation for lower-end devices

## 🏆 Hackathon Requirements Fulfilled

✅ **5 Complete Pages** - All required pages implemented with rich functionality
✅ **Modern Design** - Contemporary UI with smooth animations and interactions
✅ **Responsive Layout** - Mobile-first design working across all devices  
✅ **React Framework** - Built with modern React 18 and hooks
✅ **Animation Library** - GSAP integration for professional animations
✅ **Product Showcase** - Comprehensive product listings and details
✅ **Authentication** - Login/register functionality with validation
✅ **Interactive Features** - Cart, custom box builder, and form handling

## 🚀 Performance Optimizations

- **Code Splitting** - Lazy loading of components and routes
- **Image Optimization** - WebP format and responsive images
- **Bundle Analysis** - Optimized chunks and dependencies
- **Caching Strategy** - Browser caching and localStorage utilization
- **Animation Performance** - GPU-accelerated animations with GSAP

## 📱 Browser Compatibility

- **Chrome** 90+ ✅
- **Firefox** 88+ ✅  
- **Safari** 14+ ✅
- **Edge** 90+ ✅
- **Mobile Browsers** - iOS Safari, Chrome Mobile ✅

## 🤝 Contributing

1. Fork the repository 🍴
2. Create your feature branch (`git checkout -b feature/AmazingFeature`) 🌿
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`) 💾
4. Push to the branch (`git push origin feature/AmazingFeature`) 📤
5. Open a Pull Request 🔄

## 📄 License

This project is part of the Sheryians Coding School Hackathon and is for educational purposes.

## 🙏 Acknowledgments

- **Rosier Foods** - For the brand inspiration and authentic products 🌾
- **Sheryians Coding School** - For organizing the hackathon challenge 🎓
- **GSAP Team** - For the incredible animation library 🎬
- **Spline** - For the 3D design and animation platform 🌐
- **Tailwind CSS** - For the utility-first CSS framework 🎨

## 📞 Contact

**Developer**: Yashaswi Rai  
**Email**: yashaswirai2016@gmail.com  
**Project Link**: [Github](https://github.com/Yashaswirai/Cohort-hackathon)  
**Live Demo**: [Click ME](https://cohort-hackathon.onrender.com/)

---

### 💝 "Reviving the traditional ways of old Bharat with modern technology"

**Made with ❤️ for the Sheryians Hackathon Challenge**
