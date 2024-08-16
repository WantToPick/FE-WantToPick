import React from 'react';

export default function ProfileHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 text-white">
      <div className="flex items-center">
        <img src="/path/to/profile-image.jpg" alt="Profile" className="rounded-full w-20 h-20" />
        <div className="ml-4">
          <h1 className="text-xl font-bold">이름: 장일점</h1>
          <p>생년월일: 2007.08.03</p>
          <p>이메일: abc1234@naver.com</p>
        </div>
      </div>
    </div>
  );
}
