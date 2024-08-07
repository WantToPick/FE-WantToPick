import React, { useState } from 'react';

const Step4 = ({ nextStep, prevStep }) => {
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name) {
      nextStep();
    } else {
      alert("이름을 입력하세요.");
    }
  };

  return (
    <div className="step">
      <div className="w-full text-left">
        <h2 className="text-lg font-bold my-1">이름을 입력하세요.</h2>
        <p className="text-sm text-gray-500 mb-4">원활한 캐스팅을 위해 정확한 정보를 입력해주세요.</p>
      </div>
      <input
        type="text"
        placeholder="ex. 홍길동"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border rounded w-full mb-4"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">이전</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">다음</button>
      </div>
    </div>
  );
};

export default Step4;
