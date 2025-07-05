// 'use client';
// import { motion } from 'framer-motion';
// import { User } from '@nextui-org/react';

// const testimonials = [
//   {
//     name: <strong style={{ fontSize: '1.5rem' }}>Pamela S.</strong>,
//     avatar: "https://i.pravatar.cc/150?img=3",
//     comment: <em>Great PowerPoint presentation… relevant information and up-to-date. Steve offered a well-balanced refresher course!</em>
//   },
//   {
//     name: <strong style={{ fontSize: '1.5rem' }}>Jordan S.</strong>,
//     avatar: "https://i.pravatar.cc/150?img=5",
//     comment: <em>AEHS has been an excellent resource for me and my guys to get their courses up to date. They are quick and efficient with the entire process.</em>
//   },
//   {
//     name: <strong style={{ fontSize: '1.5rem' }}>Julio B.</strong>,
//     avatar: "https://i.pravatar.cc/150?img=8",
//     comment: <em>I've been here for three courses and Steve the instructor has been great. He does his best to keep you engaged in the subject matter. I'll definitely be back to continue my environmental training and education with The Academy of Environmental Health and Safety.</em>
//   },
//   {
//     name: <strong style={{ fontSize: '1.5rem' }}>Richard C.</strong>,
//     avatar: "https://i.pravatar.cc/150?img=10",
//     comment: <em>Used AEHS to take my refresher courses that needed to get updated. They made the entire process easy and the staff was really friendly. I will keep coming to them for my course and recommend them for yours too!!</em>
//   },
//   // {
//   //   name: "Lisa Green",
//   //   avatar: "https://i.pravatar.cc/150?img=20",
//   //   comment: "The interactive nature of the course made learning so much easier. I highly recommend it."
//   // }
// ];

// const Testimonials = () => (
//   <div className="py-24 px-12 bg-gradient-to-r from-gray-700 to-gray-900">
//     <motion.h2
//       className="text-4xl font-bold text-center mb-12"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2 }}
//       viewport={{ once: true }}
//     >
//       What Our Students Say
//     </motion.h2>
//     <motion.div
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       {testimonials.map((testimonial, index) => (
//         <motion.div
//           key={index}
//           className="p-6 bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//           viewport={{ once: true }}
//         >
//           <User
//             src={testimonial.avatar}
//             name={testimonial.name}
//             size="lg"
//             bordered
//             squared
//             className="mb-4"
//           />
//           <p className="text-gray-600 text-md">
//             {testimonial.comment}
//           </p>
//         </motion.div>
//       ))}
//     </motion.div>
//   </div>
// );

// export default Testimonials;



'use client';
import { motion } from 'framer-motion';
import { Avatar } from '@nextui-org/react';

const testimonials = [
  {
    name: "Pamela S.",
    avatar: "https://i.pravatar.cc/150?img=3",
    comment: "Great PowerPoint presentation… relevant information and up-to-date. Steve offered a well-balanced refresher course!"
  },
  {
    name: "Jordan S.",
    avatar: "https://i.pravatar.cc/150?img=5",
    comment: "AEHS has been an excellent resource for me and my guys to get their courses up to date. They are quick and efficient with the entire process."
  },
  {
    name: "Julio B.",
    avatar: "https://i.pravatar.cc/150?img=8",
    comment: "I've been here for three courses and Steve the instructor has been great. He does his best to keep you engaged in the subject matter. I'll definitely be back to continue my environmental training and education with The Academy of Environmental Health and Safety."
  },
  {
    name: "Richard C.",
    avatar: "https://i.pravatar.cc/150?img=10",
    comment: "Used AEHS to take my refresher courses that needed to get updated. They made the entire process easy and the staff was really friendly. I will keep coming to them for my course and recommend them for yours too!!"
  },
];

const Testimonials = () => (
  <div className="py-24 px-12 bg-gradient-to-r from-gray-700 to-gray-900">
    <motion.h2
      className="text-4xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      What Our Students Say
    </motion.h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="p-6 bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <Avatar
              src={testimonial.avatar}
              size="lg"
              isBordered
              className="rounded-md" 
            />
            <strong className="text-lg">{testimonial.name}</strong>
          </div>
          <p className="text-gray-600 text-md">
            {testimonial.comment}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Testimonials;
