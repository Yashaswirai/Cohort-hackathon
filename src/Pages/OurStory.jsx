import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypewriterEffectSmooth } from "../Constants/TypeWritterEffect";
import { text } from "motion/react-client";

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const valuesRef = useRef(null);
  
  useGSAP(() => {
    gsap.to(".component", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        scrub: 1,
      },
      y:"-100%",
      ease: "none",
    })
  });

  useGSAP(() => {
    // Animate main title
    gsap.fromTo(titleRef.current, 
      {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      }
    );

    // Animate description text
    gsap.fromTo(descRef.current.children, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        delay: 1
      }
    );

    // Animate values grid items
    gsap.fromTo(".value-item", 
      {
        opacity: 0,
        y: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate values section title
    gsap.fromTo(".values-title", 
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  useGSAP(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate text elements within each card
      const textElements = card.querySelectorAll("p");
      gsap.fromTo(textElements,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate images within cards
      const images = card.querySelectorAll("img");
      gsap.fromTo(images,
        {
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? -5 : 5
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate journey title with split text effect
    const journeyTitle = document.querySelector(".journey-title");
    if (journeyTitle) {
      gsap.fromTo(journeyTitle,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: journeyTitle,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  });

  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-screen overflow-hidden relative bg-[url('https://www.rosierfoods.com/cdn/shop/files/78d4352e-c58a-4169-956d-bc09beaec595.jpg?v=1743061791')] bg-cover bg-center"
      >
        <div
          className="w-full h-full"
        >
          <div className="component w-full h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
              <h1 ref={titleRef} className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <div ref={descRef}>
                <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  Born from tradition, crafted with love. Discover how Rosier
                  began its journey to bring you the purest, most authentic food
                  experiences.
                </p>
                <small className="text-white/70 text-md">We at Rosier believe in reviving the old traditional ways of Bharat.</small>
                <div className="mt-8 text-white/70 text-sm">
                  <p>Scroll down to continue</p>
                  <div className="animate-bounce mt-2">↓</div>
                </div>
              </div>
            </div>
          </div>

          <div ref={valuesRef} className="component w-full h-screen flex items-center justify-center relative bg-gradient-to-br from-amber-900/80 to-black/80">
            <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
              <h2 className="values-title text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
                <div className="value-item space-y-4">
                  <h3 className="text-xl font-semibold text-amber-300">
                    Purity
                  </h3>
                  <p className="text-base leading-relaxed">
                    We believe in keeping things simple and pure, just as nature
                    intended.
                  </p>
                </div>
                <div className="value-item space-y-4">
                  <h3 className="text-xl font-semibold text-amber-300">
                    Tradition
                  </h3>
                  <p className="text-base leading-relaxed">
                    Our methods are rooted in time-tested traditions passed down
                    through generations.
                  </p>
                </div>
                <div className="value-item space-y-4">
                  <h3 className="text-xl font-semibold text-amber-300">
                    Quality
                  </h3>
                  <p className="text-base leading-relaxed">
                    Every product is crafted with meticulous attention to detail
                    and quality.
                  </p>
                </div>
                <div className="value-item space-y-4">
                  <h3 className="text-xl font-semibold text-amber-300">Love</h3>
                  <p className="text-base leading-relaxed">
                    Love is the secret ingredient in everything we create for
                    your family.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-white/70 text-sm">
                <p>Continue scrolling to explore more</p>
                <div className="animate-bounce mt-2">↓</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="journey-title w-full flex justify-center">
            <TypewriterEffectSmooth words={[{text:"Our"},{text:"Journey"},{text:"Continues",className:"text-amber-500 dark:text-amber-500"}]}/>
          </div>
          <div className="card grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                From our humble beginnings to becoming a trusted name in
                authentic food products, our journey has been guided by
                unwavering commitment to quality and tradition.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Today, we continue to honor our heritage while embracing
                innovation to serve families across the globe with products that
                nourish both body and soul.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://www.rosierfoods.com/cdn/shop/files/Rosier_Starter_Pack.jpg?v=1750344468&width=823"
                alt="Our Products"
                className="w-full h-80 object-cover object-bottom rounded-2xl shadow-2xl mb-12"
              />
            </div>
          </div>
          <div className="card grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://www.rosierfoods.com/cdn/shop/articles/WhatsApp_Image_2023-07-09_at_12.18.57_PM.jpg?v=1712256951"
                alt="Our Products"
                className="w-full h-80 object-cover object-center rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                In our daily life routine, we sometimes forget to take stock of what we are eating and how we are eating. The choices we make with respect to food which affects us and our entire family. So, we must consciously invest energy in finding right kinds of foods for us and our family to help build their immunity.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                At Rosier, we believe in reviving the old traditional ways of Bharat. We are committed to bringing you the purest, most authentic food experiences that nourish both body and soul.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurStory;
