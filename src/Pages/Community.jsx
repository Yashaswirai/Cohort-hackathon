import { CardBody, CardContainer, CardItem } from "../Constants/CardEffect";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import {  useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate title on page load
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Animate cards with ScrollTrigger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotationY: 15,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1
            }
          );

          // Add hover animations
          const cardImg = card.querySelector("img");
          const cardLink = card.querySelector("a");

          gsap.set(cardImg, { scale: 1 });
          gsap.set(cardLink, { scale: 1 });

          card.addEventListener("mouseenter", () => {
            gsap.to(cardImg, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(cardLink, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(cardImg, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(cardLink, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const Blogs = [
    {
      name: "A2 Ghee: Liquid Gold for Your Health",
      image:
        "https://www.rosierfoods.com/cdn/shop/articles/WhatsApp_Image_2023-07-09_at_12.18.57_PM.jpg?v=1712256951",
      link: "/blog/1",
    },
    {
      name: "Keeping Your Heart Healthy: Tips for a Stronger Heart",
      image:
        "https://www.rosierfoods.com/cdn/shop/articles/Untitled_design_38.png?v=1712256458",
      link: "/blog/2",
    },
    {
      name: "Raw Honey for Immunity: Health Benefits",
      image:
        "https://www.rosierfoods.com/cdn/shop/articles/close-up-honeycomb-with-beeswax.jpg?v=1712255863",
      link: "/blog/3",
    },
    {
      name: "Mindful Munching: The Art of Eating with Awareness",
      image:
        "https://www.rosierfoods.com/cdn/shop/articles/Untitled_design-26.png?v=1749659476",
      link: "/blog/4",
    },
    {
      name: "Summer Approaches: Strategies to Adapt to the Weather",
      image:
        "https://www.rosierfoods.com/cdn/shop/articles/pexels-A_nil-1391249.jpg?v=1712255095&width=720",
      link: "/blog/5",
    },
    {
      name: "All You Need to Know About Going Organic",
      image:
        "https://www.rosierfoods.com/cdn/shop/articles/woman-spreading-soft-cheese-toasted-bread.jpg?v=1712253591",
      link: "/blog/6",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-black text-amber-500 py-15">
      <div className="blog w-full px-4 py-5 flex flex-col items-center">
        <h2
          ref={titleRef}
          className="text-2xl font-semibold mb-4"
        >
          Blog Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 w-full mx-auto">
          {Blogs.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <CardContainer className="inter-var w-full h-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={item.image}
                      className="w-full h-60 object-cover object-center rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      to={item.link}
                      className="w-full flex justify-center mt-2 rounded-xl text-xl font-normal dark:text-amber-500 text-black"
                    >
                      {item.name.substring(0, 35)}...
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
