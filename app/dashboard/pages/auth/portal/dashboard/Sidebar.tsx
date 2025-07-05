// app/dashboard/components/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-6 shadow-md h-screen flex flex-col">
      <div className="flex items-center space-x-4 mb-8">
        <Image
          src="/path-to-user-icon.jpg" // Replace with actual path to user icon
          width={50}
          height={50}
          alt="User profile"
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">Adam</p>
          <p className="text-sm text-gray-600">Student</p>
        </div>
      </div>

      {/* Navigation Links */}
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
