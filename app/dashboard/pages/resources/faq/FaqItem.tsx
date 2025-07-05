// 'use client';

// import { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Ensure correct import
// import styles from './faq.module.css';

// type FaqItemProps = {
//   question: string;
//   answer: string;
// };

// const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-300 mb-4">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-full flex items-center justify-between text-gray-800 py-4 ${styles.question}`}
//       >
//         {question}
//         <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>
//       {isOpen && <p className={`pl-6 pt-2 text-gray-700 ${styles.answer}`}>{answer}</p>}
//     </div>
//   );
// };

// export default FaqItem;



'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Ensure correct import
import styles from './faq.module.css';

type FaqItemProps = {
  question: string;
  answer: React.ReactNode; // Support strings and JSX
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-gray-800 py-4 ${styles.question}`}
      >
        {question}
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className={`pl-6 pt-2 text-gray-700 ${styles.answer}`}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
