// app/dashboard/components/MainContent.tsx
import CourseCard from './CourseCard';

export default function MainContent() {
  return (
    <div className="flex-grow p-8 space-y-6 bg-gray-100">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* <button className="text-sm font-semibold text-blue-500">Subscribe Now!</button> */}
          <button className="text-sm font-semibold text-blue-500">Full Statistic</button>
        </div>
      </div>

      {/* GPA and Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Certification</h2>
          <button className="text-sm font-semibold text-blue-500">Download CDPH Certification</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Course Completion</h2>
          <p>Completed: 80/120</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Exams</h2>
          <p>Completed: 5/12</p>
        </div>
      </div>

      {/* Courses Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard title="AHERA Asbestos Worker (Initial) - 32 Hour Course" status="In Progress" progress={70} />
        <CourseCard title="AHERA Contractor/Supervisor (Refresher) - 8 Hour Course" status="Completed" progress={100} />
        <CourseCard title="Bloodborne Pathogens (Online) - 1 Hour Course" status="In Progress" progress={50} />
        {/* Add more CourseCards as needed */}
      </div>
            {/* Google Calendar Embed */}
            <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-7xl">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&title=AEHS%20SCHOOL&src=bWF0dHJ1bjI3QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
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
}
