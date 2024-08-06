import React, { useState } from 'react';

const Step6 = ({ prevStep }) => {
  const [gender, setGender] = useState('');

  const handleNext = () => {
    if (gender) {
      alert("가입이 완료되었습니다!");
    } else {
      alert("성별을 선택하세요.");
    }
  };

  return (
    <div className="step">
      <h2 className="text-xl font-bold mb-4">성별을 알려주세요.</h2>
      <div className="flex justify-center gap-4 mb-4">
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="남자"
            onChange={(e) => setGender(e.target.value)}
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
            onChange={(e) => setGender(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="female">여자</label>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">이전</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">완료</button>
      </div>
    </div>
  );
};

export default Step6;
