import React from 'react';
import profileImage from '../../../assets/images/home/logo.png';
import wtpLogo from '../../../assets/images/home/logo.png';

export default function Section3() {
    return (
        <section className="py-16 px-32 bg-gradient-to-b from-[#F8F8FF] to-[#E0ECFF]">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">PICK 순서</h2>
                <p className="text-xl text-gray-600">WANT TO PICK ? 어떻게 하지 ?</p>
            </div>
            <div className="flex justify-around items-start space-x-8">
                <div className="bg-white rounded-3xl p-8 shadow-md w-80">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#526DF8] text-white text-lg font-bold">
                            01
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">나만의 포트폴리오 작성하기</h3>
                    <div className="text-left">
                        <p className="mb-2"><strong>이름 / 나이 :</strong> 이소희 / 18살</p>
                        <p className="mb-2"><strong>키 / 체중 :</strong> 160cm / 40kg</p>
                        <p className="mb-2"><strong>특기 :</strong> 보컬</p>
                        <p className="mb-2"><strong>자기소개 :</strong></p>
                        <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-md mb-2">
                            <img src={profileImage} alt="Profile Placeholder" className="h-24 w-24" />
                        </div>
                        <p className="text-gray-500">보컬/랩/댄스</p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-md w-80">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#526DF8] text-white text-lg font-bold">
                            02
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">전문가에게 피드백 받기</h3>
                    <div className="text-left">
                        <p className="bg-blue-100 rounded-lg p-4 mb-2">조금 더 낮은 음악대의 노래가 좋을 거 같아요 .</p>
                        <p className="bg-pink-100 rounded-lg p-4 mb-2">춤 연습을 조금 더 하면 실력을 늘 것 같네요 !</p>
                        <p className="bg-gray-100 rounded-lg p-4">충분한 끼가 있고 소질이 있네요 :)</p>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-md w-80">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#526DF8] text-white text-lg font-bold">
                            03
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">소속사에서 나를 픽 !</h3>
                    <div className="flex items-center justify-center h-32 rounded-md mb-2">
                        <img src={wtpLogo} alt="WTP Logo" className="h-24 w-24" />
                    </div>
                    <p className="text-center text-gray-500">우리 회사랑 너무 잘 맞을 거 같아요 !</p>
                </div>
            </div>
        </section>
    );
}
