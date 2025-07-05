// 'use client';

// import React, { useState } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { ChevronUpIcon } from '@heroicons/react/24/solid';
// import styles from './faq.module.css';

// const faqData = [
//   {
//     category: "General Questions",
//     questions: [
//       { question: "What is the difference between a CAC and a CSST?", answer: "Answer content..." },
//       { question: "How do I apply to become a CAC?", answer: "Answer content..." },
//       { question: "What is the process for registering for a course?", answer: "You can register on our website by navigating to the course page and clicking 'Sign Up.'"},
//       { question: "Do I need to renew my certification?", answer: "Yes, certain certifications require annual renewal."},
//       { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, American Express, and corporate invoicing."},
//       { question: "Are there any prerequisites for the courses?", answer: "Some courses have prerequisites. Please review the course details."},
//       { question: "Where are the courses held?", answer: "Courses are held at our training center in Lawndale, CA. Remote and on-site options are available."},
//       { question: "Can I get a refund if I cancel my registration?", answer: "Refunds are available up to 7 days before the course."},
//     ],
//   },
//   // Add more categories and questions...
// ];

// const FAQContent = ({ selectedCategory }) => {
//   const [filteredFAQs, setFilteredFAQs] = useState(faqData);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     const filtered = faqData
//       .map(category => ({
//         ...category,
//         questions: category.questions.filter(faq =>
//           faq.question.toLowerCase().includes(searchTerm)
//         ),
//       }))
//       .filter(category => category.questions.length > 0);

//     setFilteredFAQs(filtered);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Search bar in black header */}
//       <header className={styles.header}>
//         <div className={styles.searchBar}>
//           <input
//             type="text"
//             placeholder="What can I help you with?"
//             onChange={handleSearch}
//             className={styles.searchInput}
//           />
//         </div>
//       </header>

//       <div className={styles.mainContent}>
//         {filteredFAQs.map((faqCategory, index) => (
//           <div key={index} className={styles.accordionWrapper}>
//             <h2 className={styles.faqCategoryTitle}>{faqCategory.category}</h2>

//             {faqCategory.questions.map((faq, i) => (
//               <Disclosure key={i}>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className={styles.faqQuestion}>
//                       {faq.question}
//                       <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className={styles.faqAnswer}>
//                       {faq.answer}
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQContent;

"use client";
import styles from "./faq.module.css";

import FaqItem from "./FaqItem";

const faqSections = {
  general: {
    basic: [
      {
        question: "Can I access the courses on mobile devices?",
        answer: "We are still working on handling the mobile versions.",
      },
      {
        question: "Do I need prior experience to take a course?",
        answer:
          "No, the Basic package is designed for beginners and does not require prior experience.",
      },
      {
        question: "How long do I have access to the courses?",
        answer:
          "You will have unlimited access to the courses for one year from the date of purchase.",
      },
    ],

    Asbestos: [
      {
        question:
          "How do I apply to become a Certified Asbestos Consultant (CAC) or Certified Site Surveillance Technician (CSST)?",
        answer: (
          <div className="text-base">
            {" "}
            {/* You can adjust the base text size here */}
            <p className="mb-2">
              Applications to become a CAC or CSST can be found online at
            </p>
            <p>
              <a
                href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
                className="text-blue-600 underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf
              </a>
            </p>
          </div>
        ),
      },
      {
        question: "When is the next Cal/OSHA CAC/CSST exam?",
        answer: (
          <div className="text-base">
            {" "}
            {/* You can adjust the base text size here */}
            <p className="mb-2">
              The remaining examination dates for 2024 are as follows:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>October 18-20</li>
              <li>November 15-17</li>
              <li>December 13-16</li>
            </ul>
            <p>
              More information can be found here:
              <a
                href="https://www.dir.ca.gov/DOSH/ACRU/Exam-Schedule.pdf"
                className="text-blue-600 underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Exam Schedule PDF
              </a>
            </p>
            <p className="mb-2">
              The remaining examination dates for 2025 are as follows:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>January 17-19</li>
              <li>February 21-23</li>
              <li>March 21-23</li>
              <li>April 18-20</li>
              <li>May 16-18</li>
              <li>June 20-22</li>
              <li>July 18-20</li>
              <li>August 15-17</li>
              <li>September 19-21</li>
              <li>October 17-19</li>
              <li>November 21-23</li>
              <li>December 12-14</li>
            </ul>
            <p className="mb-2">
              2025 CDPH Exam Dates (To Date) Registration Deadline:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                02/15/2025 - 02/23/2025 - Registration deadline 01/24/2025
              </li>
              <li>
                05/10/2025 - 05/18/2025 - Registration deadline 04/18/2025
              </li>
            </ul>
          </div>
        ),
      },
      {
        question:
          "What do I need to become a Certified Asbestos Consultant (CAC) or Certified Site Surveillance Technician (CSST)?",
        answer: (
          <div className="text-base">
            <h3 className="font-semibold text-lg mb-2">
              Certified Asbestos Consultant (CAC)
            </h3>
            <p>To become a Certified Asbestos Consultant (CAC), you need to:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Possess AHERA Training Certificates from a Cal/OSHA approved
                training provider for the following courses (plus all valid
                refresher certificates, as applicable):
                <ul className="list-decimal pl-5">
                  <li>Management Planner</li>
                  <li>Project Designer</li>
                  <li>Contractor/Supervisor</li>
                  <li>Building Inspector</li>
                </ul>
              </li>
              <li>
                Meet the minimum professional work experience and education
                requirements:
                <ul className="list-decimal pl-5">
                  <li>
                    1 year of asbestos-related experience + bachelor’s degree in
                    engineering, architecture, industrial hygiene, construction
                    management, or a related biological/physical science
                  </li>
                  <li>
                    2 years of asbestos-related experience + bachelor’s degree
                  </li>
                  <li>
                    3 years of asbestos-related experience + associate degree in
                    engineering, architecture, or related sciences
                  </li>
                  <li>
                    4 years of asbestos-related experience + high school diploma
                    or its equivalent
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="font-semibold text-lg mb-2">
              Certified Site Surveillance Technician (CSST)
            </h3>
            <p>
              To become a Certified Site Surveillance Technician (CSST), you
              need to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Possess AHERA Training Certificates from a Cal/OSHA approved
                training provider for the following courses (plus all valid
                refresher certificates, as applicable):
                <ul className="list-decimal pl-5">
                  <li>Contractor/Supervisor</li>
                  <li>Building Inspector</li>
                </ul>
              </li>
              <li>
                Meet the minimum professional work experience and education
                requirements:
                <ul className="list-decimal pl-5">
                  <li>
                    6 months of asbestos-related work experience under the
                    direct supervision of a Certified Asbestos Consultant
                  </li>
                  <li>
                    After 3 months of experience, a CSST candidate may request
                    to sit for a certification exam, but must complete an
                    additional 3 months of experience before certification is
                    issued.
                  </li>
                </ul>
              </li>
              <li>High school diploma or equivalent education</li>
            </ul>

            <p className="mt-4 text-sm italic">
              Note: For both CAC and CSST applicants, qualifying
              asbestos-related work experience is only credited if the applicant
              possesses valid AHERA training certificates during the time being
              claimed as qualifying work experience. No work experience will be
              accepted if it was obtained before receiving initial AHERA
              training, or during periods when the certificates had lapsed.
            </p>
          </div>
        ),
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      {
        question: "What is asbestos and why is it dangerous?",
        answer:
          "Asbestos is a naturally occurring mineral known for its heat resistance and durability. However, when disturbed, asbestos fibers can become airborne and inhaled, leading to serious health risks such as lung cancer, mesothelioma, and asbestosis.",
      },
      {
        question: "What jobs can I get with asbestos certification? ",
        answer:
          "With asbestos certification, you can work in roles like asbestos abatement worker, asbestos supervisor, building inspector, project designer, and management planner. These roles involve handling, removing, or managing asbestos-containing materials in buildings.",
      },
      {
        question:
          "What are the training requirements for asbestos professionals? ",
        answer:
          "Asbestos workers must complete a 32-hour training course, while supervisors undergo a 40-hour program. Both certifications require annual refresher courses to maintain compliance with regulatory standards​.",
      },
      {
        question: "Why is asbestos certification important?  ",
        answer:
          " Certification ensures that professionals handling asbestos are trained in safe removal practices, protecting themselves and others from exposure to hazardous asbestos fibers. It also ensures compliance with federal regulations like the EPA’s Asbestos Model Accreditation Plan.",
      },
      {
        question: "How often do I need to renew my asbestos certification? ",
        answer:
          "Most asbestos certifications are valid for one year. To stay certified, individuals must complete an annual refresher course that updates them on the latest industry regulations and safety practices.",
      },
      // Add more questions for "Basic"
    ],
    Analytical: [
      {
        question: "What is analytical training?",
        answer:
          "Analytical training provides education on laboratory analysis techniques, focusing on materials like asbestos, lead, and mold.",
      },
      {
        question: "Who should take analytical courses?",
        answer:
          "Professionals in environmental testing, laboratory technicians, and those conducting materials analysis.",
      },
      {
        question:
          "What certifications are available through analytical training?",
        answer:
          "Certifications vary but often include proficiency in EPA and OSHA-approved analytical techniques.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // Add more questions for "Basic"
    ],
    Lead: [
      {
        question: "What are the requirements for lead certification?",
        answer:
          "Lead workers and supervisors must complete EPA-approved training programs and pass a certification exam.",
      },
      {
        question: "What does lead certification allow me to do?",
        answer:
          "Certification permits professionals to inspect, assess, and remediate lead-based hazards in buildings.",
      },
      {
        question: "How often do I need to renew my lead certification?",
        answer:
          "Most lead certifications require renewal every two years with refresher training.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    Mold: [
      {
        question: "What is mold certification?",
        answer:
          "Mold certification trains professionals to identify, assess, and remediate mold contamination in residential and commercial spaces.",
      },
      {
        question: "Who should take mold training?",
        answer:
          "Home inspectors, environmental consultants, and remediation specialists benefit from mold certification.",
      },
      {
        question: "How long is mold certification valid?",
        answer:
          "Certifications generally last one year, after which refresher training is required.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    HAZWOPER: [
      {
        question: "What is HAZWOPER training?",
        answer:
          "HAZWOPER (Hazardous Waste Operations and Emergency Response) prepares workers to handle hazardous materials safely.",
      },
      {
        question: "Who needs HAZWOPER certification?",
        answer:
          "It’s required for workers in hazardous waste sites, emergency response teams, and cleanup operations.",
      },
      {
        question: "What levels of HAZWOPER training are available?",
        answer:
          "Training includes 8-hour, 24-hour, and 40-hour courses, depending on job responsibilities.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    WorkerSafety: [
      {
        question: "What topics are covered in worker safety training?",
        answer:
          "Worker safety training includes OSHA compliance, fall protection, PPE use, and hazard communication.",
      },
      {
        question: "Who needs worker safety training?",
        answer:
          "Anyone working in construction, industrial, or hazardous environments should undergo worker safety training.",
      },
      {
        question: "How often should worker safety training be refreshed?",
        answer:
          "OSHA recommends annual refresher courses to maintain compliance.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    CPRAEDFirstAid: [
      {
        question: "Who needs CPR, AED, and First Aid training?",
        answer:
          "This training is essential for first responders, teachers, childcare workers, and anyone wanting to be prepared for emergencies.",
      },
      {
        question: "What certifications are offered in this training?",
        answer:
          "Certifications typically include CPR, AED operation, and basic first aid for adults, children, and infants.",
      },
      {
        question: "How long is the certification valid?",
        answer:
          "Certifications generally last two years before renewal is required.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    ConfinedSpaces: [
      {
        question: "What is confined space training?",
        answer:
          "Training focuses on safety protocols for working in areas with limited entry and exit points.",
      },
      {
        question: "Who needs confined space certification?",
        answer:
          "Workers in industries like construction, manufacturing, and utilities often require this certification.",
      },
      {
        question: "What does the training include?",
        answer:
          "Topics include hazard identification, ventilation, entry/exit procedures, and emergency response.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    BloodbornePathogens: [
      {
        question: "What is bloodborne pathogens training?",
        answer:
          "This training educates workers on preventing exposure to infectious materials like HIV and Hepatitis B.",
      },
      {
        question: "Who needs this training?",
        answer:
          "Healthcare workers, first responders, and those handling biological materials must complete this training.",
      },
      {
        question: "How often is training required?",
        answer: "Annual refresher training is required under OSHA standards.",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    LockOutTagOut: [
      {
        question: "What is lockout/tagout training?",
        answer:
          "Training ensures workers know how to safely disable equipment during maintenance to prevent accidental startup.",
      },
      {
        question: "Who needs lockout/tagout certification?",
        answer:
          "Maintenance workers, machine operators, and facility managers often need this training.",
      },
      {
        question: "What regulations does the training cover?",
        answer:
          "Training covers OSHA’s Lockout/Tagout Standard (29 CFR 1910.147).",
      },
      // { question: '', answer: '' },
      // { question: '', answer: '' },
      // { question: '', answer: '' },

      // Add more questions for "Basic"
    ],
    purchasing: [
      {
        question: "How do I purchase a course?",
        answer: "You can purchase directly on our website...",
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept credit cards, PayPal, and more...",
      },
      // Add more questions for "Purchasing and Availability"
    ],
    desktop: [
      {
        question: "How do desktop applications work?",
        answer: "You can download desktop applications from...",
      },
      {
        question: "What systems are supported?",
        answer: "We support Windows, Mac, and Linux...",
      },
      // Add more questions for "Desktop Applications"
    ],
  },
  account: {
    accountSecurity: [
      {
        question: "How do I secure my account?",
        answer:
          "Use strong passwords that include a mix of letters, numbers, and special characters, and enable two-factor authentication for added security.",
      },
      {
        question: "What should I do if my account is compromised?",
        answer:
          "Immediately change your password, log out of all devices, and contact our support team to secure your account.",
      },
      // Add more questions for "Account Security"
    ],

    passwordReset: [
      {
        question: "How do I reset my password?",
        answer:
          'You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions sent to your email.',
      },
      {
        question: "What happens if I forget my password?",
        answer:
          'You can request a password reset link via email by clicking on "Forgot Password" and entering the email address associated with your account.',
      },
      // Add more questions for "Password Reset"
    ],
    billing: [
      {
        question: "How do payments for online courses work?",
        answer:
          "Payments for online courses are charged immediately, allowing you to sign up and start your course right away.",
      },
      {
        question: "How are in-person course payments handled?",
        answer:
          "In-person course payments may require additional contact before processing, depending on student sizes and instructor availability.",
      },
      // Add more questions for "Billing and Payment"
    ],
  },

  other: {
    generalSupport: [
      {
        question: "How can I contact customer support?",
        answer:
          'You can contact our support team via email, phone, or live chat. Visit our "Contact Us" page for more details.',
      },
      {
        question: "What are your customer support hours?",
        answer:
          "Our customer support is available Monday-Friday from 9 AM to 5 PM PST.",
      },
      {
        question: "How long does it take to get a response from support?",
        answer: "We strive to respond to all inquiries within 24-48 hours.",
      },
      {
        question: "Can I request support outside of business hours?",
        answer:
          "Yes, you can submit a request anytime, and we will respond during our regular business hours.",
      },
    ],

    troubleshooting: [
      {
        question: "Why am I unable to log into my account?",
        answer:
          "Ensure your email and password are correct. If you’re still unable to log in, try resetting your password or contact support for assistance.",
      },
      {
        question: "What should I do if I encounter a bug or technical issue?",
        answer:
          'You can report any bugs or technical issues using the "Report an Issue" form on our website or by contacting support.',
      },
      {
        question: "Why is the website loading slowly?",
        answer:
          "Slow loading may be due to network issues or high traffic. Try clearing your browser cache or switching to a different browser.",
      },
      {
        question: "How do I troubleshoot payment issues?",
        answer:
          "Check that your payment details are correct. If the issue persists, contact your bank or our support team for assistance.",
      },
    ],

    refundsAndCancellations: [
      {
        question: "What is your refund policy?",
        answer:
          "Refunds are available within 30 days of purchase, provided the course has not been started. For more details, check our refund policy page.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel your subscription at any time through your account settings.",
      },
      {
        question: "How long does it take to process a refund?",
        answer: "Refunds are typically processed within 5-7 business days.",
      },
      {
        question:
          "Will I lose access to courses after canceling my subscription?",
        answer:
          "Yes, access to courses will be revoked at the end of your current billing cycle if the subscription is canceled.",
      },
    ],

    accountManagement: [
      {
        question: "How do I update my account information?",
        answer:
          'You can update your information in the "Account Settings" section of your dashboard.',
      },
      {
        question: "What should I do if I forget my password?",
        answer:
          'Click "Forgot Password" on the login page, and a reset link will be sent to your registered email address.',
      },
      {
        question: "Can I change my email address on my account?",
        answer:
          'Yes, you can update your email in the "Account Settings" section of your dashboard.',
      },
      {
        question: "How do I deactivate my account?",
        answer:
          "Please contact customer support if you wish to deactivate your account.",
      },
    ],

    // adobeStock: [
    //   { question: 'What is Adobe Stock?', answer: 'Adobe Stock provides royalty-free images for use in projects...' },
    //   { question: 'How do I purchase Adobe Stock images?', answer: 'You can purchase individual images or subscribe...' },
    //   // Add more questions for "Adobe Stock"
    // ],
    // premiereRush: [
    //   { question: 'What is Premiere Rush?', answer: 'Premiere Rush is a simplified video editing tool...' },
    //   { question: 'Can I use Premiere Rush on my phone?', answer: 'Yes, Premiere Rush is available for both iOS and Android...' },
    //   // Add more questions for "Premiere Rush"
    // ]
  },
};

const FAQContent = () => {
  return (
    <div className={styles.mainContentSection}>
      {/* General FAQ */}
      <h2 id="basic" className="text-2xl font-bold mt-8 mb-4">
        Basic
      </h2>
      {faqSections.general.basic.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="Asbestos" className="text-2xl font-bold mt-8 mb-4">
        Asbestos
      </h2>
      {faqSections.general.Asbestos.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="Analytical" className="text-2xl font-bold mt-8 mb-4">
        Analytical
      </h2>
      {faqSections.general.Analytical.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="Lead" className="text-2xl font-bold mt-8 mb-4">
        Lead
      </h2>
      {faqSections.general.Lead.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="Mold" className="text-2xl font-bold mt-8 mb-4">
        Mold
      </h2>
      {faqSections.general.Mold.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="HAZWOPER" className="text-2xl font-bold mt-8 mb-4">
        HAZWOPER
      </h2>
      {faqSections.general.HAZWOPER.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="WorkerSafety" className="text-2xl font-bold mt-8 mb-4">
        Worker Safety
      </h2>
      {faqSections.general.WorkerSafety.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="CPRAEDFirstAid" className="text-2xl font-bold mt-8 mb-4">
        CPR, AED & First Aid
      </h2>
      {faqSections.general.CPRAEDFirstAid.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="ConfinedSpaces" className="text-2xl font-bold mt-8 mb-4">
        Confined Spaces
      </h2>
      {faqSections.general.ConfinedSpaces.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="BloodbornePathogens" className="text-2xl font-bold mt-8 mb-4">
        Bloodborne Pathogens
      </h2>
      {faqSections.general.BloodbornePathogens.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="LockOutTagOut" className="text-2xl font-bold mt-8 mb-4">
        Lock out, Tag Out
      </h2>
      {faqSections.general.LockOutTagOut.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="purchasing" className="text-2xl font-bold mt-8 mb-4">
        Purchasing and Availability
      </h2>
      {faqSections.general.purchasing.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="desktop" className="text-2xl font-bold mt-8 mb-4">
        Desktop Applications
      </h2>
      {faqSections.general.desktop.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      {/* Account FAQ */}
      <h2 id="account-security" className="text-2xl font-bold mt-8 mb-4">
        Account Security
      </h2>
      {faqSections.account.accountSecurity.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="password-reset" className="text-2xl font-bold mt-8 mb-4">
        Password Reset
      </h2>
      {faqSections.account.passwordReset.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="billing" className="text-2xl font-bold mt-8 mb-4">
        Billing and Payment
      </h2>
      {faqSections.account.billing.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      {/* Other FAQ */}
      {/* <h2 id="mobile-apps" className="text-2xl font-bold mt-8 mb-4">Mobile Apps</h2>
      {faqSections.other.mobileApps.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="adobe-stock" className="text-2xl font-bold mt-8 mb-4">Adobe Stock</h2>
      {faqSections.other.adobeStock.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="premiere-rush" className="text-2xl font-bold mt-8 mb-4">Premiere Rush</h2>
      {faqSections.other.premiereRush.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))} */}
      <h2 id="general-support" className="text-2xl font-bold mt-8 mb-4">
        General Support
      </h2>
      {faqSections.other.generalSupport.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2 id="troubleshooting" className="text-2xl font-bold mt-8 mb-4">
        Troubleshooting
      </h2>
      {faqSections.other.troubleshooting.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}

      <h2
        id="refunds-and-cancellations"
        className="text-2xl font-bold mt-8 mb-4"
      >
        Refunds and Cancellations
      </h2>
      {faqSections.other.refundsAndCancellations.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <h2 id="account-management" className="text-2xl font-bold mt-8 mb-4">
        Account Management
      </h2>
      {faqSections.other.accountManagement.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQContent;
