"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const titles : string[] = [
  "Register to the Website",
  "Explore Journeys and Events",
  "Create Your Own Journey",
  "Join a Journey or Event",
  "Chat with Other Attendees",
  "Review and Share Your Memories"
];

const descriptions : string[] = [
  "Sign up and create your profile to unlock all the features of our platform.",
  "Browse our calendar of upcoming events and activities tailored to your interests.",
  "Organize your own event and invite others to join in the adventure.",
  "RSVP to events and join a community of like-minded adventurers.",
  "Connect with fellow participants before and after the event to share tips and experiences.",
  "Leave a review of the event and upload photos to share your experiences with others."
];

const imageSources : string[] = [
  "/images/landingPage/howItWorks/slide1.png",
  "/images/landingPage/howItWorks/slide2.png",
  "/images/landingPage/howItWorks/slide3.png",
  "/images/landingPage/howItWorks/slide4.png",
  "/images/landingPage/howItWorks/slide5.png",
  "/images/landingPage/howItWorks/slide6.png"
];

const HowWorks: React.FC = () => {
  return (
    <div className="container w-[95%] mx-auto lg:w-[90%] py-[50px]">
      <h2 className="font-bold text-2xl capitalize text-center py-4">How Our Website Works</h2>
      <Swiper
        style={{ padding: '25px 0' }} 
        modules={[Navigation]} 
        navigation={{
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1360: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
          <div className="swiper-wrapper">
            {[...Array(titles.length)].map((_, index) => (
              <SwiperSlide key={index} className="relative flex justify-center items-center">
                <div className={`step w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center absolute top-[-25px] left-1/2 transform -translate-x-1/2 drop-shadow-lg border-4 border-teal-800 z-20`}>
                  <p className="font-bold text-xl text-teal-800 text-center">{index + 1}</p>
                </div>
                <div className={`box w-[300px] h-[320px] ${index % 2 === 0 ? 'bg-teal-600 text-white' : 'bg-white text-black'} rounded-lg flex flex-col justify-evenly gap-y-2 py-4 px-5 shadow-lg cursor-pointer mx-auto`}>
                  <Image
                    width={1000} 
                    height={1000}
                    src={imageSources[index]}
                    alt={descriptions[index]} 
                    className="w-full h-[100px] object-contain" 
                  />
                  <h2 className="font-bold text-center text-base px-2">{titles[index]}</h2>
                  <p className="text-sm opacity-80 font-medium pb-4">{descriptions[index]}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next-unique"></div>
          <div className="swiper-button-prev-unique"></div>
      </Swiper>

    </div>
  );
};

export default HowWorks;
