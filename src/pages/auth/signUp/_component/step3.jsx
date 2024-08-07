import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Step3 = ({ nextStep, prevStep }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  const handleNext = () => {
    if (username && password) {
      nextStep();
    } else {
      alert("아이디와 비밀번호를 입력하세요.");
    }
  };

  return (
    <div className="step">
      <div className="w-full text-left">
        <h2 className="text-lg font-bold my-1">아이디와 비밀번호를 설정하세요.</h2>
        <p className="text-sm text-gray-500 mb-4">원활한 캐스팅을 위해 정확한 정보를 입력해주세요.</p>
      </div>
      <div className="relative w-full mb-4">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setFocusedInput('username')}
          onBlur={() => setFocusedInput('')}
          className={`px-4 py-2 border rounded-xl w-full ${focusedInput === 'username' ? 'border-2 border-[#526DF8]' : 'border-gray-300'}`}
          style={{ outline: 'none' }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AiOutlineCheck className={username ? 'text-[#526DF8]' : 'text-gray-300'} size={20} />
        </div>
      </div>
      <div className="relative w-full mb-4">
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput('')}
          className={`px-4 py-2 border rounded-xl w-full ${focusedInput === 'password' ? 'border-2 border-[#526DF8]' : 'border-gray-300'}`}
          style={{ outline: 'none' }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AiOutlineCheck className={password ? 'text-[#526DF8]' : 'text-gray-300'} size={20} />
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">이전</button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">다음</button>
      </div>
    </div>
  );
};

export default Step3;
