// app/dashboard/page.tsx
'use client';

import Sidebar from '../dashboard/Sidebar';
import FormPage from './FormPage';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <FormPage />
      </div>
    </div>
  );
}
