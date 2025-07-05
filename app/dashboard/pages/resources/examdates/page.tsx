'use client';
import React, { useState } from 'react';

// Courses list for dropdown
const courses = [
  'Asbestos Worker - Initial',
  'Asbestos Worker - Refresher',
  'Contractor/Supervisor - Initial',
  'Contractor/Supervisor - Refresher',
  'Asbestos Building Inspector - Initial',
  'Asbestos Building Inspector - Refresher',
  'Lead Sample Technician',
  'Mold Sampling and Analysis',
  'Analytical PLM Analysis - Initial',
  'HAZWOPER 40-Hour',
  'Worker Safety (OSHA 30)',
  'CPR, AED & First Aid',
  'Confined Spaces - Coming Soon',
  'Bloodborne Pathogens - Coming Soon',
  'Lock Out, Tag Out - Coming Soon'
];

// Exam data with each date separated into its own row
const examData = [
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'January 19-21', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'February 16-18', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'March 15-17', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'April 19-21', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'May 17-19', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'June 21-23', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'July 19-21', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'August 16-18', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'September 20-22', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'October 18-20', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'November 15-17', startTime: '9:00 AM', endTime: '5:00 PM' },
  { course: 'Asbestos Worker - Initial', location: 'Los Angeles', instructor: 'Jon Doe', date: 'December 13-16', startTime: '9:00 AM', endTime: '5:00 PM' },

  // Asbestos Worker - Refresher
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'January 19', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'February 16', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'March 15', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'April 19', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'May 17', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'June 21', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'July 19', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'August 16', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'September 20', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'October 18', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'November 15', startTime: '9:00 AM', endTime: '3:00 PM' },
  { course: 'Asbestos Worker - Refresher', location: 'San Francisco', instructor: 'Orville Wright', date: 'December 13', startTime: '9:00 AM', endTime: '3:00 PM' },

  // Contractor/Supervisor - Initial
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'January 19-21', startTime: '9:00 AM', endTime: '6:00 PM' },
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'February 16-18', startTime: '9:00 AM', endTime: '6:00 PM' },
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'March 15-17', startTime: '9:00 AM', endTime: '6:00 PM' },
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'April 19-21', startTime: '9:00 AM', endTime: '6:00 PM' },
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'May 17-19', startTime: '9:00 AM', endTime: '6:00 PM' },
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'June 21-23', startTime: '9:00 AM', endTime: '6:00 PM' },
  { course: 'Contractor/Supervisor - Initial', location: 'New York', instructor: 'Steve Vaughn', date: 'July 19-21', startTime: '9:00 AM', endTime: '6:00 PM' },

  // Contractor/Supervisor - Refresher
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'January 19', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'February 16', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'March 15', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'April 19', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'May 17', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'June 21', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Contractor/Supervisor - Refresher', location: 'New York', instructor: 'Steve Vaughn', date: 'July 19', startTime: '9:00 AM', endTime: '3:00 PM' },

// Building Inspector - Initial
{ course: 'Building Inspector - Initial', location: 'Los Angeles', instructor: 'Orville Wright', date: 'January 19-21', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Building Inspector - Initial', location: 'Los Angeles', instructor: 'Orville Wright', date: 'February 16-18', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Building Inspector - Initial', location: 'Los Angeles', instructor: 'Orville Wright', date: 'March 15-17', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Building Inspector - Initial', location: 'Los Angeles', instructor: 'Orville Wright', date: 'April 19-21', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Building Inspector - Initial', location: 'Los Angeles', instructor: 'Orville Wright', date: 'May 17-19', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Building Inspector - Initial', location: 'Los Angeles', instructor: 'Orville Wright', date: 'June 21-23', startTime: '9:00 AM', endTime: '5:00 PM' },

// Building Inspector - Refresher
{ course: 'Building Inspector - Refresher', location: 'San Francisco', instructor: 'Jon Doe', date: 'January 19', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Building Inspector - Refresher', location: 'San Francisco', instructor: 'Jon Doe', date: 'February 16', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Building Inspector - Refresher', location: 'San Francisco', instructor: 'Jon Doe', date: 'March 15', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Building Inspector - Refresher', location: 'San Francisco', instructor: 'Jon Doe', date: 'April 19', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'Building Inspector - Refresher', location: 'San Francisco', instructor: 'Jon Doe', date: 'May 17', startTime: '9:00 AM', endTime: '3:00 PM' },

// Lead Courses
{ course: 'Lead Sample Technician', location: 'San Diego', instructor: 'Steve Vaughn', date: 'January 15-16', startTime: '8:00 AM', endTime: '4:00 PM' },
{ course: 'Lead Sample Technician', location: 'San Diego', instructor: 'Steve Vaughn', date: 'February 20-21', startTime: '8:00 AM', endTime: '4:00 PM' },
{ course: 'Lead Sample Technician', location: 'San Diego', instructor: 'Steve Vaughn', date: 'March 15-16', startTime: '8:00 AM', endTime: '4:00 PM' },
// More Lead Courses
{ course: 'Lead Sample Technician', location: 'San Francisco', instructor: 'Orville Wright', date: 'April 10-11', startTime: '8:00 AM', endTime: '4:00 PM' },
{ course: 'Lead Sample Technician', location: 'San Diego', instructor: 'Steve Vaughn', date: 'July 12-13', startTime: '8:00 AM', endTime: '4:00 PM' },
{ course: 'Lead Sample Technician', location: 'Los Angeles', instructor: 'Jon Doe', date: 'September 18-19', startTime: '8:00 AM', endTime: '4:00 PM' },

// Mold Courses
{ course: 'Introduction to Mold Sampling', location: 'Los Angeles', instructor: 'Orville Wright', date: 'February 20-22', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Introduction to Mold Sampling', location: 'Los Angeles', instructor: 'Orville Wright', date: 'May 22-24', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Introduction to Mold Sampling', location: 'Los Angeles', instructor: 'Orville Wright', date: 'September 19-21', startTime: '9:00 AM', endTime: '5:00 PM' },
// Continuing Mold Courses
{ course: 'Introduction to Mold Sampling', location: 'San Diego', instructor: 'Steve Vaughn', date: 'June 10-12', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Introduction to Mold Sampling', location: 'San Francisco', instructor: 'Orville Wright', date: 'October 14-16', startTime: '9:00 AM', endTime: '5:00 PM' },

// Analytical Courses
{ course: 'NIOSH 582 Equivalency', location: 'New York', instructor: 'Steve Vaughn', date: 'April 5-7', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Introduction to PLM Analysis', location: 'Los Angeles', instructor: 'Jon Doe', date: 'March 10-12', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Advanced Asbestos PLM Analysis', location: 'San Francisco', instructor: 'Orville Wright', date: 'July 15-17', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'NIOSH 582 Equivalency', location: 'San Francisco', instructor: 'Jon Doe', date: 'July 25-27', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Introduction to PLM Analysis', location: 'New York', instructor: 'Steve Vaughn', date: 'August 15-17', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Advanced Asbestos PLM Analysis', location: 'Los Angeles', instructor: 'Orville Wright', date: 'September 20-22', startTime: '9:00 AM', endTime: '5:00 PM' },

// HAZWOPER Courses
{ course: 'HAZWOPER 40-Hour', location: 'San Francisco', instructor: 'Steve Vaughn', date: 'February 14-18', startTime: '8:00 AM', endTime: '5:00 PM' },
{ course: 'HAZWOPER 24-Hour', location: 'San Francisco', instructor: 'Jon Doe', date: 'March 22-24', startTime: '8:00 AM', endTime: '5:00 PM' },
{ course: 'HAZWOPER 8-Hour Refresher', location: 'San Diego', instructor: 'Orville Wright', date: 'April 10', startTime: '8:00 AM', endTime: '5:00 PM' },
// Continuing HAZWOPER Courses
{ course: 'HAZWOPER 8-Hour Refresher', location: 'San Francisco', instructor: 'Steve Vaughn', date: 'May 5', startTime: '8:00 AM', endTime: '5:00 PM' },
{ course: 'HAZWOPER 24-Hour', location: 'Los Angeles', instructor: 'Jon Doe', date: 'June 14-16', startTime: '8:00 AM', endTime: '5:00 PM' },
{ course: 'HAZWOPER 40-Hour', location: 'San Diego', instructor: 'Orville Wright', date: 'August 1-5', startTime: '8:00 AM', endTime: '5:00 PM' },

// Worker Safety Courses
{ course: 'Worker Safety Awareness', location: 'Los Angeles', instructor: 'Steve Vaughn', date: 'January 15', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Construction Site Safety', location: 'Los Angeles', instructor: 'Orville Wright', date: 'March 1', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Electrical Safety', location: 'San Francisco', instructor: 'Jon Doe', date: 'June 12', startTime: '9:00 AM', endTime: '5:00 PM' },
// Additional Worker Safety Courses
{ course: 'Construction Site Safety', location: 'San Diego', instructor: 'Steve Vaughn', date: 'April 4', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Worker Safety Awareness', location: 'San Francisco', instructor: 'Orville Wright', date: 'May 10', startTime: '9:00 AM', endTime: '5:00 PM' },
{ course: 'Electrical Safety', location: 'Los Angeles', instructor: 'Jon Doe', date: 'July 20', startTime: '9:00 AM', endTime: '5:00 PM' },

// CPR, AED, & First Aid
{ course: 'CPR, AED & First Aid', location: 'San Diego', instructor: 'Jon Doe', date: 'May 12', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'CPR, AED & First Aid', location: 'San Diego', instructor: 'Steve Vaughn', date: 'August 22', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'CPR, AED & First Aid', location: 'San Diego', instructor: 'Orville Wright', date: 'November 11', startTime: '9:00 AM', endTime: '3:00 PM' },
// Continuing CPR, AED & First Aid
{ course: 'CPR, AED & First Aid', location: 'San Francisco', instructor: 'Jon Doe', date: 'June 5', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'CPR, AED & First Aid', location: 'San Diego', instructor: 'Steve Vaughn', date: 'September 10', startTime: '9:00 AM', endTime: '3:00 PM' },
{ course: 'CPR, AED & First Aid', location: 'Los Angeles', instructor: 'Orville Wright', date: 'November 28', startTime: '9:00 AM', endTime: '3:00 PM' },

// Lock Out, Tag Out - Coming Soon
{ course: 'Lock Out, Tag Out', location: 'Coming Soon', instructor: 'Coming Soon', date: 'TBD', startTime: 'TBD', endTime: 'TBD' },

// Bloodborne Pathogens - Coming Soon
{ course: 'Bloodborne Pathogens', location: 'Coming Soon', instructor: 'Coming Soon', date: 'TBD', startTime: 'TBD', endTime: 'TBD' },

// Confined Spaces - Coming Soon
{ course: 'Confined Spaces', location: 'Coming Soon', instructor: 'Coming Soon', date: 'TBD', startTime: 'TBD', endTime: 'TBD' },




  
];

export default function ExamDates() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [filteredData, setFilteredData] = useState(examData);
  const [sortType, setSortType] = useState('date'); // Default sort by date
// Handler for <input>
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const course = event.target.value;
  setSelectedCourse(course);
  if (course) {
    const data = examData.filter((item) => item.course === course);
    setFilteredData(data);
  } else {
    setFilteredData(examData);
  }
};

// Handler for <select>
const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const course = event.target.value;
  setSelectedCourse(course);
  if (course) {
    const data = examData.filter((item) => item.course === course);
    setFilteredData(data);
  } else {
    setFilteredData(examData);
  }
};

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const course = event.target.value;
    setSelectedCourse(course);
    if (course) {
      const data = examData.filter((item) => item.course === course);
      setFilteredData(data);
    } else {
      setFilteredData(examData);
    }
  };
  
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    setSortType(sort);
  
    let sortedData = [...filteredData];
  
    // Sorting logic based on selected sort type
    switch (sort) {
      case 'date':
        sortedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'location':
        sortedData.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case 'time':
        sortedData.sort(
          (a, b) =>
            new Date(`1970-01-01T${a.startTime}`).getTime() -
            new Date(`1970-01-01T${b.startTime}`).getTime()
        );
        break;
      default:
        break;
    }
    setFilteredData(sortedData);
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Exam Dates</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
        <input
  type="text"
  placeholder="Search for course..."
  className="px-4 py-2 rounded bg-gray-800 text-white w-full mr-4"
  value={selectedCourse}
  onChange={handleInputChange} // Use the input handler here
/>

<select
  className="px-4 py-2 bg-gray-800 text-white rounded"
  value={selectedCourse}
  onChange={handleSelectChange} // Use the select handler here
>
  <option value="">All Courses</option>
  {courses.map((course, index) => (
    <option key={index} value={course}>
      {course}
    </option>
  ))}
</select>

        </div>

        <div className="flex items-center justify-end mt-4">
          <label className="mr-2">Sort By:</label>
          <select
            className="px-4 py-2 bg-gray-800 text-white rounded"
            value={sortType}
            onChange={handleSortChange}
          >
            <option value="date">Date</option>
            <option value="location">Location</option>
            <option value="time">Start Time</option>
          </select>
        </div>
      </div>

      <table className="w-full text-left table-auto bg-gray-800 text-white rounded-lg">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Instructor</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Start Time</th>
            <th className="px-4 py-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((exam, index) => (
            <tr key={index} className="bg-gray-700 hover:bg-gray-600">
              <td className="px-4 py-2">{exam.course}</td>
              <td className="px-4 py-2">{exam.location}</td>
              <td className="px-4 py-2">{exam.instructor}</td>
              <td className="px-4 py-2">{exam.date}</td>
              <td className="px-4 py-2">{exam.startTime}</td>
              <td className="px-4 py-2">{exam.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




// 'use client';
// import React from 'react';
// import { Button as ChakraButton } from '@chakra-ui/react';
// import { Button as NextUIButton } from '@nextui-org/react';
// import { ChevronRightIcon } from '@heroicons/react/24/solid';
// import { motion } from 'framer-motion';
// import { FaBeer, FaCoffee } from 'react-icons/fa';

// export default function ButtonTestPage() {
//   return (
//     <div className="min-h-screen bg-gray-800 py-10">
//       <div className="container mx-auto px-4 bg-gray-500">
//         <h1 className="text-4xl font-bold mb-8 text-center">Button Test Page</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-600">
          
//           {/* Box 1: Chakra UI Buttons */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">Chakra Buttons</h2>
//             <ChakraButton colorScheme="blue" size="lg" className="mb-4">Primary Button</ChakraButton>
//             <ChakraButton colorScheme="red" variant="outline" size="md" className="mb-4">Outline Button</ChakraButton>
//             <ChakraButton colorScheme="green" size="sm">Small Button</ChakraButton>
//           </motion.div>

//           {/* Box 2: NextUI Buttons */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">NextUI Buttons</h2>
//             <NextUIButton color="primary" auto className="mb-4">
//               NextUI Button 1
//             </NextUIButton>
//             <NextUIButton flat color="success" className="mb-4">
//               Flat Button
//             </NextUIButton>
//             <NextUIButton bordered color="warning">Bordered Button</NextUIButton>
//           </motion.div>

//           {/* Box 3: Icon & Loading Buttons */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">Icon & Loading</h2>
//             <ChakraButton colorScheme="yellow" leftIcon={<ChevronRightIcon className="h-5 w-5" />} className="mb-4">
//               With Icon
//             </ChakraButton>
//             <ChakraButton colorScheme="green" isLoading className="mb-4">
//               Loading Button
//             </ChakraButton>
//             <NextUIButton icon={<FaBeer />}>With Beer Icon</NextUIButton>
//           </motion.div>

//           {/* Box 4: Motion-Enhanced Buttons */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">Motion-Enhanced</h2>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-4">
//               <ChakraButton colorScheme="purple">Animated Chakra Button</ChakraButton>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <NextUIButton color="secondary">Animated NextUI Button</NextUIButton>
//             </motion.div>
//           </motion.div>

//           {/* Box 5: Ghost & Gradient Buttons */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">Ghost & Gradient</h2>
//             <NextUIButton flat color="gradient" className="mb-4">Gradient Button</NextUIButton>
//             <ChakraButton colorScheme="cyan" variant="link" className="mb-4">
//               Link Button
//             </ChakraButton>
//             <ChakraButton colorScheme="linkedin" variant="ghost">Ghost Button</ChakraButton>
//           </motion.div>

//           {/* Box 6: Icon Variations */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">Icon Variations</h2>
//             <ChakraButton leftIcon={<FaCoffee />} colorScheme="blue" className="mb-4">
//               Coffee Button
//             </ChakraButton>
//             <ChakraButton rightIcon={<ChevronRightIcon />} colorScheme="pink">
//               Arrow Button
//             </ChakraButton>
//           </motion.div>

//           {/* Box 7: Variants and Sizes */}
//           <motion.div 
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-2xl font-bold mb-4">Variants and Sizes</h2>
//             <NextUIButton size="xl" color="gradient" className="mb-4">
//               Large Button
//             </NextUIButton>
//             <ChakraButton colorScheme="orange" isDisabled className="mb-4">
//               Disabled Button
//             </ChakraButton>
//             <ChakraButton colorScheme="yellow" size="xs">
//               Extra Small Button
//             </ChakraButton>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
