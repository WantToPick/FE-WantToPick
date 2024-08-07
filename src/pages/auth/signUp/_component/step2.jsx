import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Step2 = ({ nextStep, prevStep }) => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleNext = () => {
    if (email) {
      nextStep();
    } else {
      alert("이메일을 입력하세요.");
    }
  };

  return (
    <div className="step">
      <div className="w-full text-left">
        <h2 className="text-lg font-bold my-1">이메일을 입력하세요.</h2>
        <p className="text-sm text-gray-500 mb-4">원활한 캐스팅을 위해 정확한 정보를 입력해주세요.</p>
      </div>
      <div className="relative w-full mb-4">
        <input
          type="email"
          placeholder="ex. abc1234@naver.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`px-4 py-2 border rounded-xl w-full ${isFocused ? 'border-2 border-[#526DF8]' : 'border-gray-300'}`}
          style={{ outline: 'none' }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FaCheck className={email ? 'text-[#526DF8]' : 'text-gray-300'} />
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <button onClick={prevStep} className="bg-white text-gray-400">이전</button>
        <button onClick={handleNext} className="bg-white text-[#526DF8]">다음</button>
      </div>
    </div>
  );
};

export default Step2;
