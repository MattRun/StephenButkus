'use client';

import { useState } from 'react';

const OnboardingModal = ({ closeModal }: { closeModal: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    phone: '',
    email: '',
    employerName: '',
    employerContactName: '',
    employerPhone: '',
    employerEmail: '',
    employerAddress: '',
    referralSource: '',
    referralOther: '',
    attendedBefore: '',
    printedName: '',
    printedDate: '',
    signatureDate: '',
  });

  const handleNextStep = async () => {
    if (step === 4) {
      await fetch('../api/user/onboarding/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      closeModal();
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleSkip = () => {
    if (step === 4) {
      closeModal();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Onboarding</h2>

        {/* Step content logic */}
        {step === 1 && <p>Personal Information Step</p>}
        {step === 2 && <p>Employer Information Step</p>}
        {step === 3 && <p>Referral Source Step</p>}
        {step === 4 && <p>Confirmation Step</p>}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={handleSkip} className="bg-gray-200 px-4 py-2 rounded">
            Skip
          </button>
          <button onClick={handleNextStep} className="bg-blue-600 text-white px-4 py-2 rounded">
            {step === 4 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;




// 'use client';

// import { useState } from 'react';

// const OnboardingModal = ({ closeModal }: { closeModal: () => void }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleInitial: '',
//     lastName: '',
//     phone: '',
//     email: '', // Autofilled
//     employerName: '',
//     employerContactName: '',
//     employerPhone: '',
//     employerEmail: '',
//     employerAddress: '',
//     referralSource: '', // "Google", "Yelp", "Referral", "Other"
//     referralOther: '', // Text for "Other" source
//     attendedBefore: '', // "Yes" or "No"
//     printedName: '',
//     printedDate: '',
//     signatureDate: '',
//   });

//   const handleNextStep = async () => {
//     if (step === 4) {
//       // Save data to the database on the last step
//       await fetch('../api/user/onboarding/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       closeModal(); // Close the modal
//       return;
//     }
//     setStep((prev) => prev + 1);
//   };

//   const handleSkip = () => {
//     if (step === 4) {
//       closeModal();
//     } else {
//       setStep((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Onboarding</h2>

//         {/* Step 1: Personal Information */}
//         {step === 1 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Middle Initial (Optional)"
//               value={formData.middleInitial}
//               onChange={(e) => setFormData({ ...formData, middleInitial: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="email"
//               placeholder="Email Address (Autofilled)"
//               value={formData.email}
//               disabled
//               className="w-full p-3 mb-2 border rounded bg-gray-200 cursor-not-allowed"
//             />
//           </div>
//         )}

//         {/* Step 2: Employer Information */}
//         {step === 2 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Employer Information</h3>
//             <input
//               type="text"
//               placeholder="Employer/Company Name"
//               value={formData.employerName}
//               onChange={(e) => setFormData({ ...formData, employerName: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Employer Contact Name"
//               value={formData.employerContactName}
//               onChange={(e) => setFormData({ ...formData, employerContactName: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Employer Phone Number"
//               value={formData.employerPhone}
//               onChange={(e) => setFormData({ ...formData, employerPhone: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="email"
//               placeholder="Employer Contact Email Address"
//               value={formData.employerEmail}
//               onChange={(e) => setFormData({ ...formData, employerEmail: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <textarea
//               placeholder="Employer Address"
//               value={formData.employerAddress}
//               onChange={(e) => setFormData({ ...formData, employerAddress: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//           </div>
//         )}

//         {/* Step 3: Referral and Course History */}
//         {step === 3 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Referral and Course History</h3>
//             <h4 className="text-sm font-semibold mb-1">How did you hear about us?</h4>
//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="referralSource"
//                 value="Google"
//                 checked={formData.referralSource === 'Google'}
//                 onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
//               />
//               <span className="ml-2">Google</span>
//             </label>
//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="referralSource"
//                 value="Yelp"
//                 checked={formData.referralSource === 'Yelp'}
//                 onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
//               />
//               <span className="ml-2">Yelp</span>
//             </label>
//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="referralSource"
//                 value="Referral"
//                 checked={formData.referralSource === 'Referral'}
//                 onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
//               />
//               <span className="ml-2">Referral</span>
//             </label>
//             <label className="block mb-4">
//               <input
//                 type="radio"
//                 name="referralSource"
//                 value="Other"
//                 checked={formData.referralSource === 'Other'}
//                 onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
//               />
//               <span className="ml-2">Other:</span>
//               {formData.referralSource === 'Other' && (
//                 <input
//                   type="text"
//                   placeholder="Please specify"
//                   value={formData.referralOther}
//                   onChange={(e) => setFormData({ ...formData, referralOther: e.target.value })}
//                   className="w-full p-3 border rounded mt-2"
//                 />
//               )}
//             </label>
//             <h4 className="text-sm font-semibold mb-1">Have you attended an AEHS course previously?</h4>
//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="attendedBefore"
//                 value="Yes"
//                 checked={formData.attendedBefore === 'Yes'}
//                 onChange={(e) => setFormData({ ...formData, attendedBefore: e.target.value })}
//               />
//               <span className="ml-2">Yes</span>
//             </label>
//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="attendedBefore"
//                 value="No"
//                 checked={formData.attendedBefore === 'No'}
//                 onChange={(e) => setFormData({ ...formData, attendedBefore: e.target.value })}
//               />
//               <span className="ml-2">No</span>
//             </label>
//           </div>
//         )}

//         {/* Step 4: Confirmation and Signature */}
//         {step === 4 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Confirmation</h3>
//             <input
//               type="text"
//               placeholder="Printed Name"
//               value={formData.printedName}
//               onChange={(e) => setFormData({ ...formData, printedName: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="date"
//               placeholder="Date"
//               value={formData.printedDate}
//               onChange={(e) => setFormData({ ...formData, printedDate: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//             <input
//               type="date"
//               placeholder="Signature Date"
//               value={formData.signatureDate}
//               onChange={(e) => setFormData({ ...formData, signatureDate: e.target.value })}
//               className="w-full p-3 mb-2 border rounded"
//             />
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handleSkip}
//             className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
//           >
//             Skip
//           </button>
//           <button
//             onClick={handleNextStep}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             {step === 4 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingModal;
