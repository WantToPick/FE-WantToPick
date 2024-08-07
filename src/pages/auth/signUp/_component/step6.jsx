import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Step6 = ({ prevStep }) => {
  const [gender, setGender] = useState('');
  const [genderSelected, setGenderSelected] = useState(true);

  const handleNext = () => {
    if (gender) {
      alert("가입이 완료되었습니다!");
    } else {
      setGenderSelected(false);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setGenderSelected(true);
  };

  return (
    <div className="step">
      <div className="w-full text-left">
        <h2 className="text-lg font-bold my-1">성별을 선택하세요.</h2>
        <p className="text-sm text-gray-500 mb-4">원활한 캐스팅을 위해 정확한 정보를 입력해주세요.</p>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="남자"
            onChange={handleGenderChange}
            className="mr-2"
          />
          <label htmlFor="male">남자</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="여자"
            onChange={handleGenderChange}
            className="mr-2"
          />
          <label htmlFor="female">여자</label>
        </div>
      </div>

      {!genderSelected && <p className="text-red-500 text-sm mt-1">성별을 선택하세요.</p>}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="flex items-center bg-white text-gray-400">
          <IoIosArrowBack className="mr-2" />
          이전
        </button>
        <button onClick={handleNext} className={`flex items-center ${gender ? 'bg-white text-[#526DF8]' : 'bg-white text-gray-300'}`}>
          완료
          <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Step6;
