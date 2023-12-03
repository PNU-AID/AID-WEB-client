function Modal({ isOpen, onClose, study }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-700 bg-opacity-50">
      <div className="relative flex flex-col w-3/5 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-2xl text-gray-500 top-2 right-4 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex justify-between w-full p-4">
          <div className="w-1/2">
            <img
              alt={study.name}
              className="w-full h-auto rounded-lg"
              src={study.image}
            />
          </div>
          <div className="w-1/2 p-4">
            <p className="mt-20 text-2xl font-semibold">
              {study.name}
              <span className="p-1 ml-3 text-lg text-white bg-blue-400 rounded-full">
                {study.status}
              </span>
            </p>
            <p className="mt-8">{study.info}</p>
            <p className="mt-4">{study.number}</p>
            <p className="mt-4">{study.target}</p>
            <p className="mt-4">{study.how}</p>
            <p className="mt-4">{study.date}</p>
          </div>
        </div>
        <div className="flex self-end justify-content-between">
          <button className="px-3 py-2 mb-4 mr-4 text-white bg-blue-400 rounded-md hover:bg-blue-600">
            수정
          </button>
          <button className="px-3 py-2 mb-4 mr-4 text-white bg-blue-400 rounded-md hover:bg-blue-600">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
