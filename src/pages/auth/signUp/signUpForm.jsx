import React, { useState } from 'react';
import Step1 from './_component/step1';
import Step2 from './_component/step2';
import Step3 from './_component/step3';
import Step4 from './_component/step4';
import Step5 from './_component/step5';
import Step6 from './_component/step6';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    nextStep();
  };

  const renderStep = () => {
    if (role === '연습생') {
      switch (step) {
        case 2:
          return <Step2 nextStep={nextStep} prevStep={prevStep} />;
        case 3:
          return <Step3 nextStep={nextStep} prevStep={prevStep} />;
        case 4:
          return <Step4 nextStep={nextStep} prevStep={prevStep} />;
        case 5:
          return <Step5 nextStep={nextStep} prevStep={prevStep} />;
        case 6:
          return <Step6 prevStep={prevStep} />;
        default:
          return <Step1 handleRoleSelection={handleRoleSelection} />;
      }
    } else {
      return <Step1 handleRoleSelection={handleRoleSelection} />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 6) * 100}%` }}></div>
      </div>
      {renderStep()}
    </div>
  );
};

export default SignupForm;