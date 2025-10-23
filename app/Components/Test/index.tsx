"use client"
import React, { useEffect } from 'react'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import classes from './index.module.scss'
import TestCard from './TestCard';
 

const categories = ["slider - 1", "slider - 2", "slider - 3", "slider - 4", "slider - 5"]

    

const Test = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            grabCursor: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },

            modules: [Navigation],



            spaceBetween: 10,
            mousewheel: {
                forceToAxis: true,
            },
            // If we need navigation
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },


            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1699: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            },
            speed: 700,
            slideActiveClass: 'is-active',
            //   slideDuplicateActiveClass: 'is-active',


        });
    }, []);

    return (
        <div className='max-w-7xl mx-auto overflow-hidden'>
            <div className="swiper">
                <div className="swiper-wrapper">

                    {categories.map((category, index) => (
                        <div className="swiper-slide flex-none" key={index}>
                            <div className="relative flex justify-center items-center overflow-hidden h-[140px] bg-[#cecece] rounded border border-1 border-red-500 ">
                                <TestCard key={category} category={category} />
                            </div>
                        </div>
                    ))}



                </div>

                <span className="swiper-button-prev z-30"></span>
                <span className="swiper-button-next z-30"></span>
            </div>
        </div>
    )
}

export default Test