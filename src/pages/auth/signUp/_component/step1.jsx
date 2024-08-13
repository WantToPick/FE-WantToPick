import React from 'react';

const Step1 = ({ handleRoleSelection }) => {
  return (
    <div className="step flex flex-col items-center">
      <div className="w-full text-left">
        <h2 className="text-lg font-bold my-1">어떤 유형으로 가입하시겠어요?</h2>
        <p className="text-sm text-gray-500 mb-4">본인의 유형을 선택해주세요.</p>
      </div>
      <div className="flex gap-6">
        <button 
          className="flex flex-col items-center p-4 bg-gray-100 rounded-2xl hover:bg-gray-200" 
          onClick={() => handleRoleSelection('연습생')}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.672 0-8 1.337-8 4v2h16v-2c0-2.663-5.328-4-8-4z" />
            </svg>
          </div>
          <span className="text-base font-medium">연습생</span>
          <span className="text-sm text-gray-500">기획사에게 PICK 되고 싶어요.</span>
        </button>
        <button 
          className="flex flex-col items-center p-4 bg-gray-100 rounded-2xl hover:bg-gray-200" 
          onClick={() => handleRoleSelection('기획사')}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 12v-2c0-3.314-2.686-6-6-6s-6 2.686-6 6v2h-2v6h2v6h16v-6h2v-6h-2zm-8-6c2.209 0 4 1.791 4 4v2h-8v-2c0-2.209 1.791-4 4-4zm-6 12v-4h16v4h-16zm14 2v2h-12v-2h12z"/>
            </svg>
          </div>
          <span className="text-base font-medium">기획사</span>
          <span className="text-sm text-gray-500">연습생을 PICK 하고 싶어요.</span>
        </button>
      </div>
    </div>
  );
};

export default Step1;
