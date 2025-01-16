"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { homeSliderData } from '@/data/homeSlider'; 

const HomeHero: React.FC = () => {
    return (
        <div className="slider-wrapper relative">
            <div className="slider-container w-full h-[50vh] lg:h-[90vh] overflow-hidden relative mx-auto">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    className="swiper-container mySwiper w-full h-full"
                >
                    {homeSliderData.map((slide, index) => (
                        <SwiperSlide key={index} className="w-full h-full relative flex justify-center items-center text-center">
                            <Image
                                width={5000}
                                height={5000}
                                className="block w-full h-full object-cover lg:object-[10%_80%]"
                                src={slide.src}
                                alt={slide.alt}
                            />
                        </SwiperSlide>
                    ))}
                    <div className="absolute inset-0 bg-[#1B1B1B] bg-opacity-30 z-10"></div>
                </Swiper>
                <div className="content absolute top-1/2 lg:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full">
                    <div className="heading flex flex-col justify-center items-center text-white">
                        <h2 className="title lg:w-6/12 text-center text-2xl lg:text-4xl py-4 font-bold">Journey Together: Plan Your Next Adventure</h2>
                        <p className="hidden lg:block title text-sm py-4 mx-5">Join a community that shares your love for travel and embark on unforgettable outdoor and indoor adventures together</p>
                        <Link className="bg-[#ffd700] text-black rounded-md py-2 px-8 text-sm font-semibold mt-[20px]" href="/user/login/">Get Started</Link>
                    </div>
                </div>
            </div>
            <div className="circle-container hidden lg:block no-underline uppercase w-full h-[150px] bg-white absolute bottom-[-20px] z-30 border-t-[14px] border-double border-teal-800">
                <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] lg:w-[600px] text-center">
                    <h2 className="title font-[Arial Black] font-bold text-[25px] tracking[-1px] text-teal-800">Explore, Connect, and Enjoy Every Week!</h2>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
