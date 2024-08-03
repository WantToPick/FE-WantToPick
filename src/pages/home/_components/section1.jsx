import bannerImage from '../../../assets/images/home/logo.png';

export default function Section1() {
    return(
        <section className='flex items-center justify-center bg-gradient-to-r from-[#FFEAEB] to-[#CEDAFF] py-20'>
            <div className='text-center'>
                <div className='flex items-center justify-center mb-5'>
                    <div className='flex items-center text-2xl text-gray-700'>
                        <span className='font-semibold'>Pick</span>과 <span className='font-semibold ml-2'>Picker</span>의 만남
                    </div>
                    <span className='text-2xl font-bold text-[#526DF8] ml-2'>'PICK</span>
                    <span className='text-2xl font-bold ml-2'>TO</span>
                    <span className='text-2xl font-bold text-[#FFC4C7] ml-2'>PICK'</span>
                </div>
                <div className='flex items-center justify-center mb-5'>
                    <img src={bannerImage} alt='WTP' className='w-28 h-28 mr-4' />
                    <div className='text-left text-xl'>
                        <p className='font-medium'>국내유일 엔터테인먼트 X 연습생 매칭 웹 서비스</p>
                        <p className='text-gray-500'>나는 너를 픽하길 원해: 원투픽</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
