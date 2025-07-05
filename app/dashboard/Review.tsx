// 'use client';
// import React from 'react';

// export default function Review() {
//   return (
//     // <div className="w-full bg-gray-100 py-16">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#ececec] to-[#f0f0f0] p-16 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
//         {/* Left: Text Section */}
//         <div className="w-full lg:w-1/2 px-4 text-left">

//           {/* Main Title */}

//           {/* <h2
//             className="text-6xl font-extrabold mb-6 text-[#d92612] leading-tight"
//             style={{
//               fontFamily: 'Product Sans, sans-serif',
//               textShadow: '-2px 2px 4px rgba(0, 0, 0, 0.3)', // Shadow going right to left
//             }}
//           >
//             Write us a Review!
//           </h2> */}
// <h2 className='text-black text-5xl font-extrabold mb-1 leading-tight'>  Write us a</h2>
//                 <h2
//                 className="text-black text-8xl font-extrabold mb-6 leading-tight"
//                 style={{
                    
//                     textShadow: '-2px 2px 4px rgba(0, 0, 0, 0.3)', // Shadow going right to left
//                 }}
//                 >
//                 {' '}
//                 <span style={{ color: '#0086f9' }}>R</span>
//                 <span style={{ color: '#ff4131' }}>e</span>
//                 <span style={{ color: '#febd01' }}>v</span>
//                 <span style={{ color: '#0086f9' }}>i</span>
//                 <span style={{ color: '#00aa4a' }}>e</span>
//                 <span style={{ color: '#ff4131' }}>w</span>
//                 <span style={{ color: '#000000' }}>!</span>
//                 </h2>


//           {/* Subheading */}
//           <p
//             className="text-xl text-black font-normal mb-8"
//             style={{
              
//               textShadow: '-1px 1px 3px rgba(0, 0, 0, 0.2)', // Slight shadow for subheading
//             }}
//           >
//             Whether you've worked with us before, appreciate our services, or simply enjoy exploring our website, click the image and share your feedback with Pinnacle Laboratory!
//           </p>
//         </div>

//         {/* Right: Images Section */}
//         <div className="w-full lg:w-1/2 flex justify-center items-center gap-16 px-4">
//           {/* Google Reviews */}
//           <a
//             href="https://g.page/r/CSQ6jOlBlGcFEBM/review"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition-transform duration-200 ease-in-out"
//           >
//             <img
//               src="/GoogleReview_Tap.png"
//               alt="Leave a review on Google"
//               className="w-[400px] lg:w-[400px] h-auto rounded-md"
//               style={{ boxShadow: "none", borderRadius: "0px" }}
//             />
//           </a>

//           {/* Yelp Logo */}
//           <a
//             href="https://www.yelp.com/biz/pinnacle-laboratory-lawndale?hl=en_US"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition-transform duration-200 ease-in-out"
//           >
//             <img
//               src="/ReviewYelp.png"
//               alt="Leave a review on Yelp"
//               className="w-[400px] lg:w-[400px] h-auto rounded-md"
//               style={{ boxShadow: "none", borderRadius: "0px" }}
//             />
//           </a>
//         </div>
//       </div>
//     // </div>
//   );
// }













'use client';
import React from 'react';

export default function Review() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row items-center bg-gradient-to-r from-[#ececec] to-[#f0f0f0] p-6 sm:p-12 rounded-lg space-y-6 sm:space-y-0 sm:space-x-8">
      
      {/* Left: Text Section */}
      <div className="w-full sm:w-1/2 px-4 text-center sm:text-left">
        {/* Main Title */}
        <h2 className="text-black text-3xl sm:text-5xl font-extrabold mb-1 leading-tight">
          Check Out Our 
        </h2>
        <h2
          className="text-black text-6xl sm:text-8xl font-extrabold mb-4 leading-tight"
          style={{ textShadow: '-2px 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          {' '}
          <span style={{ color: '#0086f9' }}>R</span>
          <span style={{ color: '#ff4131' }}>e</span>
          <span style={{ color: '#febd01' }}>v</span>
          <span style={{ color: '#0086f9' }}>i</span>
          <span style={{ color: '#00aa4a' }}>e</span>
          <span style={{ color: '#ff4131' }}>w</span>
          <span style={{ color: '#febd01' }}>s</span>
          <span style={{ color: '#000000' }}>!</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-black font-normal">
        See what others are saying about Pinnacle Laboratory! Click the image to explore reviews from our clients and learn more about their experiences with our services.        </p>
      </div>

      {/* Right: Images Section */}
      <div className="w-full sm:w-1/2 flex flex-row sm:flex-row justify-center items-center gap-6 sm:gap-16 px-4">
        {/* Google Reviews */}
        <a
          href="https://www.google.com/search?q=Pinnacle+Laboratory+google+Reviews&sca_esv=804bf02857783378&biw=1714&bih=1352&sxsrf=AHTn8zqdhNq-5JL4AdEKa1DNVXVjpIdbZg%3A1743714309048&ei=BfjuZ_nWAqGgur8PhfeEkQY&ved=0ahUKEwi57ev_4byMAxUhkO4BHYU7IWIQ4dUDCBA&uact=5&oq=Pinnacle+Laboratory+google+Reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiIlBpbm5hY2xlIExhYm9yYXRvcnkgZ29vZ2xlIFJldmlld3MyBRAhGKsCSMoPULcHWOkNcAF4AJABAJgBR6AB3wOqAQE4uAEDyAEA-AEBmAIIoALFA8ICChAAGLADGNYEGEfCAgcQIxiwAhgnwgILEAAYgAQYhgMYigXCAggQABiiBBiJBcICCBAAGIAEGKIEwgIFEAAY7wXCAggQIRigARjDBMICChAhGKABGMMEGAqYAwCIBgGQBgSSBwE4oAeSF7IHATe4B8ED&sclient=gws-wiz-serp#lrd=0x80c2b5da8ee1c1b7:0x5679441e98c3a24,1,,,,"
          // href="https://g.page/r/CSQ6jOlBlGcFEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <img
            src="/GoogleReview_Tap.png"
            alt="Leave a review on Google"
            className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto rounded-md"
            style={{ boxShadow: "none", borderRadius: "0px" }}
          />
        </a>

        {/* Yelp Logo */}
        <a
          // href="https://www.yelp.com/biz/pinnacle-laboratory-lawndale?hl=en_US"
          href="https://www.yelp.com/biz/pinnacle-laboratory-lawndale#reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <img
            src="/ReviewYelp.png"
            alt="Leave a review on Yelp"
            className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto rounded-md"
            style={{ boxShadow: "none", borderRadius: "0px" }}
          />
        </a>
      </div>
    </div>
  );
}
