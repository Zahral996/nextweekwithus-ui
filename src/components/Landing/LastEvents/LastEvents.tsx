// components/UpcomingEvents.tsx
import React from 'react';
import { lastEventsData } from '@/data/lastEvents';


import Link from 'next/link';
import Image from 'next/image';

const LastEvents = () => {
  return (
    <div className="container w-11/12 mx-auto my-2 lg:my-8">
      <div className="heading py-6 flex md:flex-row justify-between items-center">
        <h2 className="font-bold text-xl capitalize">Last Events</h2>
        <Link href={"/"} className="hidden md:block text-teal-700 font-semibold text-sm">View More Events</Link>
      </div>
      <div className="events-container md:grid md:grid-cols-2 justify-start items-start lg:grid-cols-4 gap-4">
        {lastEventsData.map(event => (
          <Link href={"/"} key={event.id} className="flex justify-center">
            <div className="event w-full md:max-w-[260px] flex gap-x-2 flex-col justify-center items-center gap-y-2 border-b-2 border-gray-300 md:border-none py-2 md:py-0">
              <Image width={1000} height={1000} className="w-full h-[200px] object-cover rounded-md" src={event.image} alt={event.title} />
              <div className="content-container w-full flex flex-col gap-y-2">
                <h3 className="font-bold text-lg">{event.title}</h3>
                <div className="location flex flex-row gap-x-2 justify-start items-center">
                  <Image width={16} height={16} src={"/images/icons/shared/geo-alt-fill.svg"} alt="location"/>
                  <p className="text-gray-600 font-semibold">{event.location}</p>
                </div>
                <div className='flex flex-row justify-between md:flex-col'>
                    <div className="time flex flex-row gap-x-2 justify-start items-center">
                    <Image width={16} height={16} src={"/images/icons/shared/calendar-week.svg"} alt='time'/>
                    <p className="text-gray-600 font-medium">{event.date}</p>
                    </div>
                    <div className="participations flex flex-row gap-x-2 justify-start items-center text-gray-600 font-medium">
                    <div className="capacity flex flex-row justify-start items-center">
                        <Image width={16} height={16} src={"/images/icons/shared/person-raised-hand.svg"} alt='capacity'/>
                        <p className="text-sm">Capacity:<span>{event.capacity}</span></p>
                    </div>
                    <div className="attendee flex flex-row justify-start items-center">
                        <Image width={16} height={16} src={"/images/icons/shared/person-walking.svg"} alt='capacity'/>
                        <p className="text-sm">Attendee:<span>{event.attendees}</span></p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href={"/"} className="md:hidden text-teal-700 font-semibold text-base py-2 flex justify-center ">View More Events</Link>
    </div>
  );
};

export default LastEvents;
