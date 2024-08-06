import React from 'react';

const Step1 = ({ handleRoleSelection }) => {
  return (
    <div className="step">
      <h2 className="text-xl font-bold mb-4">어떤 유형으로 가입하시겠어요?</h2>
      <div className="flex justify-center gap-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={() => handleRoleSelection('연습생')}
        >
          연습생
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded" 
          onClick={() => handleRoleSelection('기획사')}
        >
          기획사
        </button>
      </div>
    </div>
  );
};

export default Step1;
