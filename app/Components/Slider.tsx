


'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://i.imgur.com/gIxOPCD.jpg',
    title: 'G.I. Joe: Retaliation',
    subtitle:
      'The G.I. Joes are not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/2V1lJy4.jpg',
    title: 'Red Notice',
    subtitle:
      'An Interpol agent successfully tracks down the world’s most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/3tlt7BS.jpg',
    title: 'Battleship',
    subtitle:
      'A fleet of ships is forced to do battle with an armada of unknown origins in order to discover and thwart their destructive goals.',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/2Y4s19s.jpg',
    title: 'London Has Fallen',
    subtitle:
      'In London for the Prime Minister’s funeral, Mike Banning is caught up in a plot to assassinate all the attending world leaders.',
  },
  {
    id: 5,
    image: 'https://i.imgur.com/3tlt7BS.jpg',
    title: 'San Andreas',   
    subtitle:
      'In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey with his ex-wife to save their daughter.',  
  }
];

const SwiperSection: React.FC = () => {
  return (
    <div className="section py-10">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          grabCursor
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          speed={700}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="people__card relative rounded-2xl overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="people__card__image w-full h-[400px] object-cover"
                />
                <div className="people__card__content absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="slide__number text-sm opacity-80 mb-1">
                    {String(slide.id).padStart(2, '0')}
                  </div>
                  <div className="slide__title text-lg font-semibold mb-2">
                    {slide.title}
                  </div>
                  <div className="slide__subtitle text-sm mb-3">
                    {slide.subtitle}
                  </div>
                  <a
                    href="#"
                    className="slide__btn inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                  >
                    <span>Watch Now</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 17 21"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSection;
