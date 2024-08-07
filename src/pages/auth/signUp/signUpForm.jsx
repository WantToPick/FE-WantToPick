import React, { useState } from 'react';
import Step1 from './_component/step1';
import Step2 from './_component/step2';
import Step3 from './_component/step3';
import Step4 from './_component/step4';
import Step5 from './_component/step5';
import Step6 from './_component/step6';
import logoImg from '../../../assets/images/logo.png';

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
    <div className="flex flex-col items-center mt-10">
      <img src={logoImg} alt="로고" className="my-3 w-16" />
      <h1 className="text-2xl font-bold mb-2">회원가입</h1>
      <p className="text-base text-gray-500 mb-8">원투픽에 오신 걸 환영합니다!</p>
      <div className="w-full max-w-md p-16 bg-white border border-gray-300 rounded-2xl">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-gray-500">{step}/6</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 6) * 100}%` }}></div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default SignupForm;
