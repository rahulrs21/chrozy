"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1547127796-06bb04e4b315?q=80&w=1974&auto=format&fit=crop",
    title: "Solution for Your Dirty Clothes",
    desc: "Our experts, with the help of our state-of-the-art machinery, ensure that your clothes come back clean, tidy, and fresh every time.",
    link: "/fetch",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=2070&auto=format&fit=crop",
    title: "Professional Dry Cleaning at Its Best",
    desc: "Experience premium care with our eco-friendly and efficient dry-cleaning process for all fabrics.",
    link: "https://google.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581579186989-3eab3cbe5a9f?q=80&w=2000&auto=format&fit=crop",
    title: "Plan Your Day with Ease",
    desc: "We take care of your laundry so you can focus on what really matters.",
    link: "/",
  },
];

export default function Hero({ message }: { message?: React.ReactNode }) {
  return (

    <div>
      {/* <section className="relative w-full min-h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          loop
          className="h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}> 
              <div
                className="relative w-full h-screen bg-center bg-cover brightness-75"
                style={{ backgroundImage: `url(${slide.image})` }}
              > 
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute top-1/3 left-[5%] md:left-[10%] text-white max-w-xl z-10"
                >
                  {message && (
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-200">
                      {message}
                    </h1>
                  )}
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
                    {slide.title}
                  </h2>
                  <p className="max-w-md mb-6 text-base md:text-lg text-gray-200">
                    {slide.desc}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-block bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-md font-semibold transition"
                  >
                    Explore Now
                  </Link>
                </motion.div>
 
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}


      <section className="relative w-full h-[500px] mb-12">
      <Image
        src="https://me.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2025/central/collections/men-spring-summer-2026/Men_SS26_DPO_HP_Push_DI3.jpg" // Replace with your high-quality banner
        alt="Luxury Collection"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-black/30">
        <h1 className="text-5xl font-bold text-white mb-4">Luxury Collection 2025</h1>
        <p className="text-white text-lg mb-6">Experience elegance & sophistication in every piece.</p>
        <a href="/product" className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
          Shop Now
        </a>
      </div>
    </section>


    </div>
  );
}
