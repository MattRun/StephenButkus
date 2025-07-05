// app/portal/layout.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Fetch token to check if the user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if no token
      router.push('/pages/auth/signin');
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar component can go here */}
      {/* <aside className="w-64 bg-gray-800 text-white p-4">
  <ul>
    <li><Link href="/dashboard/pages/auth/portal/dashboard">Dashboard</Link></li>
    <li><Link href="/dashboard/pages/auth/portal/courses">Courses</Link></li>
    <li><Link href="/dashboard/pages/auth/portal/account">Account</Link></li>
    <li><Link href="/dashboard/pages/auth/portal/notifications">Notifications</Link></li>
  </ul>
</aside>

       */}
      {/* Main Content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
