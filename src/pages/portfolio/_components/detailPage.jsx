import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function DetailPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  // 실제 데이터베이스 또는 API에서 데이터를 가져오는 로직을 추가해야 합니다.
  const fetchedData = [
    { 
      id: 1, 
      title: '아이유 | Love wins all', 
      description: '제가 좋아하는 노래입니다! 열심히 불러보았습니다 :)',
      videoUrl: 'path/to/video1.mp4',
      views: 150,
      date: '2024.08.05',
    },
    { 
      id: 2, 
      title: '백예린 | 우주를 줄게', 
      description: '제가 좋아하는 노래입니다! 열심히 불러보았습니다 :)',
      videoUrl: 'path/to/video2.mp4',
      views: 182,
      date: '2024.08.05',
    },
    { 
      id: 3, 
      title: '소녀시대 | 다시 만난 세계', 
      description: '제가 좋아하는 노래입니다! 열심히 불러보았습니다 :)',
      videoUrl: 'path/to/video3.mp4',
      views: 200,
      date: '2024.08.05',
    },
  ];

  const item = fetchedData.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4">비디오 포트폴리오 | 보컬 </h1>
      </div>
      
      <div className="border rounded-lg p-10 mb-4">
        <div className='text-xl font-bold flex items-center mb-4'>
            <Link to="/portfolio/vocal" className="mr-5">{'<'}</Link>
            <h2>{item.title}</h2>
        </div>
        <div className='px-20 py-8 border-b border-gray-400 mb-8'>
            <video controls className="w-full h-auto mb-4 rounded-lg">
            <source src={item.videoUrl} type="video/mp4" />
            해당 브라우저는 비디오 태그를 지원하지 않습니다.
            </video>
        </div>
        <p className='mb-4'>{item.description}</p>
        <div className="text-gray-500 flex justify-end">
            <span className="mr-6">조회수 {item.views}</span>
            <span>게시일 {item.date}</span>
        </div>
      </div>
    </div>
  );
}
