import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Step3 = ({ nextStep, prevStep }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleNext = () => {
    if (validateUsername(username) && validatePassword(password)) {
      nextStep();
    } else {
      if (!validateUsername(username)) setUsernameValid(false);
      if (!validatePassword(password)) setPasswordValid(false);
    }
  };

  const validateUsername = (username) => {
    return username.length >= 6 && /[a-zA-Z]/.test(username);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameValid(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(true);
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
          onChange={handleUsernameChange}
          onFocus={() => setFocusedInput('username')}
          onBlur={() => setFocusedInput('')}
          className={`px-4 py-2 border rounded-xl w-full ${focusedInput === 'username' ? 'border-2 border-[#526DF8]' : 'border-gray-300'}`}
          style={{ outline: 'none' }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AiOutlineCheck className={validateUsername(username) ? 'text-[#526DF8]' : 'text-gray-300'} size={20} />
        </div>
      </div>
      {!usernameValid && <p className="text-red-500 text-sm mt-1">아이디는 영문 포함 6자리 이상이어야 합니다.</p>}
      <div className="relative w-full mb-1">
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          onFocus={() => setFocusedInput('password')}
          onBlur={() => setFocusedInput('')}
          className={`px-4 py-2 border rounded-xl w-full ${focusedInput === 'password' ? 'border-2 border-[#526DF8]' : 'border-gray-300'}`}
          style={{ outline: 'none' }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AiOutlineCheck className={validatePassword(password) ? 'text-[#526DF8]' : 'text-gray-300'} size={20} />
        </div>
      </div>
      {!passwordValid && <p className="text-red-500 text-sm mt-1">비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다.</p>}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="flex items-center bg-white text-gray-400">
          <IoIosArrowBack className="mr-2" />
          이전
        </button>
        <button onClick={handleNext} className={`flex items-center ${validateUsername(username) && validatePassword(password) ? 'bg-white text-[#526DF8]' : 'bg-white text-gray-300'}`}>
          다음
          <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Step3;
