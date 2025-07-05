// app/dashboard/page.tsx
'use client';

import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar />
      <MainContent />
    </div>
  );
}
