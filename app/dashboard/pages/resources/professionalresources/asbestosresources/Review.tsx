'use client';
import React from 'react';

export default function Review() {
  return (
    // <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#ececec] to-[#f0f0f0] p-16 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 px-4 text-left">

          {/* Main Title */}

          {/* <h2
            className="text-6xl font-extrabold mb-6 text-[#d92612] leading-tight"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              textShadow: '-2px 2px 4px rgba(0, 0, 0, 0.3)', // Shadow going right to left
            }}
          >
            Write us a Review!
          </h2> */}

                <h2
                className="text-black text-6xl font-extrabold mb-6 leading-tight"
                style={{
                    fontFamily: 'Product Sans, sans-serif',
                    textShadow: '-2px 2px 4px rgba(0, 0, 0, 0.3)', // Shadow going right to left
                }}
                >
                Write us a{' '}
                <span style={{ color: '#0086f9' }}>R</span>
                <span style={{ color: '#ff4131' }}>e</span>
                <span style={{ color: '#febd01' }}>v</span>
                <span style={{ color: '#0086f9' }}>i</span>
                <span style={{ color: '#00aa4a' }}>e</span>
                <span style={{ color: '#ff4131' }}>w</span>
                <span style={{ color: '#000000' }}>!</span>
                </h2>


          {/* Subheading */}
          <p
            className="text-xl text-black font-normal mb-8"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              textShadow: '-1px 1px 3px rgba(0, 0, 0, 0.2)', // Slight shadow for subheading
            }}
          >
            Whether you took a class before, love our services, or simply enjoy visiting our website, 
            click the image and let us know how we’re doing!
          </p>
        </div>

        {/* Right: Images Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center gap-16 px-4">
          {/* Google Reviews */}
          <a
            href="https://g.page/r/Ceh4qq4FerBXEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <img
              src="/GoogleReview_Tap.png"
              alt="Leave a review on Google"
              className="w-[400px] lg:w-[400px] h-auto rounded-md"
              style={{ boxShadow: "none", borderRadius: "0px" }}
            />
          </a>

          {/* Yelp Logo */}
          <a
            href="https://www.yelp.com/biz/academy-of-environmental-health-and-safety-lawdale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <img
              src="/ReviewYelp.png"
              alt="Leave a review on Yelp"
              className="w-[400px] lg:w-[400px] h-auto rounded-md"
              style={{ boxShadow: "none", borderRadius: "0px" }}
            />
          </a>
        </div>
      </div>
    // </div>
  );
}
