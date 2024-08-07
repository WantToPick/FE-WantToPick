import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Step5 = ({ nextStep, prevStep }) => {
  const [birthdate, setBirthdate] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [birthdateValid, setBirthdateValid] = useState(true);

  const handleNext = () => {
    if (birthdate) {
      nextStep();
    } else {
      setBirthdateValid(false);
    }
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
    setBirthdateValid(true);
  };

  return (
    <div className="step">
      <div className="w-full text-left">
        <h2 className="text-lg font-bold my-1">생년월일을 입력하세요.</h2>
        <p className="text-sm text-gray-500 mb-4">원활한 캐스팅을 위해 정확한 정보를 입력해주세요.</p>
      </div>
      <div className="relative w-full mb-1">
        <input
          type="date"
          placeholder="ex. 2002-08-01"
          value={birthdate}
          onChange={handleBirthdateChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`px-4 py-2 border rounded-xl w-full ${isFocused ? 'border-2 border-gray-400' : 'border-gray-300'}`}
          style={{ outline: 'none' }}
        />
      </div>

      {!birthdateValid && <p className="text-red-500 text-sm mt-1">생년월일을 입력하세요.</p>}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="flex items-center bg-white text-gray-400">
          <IoIosArrowBack className="mr-2" />
          이전
        </button>
        <button onClick={handleNext} className={`flex items-center ${birthdate ? 'bg-white text-[#526DF8]' : 'bg-white text-gray-300'}`}>
          다음
          <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Step5;
