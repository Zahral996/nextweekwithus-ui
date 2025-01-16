"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const titles: string[] = [
    "Outdoor Adventure",
    "Art & Culture",
    "Fitness & Wellness",
    "Social & Entertainment",
    "Food & Drinks",
    "Learning & Skill-Building",
    "Family & Kids",
    "Travel & Exploration",
    "Community & Volunteering",
    "Single & Mingling"
];

const imageSrc: string[] = [
    "/images/landingPage/category/adventure.jpg",
    "/images/landingPage/category/art.jpg",
    "/images/landingPage/category/fitness.jpg",
    "/images/landingPage/category/social.jpg",
    "/images/landingPage/category/food.jpg",
    "/images/landingPage/category/learning.jpg",
    "/images/landingPage/category/family.jpg",
    "/images/landingPage/category/travel.jpg",
    "/images/landingPage/category/community.jpg",
    "/images/landingPage/category/dating.jpg"
];

const Category: React.FC = () => {
    return (
        <div className='container mx-auto my-5 px-2'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={3000}
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    }
                }}
                className="w-full overflow-hidden"
            >
                {titles.map((title, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center text-center">
                        <div className="flex flex-col gap-y-2 items-center">
                            <div className="flex flex-col w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full justify-center items-center shadow-md cursor-pointer">
                                <Image
                                    width={500}
                                    height={500}
                                    src={imageSrc[index]} 
                                    className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full object-cover"
                                    alt={title} 
                                />
                            </div>
                            <h3 className="text-center capitalize font-semibold text-sm lg:text-base">{title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Category;
