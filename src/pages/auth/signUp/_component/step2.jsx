import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep }) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email) {
      nextStep();
    } else {
      alert("이메일을 입력하세요.");
    }
  };

  return (
    <div className="step">
      <h2 className="text-xl font-bold mb-4">이메일을 입력하세요.</h2>
      <input
        type="email"
        placeholder="ex. abc1234@naver.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 border rounded w-full mb-4"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">이전</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">다음</button>
      </div>
    </div>
  );
};

export default Step2;
