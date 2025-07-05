'use client';

import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import SidebarLayout from './SidebarLayout';

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Dummy handler for onCategorySelect
  const handleCategorySelect = (category: any) => {
    console.log('Selected Category:', category);
  };

  return (
    <>
      {/* Hamburger Menu */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-100 rounded-lg shadow-md"
        onClick={toggleDrawer}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-gray-800" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <aside className="w-64 bg-white h-full shadow-lg">
          <SidebarLayout onCategorySelect={handleCategorySelect} />
        </aside>
      </div>
    </>
  );
};

export default MobileDrawer;
