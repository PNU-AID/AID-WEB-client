import { useState } from 'react';
import { studyData, categoryData, statusData } from '../assets/data';
import Modal from '../components/Modal';

function Study() {
  const [category, setCategory] = useState(studyData);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterCategory = (category) => {
    if (category == 'All') {
      setCategory(studyData);
    } else {
      setCategory(
        studyData.filter((item) => {
          return item.category === category;
        })
      );
    }
  };

  const filterStatus = (status) => {
    setCategory(
      studyData.filter((item) => {
        return item.status === status;
      })
    );
  };

  const handleStudyClick = (study) => {
    setSelectedStudy(study); // Set the selected study
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="container py-12 m-auto mt-12">
      <h1 className="mb-12 text-4xl font-bold text-center">Study</h1>
      <div className="flex justify-end mb-4">
        <button className="px-3 py-1 m-1 text-white bg-blue-400 rounded-xl hover:bg-blue-600">
          등록
        </button>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <p className="px-2 pb-1 font-bold text-gray-700">category</p>
          <div className="flex flex-wrap justfiy-between">
            {categoryData.map((item, index) => (
              <button
                className="px-3 py-1 m-1 text-gray-600 border border-gray-600 rounded-xl hover:bg-gray-600 hover:text-white"
                key={index}
                onClick={() => filterCategory(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="px-2 pb-1 font-bold text-gray-700 lg:text-right">
            status
          </p>
          <div className="flex justify-between max-w-[390px] w-full">
            {statusData.map((item, index) => (
              <button
                className="px-3 py-1 m-1 text-gray-600 border border-gray-600 rounded-xl hover:bg-gray-600 hover:text-white"
                key={index}
                onClick={() => filterStatus(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 pt-4">
        {category.map((item, index) => (
          <div
            className="flex border rounded-lg shadow-lg hover:scale-105"
            key={index}
            onClick={() => handleStudyClick(item)}
          >
            <img
              alt={item.name}
              className="h-[200px] object-cover rounded-t-lg"
              src={item.image}
            />
            <div className="flex flex-col pl-2 pt-14">
              <p className="font-bold">
                {item.name}
                <span className="p-1 ml-3 text-white bg-blue-400 rounded-full">
                  {item.status}
                </span>
              </p>
              <p className="mt-5">{item.info}</p>
              <p className="">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        study={selectedStudy}
      />
    </div>
  );
}

export default Study;
