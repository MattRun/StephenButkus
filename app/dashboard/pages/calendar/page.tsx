'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CalendarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-700 p-16">
      {/* Full-width clickable banner */}
      {/* <Link href="/dashboard/pages/calendar">
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] cursor-pointer">
          <Image
            src="/Calendar_Purple.png"
            alt="Go to Calendar"
            layout="fill"
            objectFit="cover"
            className="hover:opacity-90 transition-opacity duration-300"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            
          </div>
        </div>
      </Link> */}

      {/* Google Calendar Embed */}
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-7xl">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_eb9c08eeebad49d5c4ab43e257d577d819675b04072708dccf8d2341adf2280e%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            style={{ border: 'solid 1px #777' }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="AEHS School Calendar"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
