'use client';
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="p-8 text-black">
      <h2 className="text-2xl font-bold mb-4 text-black">Courses</h2>
      <p>View the courses you’re enrolled in and access course materials.</p>
      <nav className="flex flex-col space-y-4">
  <Link href="/dashboard/pages/auth/portal/dashboard" className="text-gray-800 hover:text-blue-600">
    Dashboard
  </Link>
  <Link href="/dashboard/pages/auth/portal/courses" className="text-gray-800 hover:text-blue-600">
    Courses
  </Link>
  <Link href="/dashboard/pages/auth/portal/registration" className="text-gray-800 hover:text-blue-600">
    Registration
  </Link>
  <Link href="/dashboard/pages/auth/portal/notifications" className="text-gray-800 hover:text-blue-600">
    Notifications
  </Link>
  <Link href="/dashboard/pages/auth/portal/account" className="text-gray-800 hover:text-blue-600">
    Account
  </Link>
</nav>
    </div>
    
  );
}
