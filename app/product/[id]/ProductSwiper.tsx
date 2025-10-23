"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type ImageItem = { src: string };

export default function ProductSwiper({ images }: { images: ImageItem[] }) {
  if (!images || images.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="pb-20 relative z-10"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx} className="w-full h-auto">
          <div className="relative w-full h-[70vw]">
            <Image
              src={img.src}
              alt={`Product image ${idx + 1}`}
              fill
              sizes="100vw"
              className="object-cover rounded-none"
              priority={idx === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}