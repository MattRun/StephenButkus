'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

type SidebarNavigationProps = {
  activeCategory: string; // Assuming activeCategory is a string
  onSmoothScroll: (id: string, page?: string | null) => void; // Function signature
};

export default function SidebarNavigation({
  activeCategory,
  onSmoothScroll,
}: SidebarNavigationProps) {
  const [activeAccordion, setActiveAccordion] = useState<string>(
    activeCategory || ''
  );

  const toggleAccordion = (category: string) => {
    setActiveAccordion(activeAccordion === category ? '' : category);
  };

  return (
    <div className="w-[15%] bg-white max-h-screen shadow-md border-r border-gray-300 fixed left-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold text-blue-600 mb-4">Resources Navigation</h2>
        <div className="space-y-4">
          {/* Asbestos Accordion */}
          <div>
            <button
              className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
              onClick={() => toggleAccordion('asbestos')}
            >
              Asbestos Resources
              {activeAccordion === 'asbestos' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
            </button>
            {activeAccordion === 'asbestos' && (
              <ul className="mt-2 ml-4 space-y-2 text-gray-600">
                <li>
                  <button
                    onClick={() =>
                      onSmoothScroll('#registrants-database', '/dashboard/pages/resources/professionalresources/asbestosresources')
                    }
                    className="hover:underline text-left"
                  >
                    Asbestos Registrants Database
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onSmoothScroll('#standards', '/dashboard/pages/resources/professionalresources/asbestosresources')
                    }
                    className="hover:underline text-left"
                  >
                    Asbestos Standards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onSmoothScroll('#contractor-registration', '/dashboard/pages/resources/professionalresources/asbestosresources')
                    }
                    className="hover:underline text-left"
                  >
                    Contractor Registration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onSmoothScroll('#exam-packet', '/dashboard/pages/resources/professionalresources/asbestosresources')
                    }
                    className="hover:underline text-left"
                  >
                    Exam Application Packet
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onSmoothScroll('#consultant-certification', '/dashboard/pages/resources/professionalresources/asbestosresources')
                    }
                    className="hover:underline text-left"
                  >
                    Consultant Certification
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      onSmoothScroll('#contact-info', '/dashboard/pages/resources/professionalresources/asbestosresources')
                    }
                    className="hover:underline text-left"
                  >
                    Contact Information
                  </button>
                </li>
              </ul>
            )}
          </div>

             {/* Lead Accordion */}
             <div>
            <button
              className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
              onClick={() => toggleAccordion('lead')}
            >
              Lead Resources
              {activeAccordion === 'lead' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
            </button>
            {activeAccordion === 'lead' && (
              <ul className="mt-2 ml-4 space-y-2 text-gray-600">
                <li>
                  <button
                    onClick={() => onSmoothScroll('#title17', '/dashboard/pages/resources/professionalresources/leadresources')}
                    className="hover:underline text-left"
                  >
                    Title 17 Regulations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSmoothScroll('#rrp-program', '/dashboard/pages/resources/professionalresources/leadresources')}
                    className="hover:underline text-left"
                  >
                    EPA Lead Renovation Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSmoothScroll('#training-certification', '/dashboard/pages/resources/professionalresources/leadresources')}
                    className="hover:underline text-left"
                  >
                    Lead Training & Certification
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSmoothScroll('#compliance-requirements', '/dashboard/pages/resources/professionalresources/leadresources')}
                    className="hover:underline text-left"
                  >
                    Compliance Requirements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSmoothScroll('#contact-info', '/dashboard/pages/resources/professionalresources/leadresources')}
                    className="hover:underline text-left"
                  >
                    Contact Information
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Placeholder for Other Categories */}
{/* Analytical Resources Accordion */}
            <div>
              <button
                className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
                onClick={() => toggleAccordion('analytical')}
              >
                Analytical Resources
                {activeAccordion === 'analytical' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
              </button>
              {activeAccordion === 'analytical' && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-600">
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#calico-lab', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      CALICO Laboratory
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#industrial-relations', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      CAL/OSHA Industrial Relations
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#section-5208-asbestos', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      Title 8 Section 5208 (Asbestos)
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#careers-dir', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      Department of Industrial Relations Careers
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#section-5197', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      Title 8 Section 5197
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#title-8-1532', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      Section 1532
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#guides-osha', '/dashboard/pages/resources/professionalresources/analyticalresources')}
                      className="hover:underline text-left"
                    >
                      The Guide To
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div>
  <button
    className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
    onClick={() => toggleAccordion('mold')}
  >
    Mold Resources
    {activeAccordion === 'mold' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
  </button>
  {activeAccordion === 'mold' && (
    <ul className="mt-2 ml-4 space-y-2 text-gray-600">
      <li>
        <button
          onClick={() => onSmoothScroll('#introduction', '/dashboard/pages/resources/professionalresources/moldresources')}
          className="hover:underline text-left"
        >
          Introduction
        </button>
      </li>
      <li>
        <button
          onClick={() => onSmoothScroll('#health-effects', '/dashboard/pages/resources/professionalresources/moldresources')}
          className="hover:underline text-left"
        >
          Health Effects
        </button>
      </li>
      <li>
        <button
          onClick={() => onSmoothScroll('#prevention-control', '/dashboard/pages/resources/professionalresources/moldresources')}
          className="hover:underline text-left"
        >
          Prevention and Control
        </button>
      </li>
      <li>
        <button
          onClick={() => onSmoothScroll('#cleanup-guidelines', '/dashboard/pages/resources/professionalresources/moldresources')}
          className="hover:underline text-left"
        >
          Cleanup Guidelines
        </button>
      </li>
      <li>
        <button
          onClick={() => onSmoothScroll('#additional-resources', '/dashboard/pages/resources/professionalresources/moldresources')}
          className="hover:underline text-left"
        >
          Additional Resources
        </button>
      </li>
    </ul>
  )}
</div>

            <div className="space-y-4">
  {/* Bloodborne Pathogens Main Header */}
  <div>
    <button
      className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
      onClick={() => toggleAccordion('bloodborne')}
    >
      Bloodborne Pathogens
      {activeAccordion === 'bloodborne' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
    </button>
    {activeAccordion === 'bloodborne' && (
      <ul className="mt-2 ml-4 space-y-2 text-gray-600">
        <li>
          <button
            onClick={() => onSmoothScroll('#bloodborne-overview', '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources')}
            className="hover:underline text-left"
          >
            Overview
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#exposure-control', '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources')}
            className="hover:underline text-left"
          >
            Exposure Control Plan
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#training', '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources')}
            className="hover:underline text-left"
          >
            Training
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#ppe', '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources')}
            className="hover:underline text-left"
          >
            Personal Protective Equipment (PPE)
          </button>
        </li>
      </ul>
    )}
  </div>

  {/* Lockout/Tagout (LOTO) Main Header */}
  <div>
    <button
      className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
      onClick={() => toggleAccordion('loto')}
    >
      Lockout/Tagout (LOTO)
      {activeAccordion === 'loto' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
    </button>
    {activeAccordion === 'loto' && (
      <ul className="mt-2 ml-4 space-y-2 text-gray-600">
        <li>
          <button
            onClick={() => onSmoothScroll('#loto-overview', '/dashboard/pages/resources/professionalresources/lockouttagoutresources')}
            className="hover:underline text-left"
          >
            Overview
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#requirements', '/dashboard/pages/resources/professionalresources/lockouttagoutresources')}
            className="hover:underline text-left"
          >
            Requirements
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#hazards', '/dashboard/pages/resources/professionalresources/lockouttagoutresources')}
            className="hover:underline text-left"
          >
            Common Hazards
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#procedures', '/dashboard/pages/resources/professionalresources/lockouttagoutresources')}
            className="hover:underline text-left"
          >
            Procedures
          </button>
        </li>
      </ul>
    )}
  </div>

  {/* Confined Spaces Main Header */}
  <div>
    <button
      className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
      onClick={() => toggleAccordion('confined-spaces')}
    >
      Confined Spaces
      {activeAccordion === 'confined-spaces' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
    </button>
    {activeAccordion === 'confined-spaces' && (
      <ul className="mt-2 ml-4 space-y-2 text-gray-600">
        <li>
          <button
            onClick={() => onSmoothScroll('#confined-spaces-overview', '/dashboard/pages/resources/professionalresources/confinedspacesresources')}
            className="hover:underline text-left"
          >
            Overview
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#permit-spaces', '/dashboard/pages/resources/professionalresources/confinedspacesresources')}
            className="hover:underline text-left"
          >
            Permit-Required Spaces
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#training', '/dashboard/pages/resources/professionalresources/confinedspacesresources')}
            className="hover:underline text-left"
          >
            Training
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#monitoring', '/dashboard/pages/resources/professionalresources/confinedspacesresources')}
            className="hover:underline text-left"
          >
            Atmospheric Monitoring
          </button>
        </li>
      </ul>
    )}
  </div>

  {/* General Work Safety Main Header */}
  <div>
    <button
      className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
      onClick={() => toggleAccordion('work-safety')}
    >
      General Work Safety
      {activeAccordion === 'work-safety' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
    </button>
    {activeAccordion === 'work-safety' && (
      <ul className="mt-2 ml-4 space-y-2 text-gray-600">
        <li>
          <button
            onClick={() => onSmoothScroll('#injury-prevention', '/dashboard/pages/resources/professionalresources/workersafetyresources')}
            className="hover:underline text-left"
          >
            Injury and Illness Prevention Programs
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#hazard-communication', '/dashboard/pages/resources/professionalresources/workersafetyresources')}
            className="hover:underline text-left"
          >
            Hazard Communication
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#ppe-requirements', '/dashboard/pages/resources/professionalresources/workersafetyresources')}
            className="hover:underline text-left"
          >
            Personal Protective Equipment (PPE)
          </button>
        </li>
        <li>
          <button
            onClick={() => onSmoothScroll('#incident-reporting', '/dashboard/pages/resources/professionalresources/workersafetyresources')}
            className="hover:underline text-left"
          >
            Incident Reporting
          </button>
        </li>
      </ul>
    )}
  </div>
</div>

                      
            <div>
              <button
                className="w-full text-left flex justify-between items-center font-semibold text-md text-gray-700"
                onClick={() => toggleAccordion('hazwoper')}
              >
                HAZWOPER Resources
                {activeAccordion === 'hazwoper' ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
              </button>
              {activeAccordion === 'hazwoper' && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-600">
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#regulations', '/dashboard/pages/resources/professionalresources/hazwoperresources')}
                      className="hover:underline text-left"
                    >
                      HAZWOPER Regulations
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#training-requirements', '/dashboard/pages/resources/professionalresources/hazwoperresources')}
                      className="hover:underline text-left"
                    >
                      Training Requirements
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#emergency-response', '/dashboard/pages/resources/professionalresources/hazwoperresources')}
                      className="hover:underline text-left"
                    >
                      Emergency Response Guidelines
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSmoothScroll('#contact-info', '/dashboard/pages/resources/professionalresources/hazwoperresources')}
                      className="hover:underline text-left"
                    >
                      Contact Information
                    </button>
                  </li>
                </ul>
              )}
              
            </div>

        </div>
      </div>
    </div>
  );
}
