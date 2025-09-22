// components/ProjectSidebarMobile.tsx
'use client';

import { useState } from 'react';
import { Folder } from 'lucide-react';
// import Image from 'next/image';

export default function ProjectSidebarMobile({ projects, onSelect }: { projects: string[]; onSelect: (image: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Folder Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 left-5 z-50 p-3 bg-black/70 text-white rounded-full hover:bg-white hover:text-black transition"
      >
        <Folder className="w-6 h-6" />
      </button>

      {/* Slide-Out Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/80 text-white z-40 transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">Project Images</h2>
          <ul className="space-y-2">
            {projects.map((projectImage, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline"
                onClick={() => {
                  onSelect(projectImage);
                  setOpen(false);
                }}
              >
                {projectImage.replace('.jpg', '')}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay when open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-30"
        ></div>
      )}
    </>
  );
}
