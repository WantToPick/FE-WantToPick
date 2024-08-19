import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const itemsPerPage = 9; // 페이지당 보여줄 항목 수

export default function VocalPortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 항목 관리

  useEffect(() => {
    // 이 부분에서 DB나 API에서 데이터를 불러올 수 있습니다.
    const fetchData = async () => {
      // 예시 데이터
      const fetchedData = [
        { id: 1, title: '아이유 | Love wins all', description: '보컬 영상', thumbnail: 'path/to/thumbnail1.jpg' },
        { id: 2, title: '백예린 | 우주를 줄게', description: '보컬 영상', thumbnail: 'path/to/thumbnail2.jpg' },
        { id: 3, title: '소녀시대 | 다시 만난 세계', description: '보컬 영상', thumbnail: 'path/to/thumbnail3.jpg' },
        // 더 많은 데이터...
      ];
      setData(fetchedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 현재 페이지에 해당하는 데이터를 계산합니다.
    const offset = (currentPage - 1) * itemsPerPage;
    const paginatedItems = data.slice(offset, offset + itemsPerPage);
    setPaginatedData(paginatedItems);
  }, [currentPage, data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setSelectedItems([]); // 편집 모드가 변경될 때 선택된 항목을 초기화
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter(item => item !== id) : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    const newData = data.filter(item => !selectedItems.includes(item.id));
    setData(newData);
    setSelectedItems([]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">비디오 포트폴리오 | 보컬</h1>
        {isEditing ? (
          <div className="flex space-x-4">
            <button onClick={handleDeleteSelected} className="text-red-600 underline">
              삭제
            </button>
            <button onClick={handleEditClick} className="text-gray-600 underline">
              완료
            </button>
          </div>
        ) : (
          <button onClick={handleEditClick} className="text-gray-600 underline">
            편집
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {paginatedData.map(item => (
          <div key={item.id} className="relative border p-4 rounded">
            {isEditing && (
              <input
                type="checkbox"
                className="absolute top-2 right-2"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
              />
            )}
            <Link to={`/portfolio/vocal?id=${item.id}`}>
              <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover mb-2 rounded" />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'text-gray-500' : 'text-blue-500'} `}
        >
          이전
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'font-bold text-blue-500' : 'text-gray-500'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'text-gray-500' : 'text-blue-500'}`}
        >
          다음
        </button>
      </div>
    </div>
  );
}
