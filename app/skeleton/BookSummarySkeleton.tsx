const BookSummarySkeleton = () => {
  return (
    <div className="w-full xl:w-[75%] mx-auto p-4 pb-48 animate-pulse">
      <div className="w-2/3 h-6 bg-gray-300 rounded mb-6"></div>
      <div className="w-full border-b border-gray-200 mb-10"></div>
      <div className="space-y-4">
        <div className="w-full h-25 bg-gray-300 rounded"></div>
        <div className="w-5/6 h-25 bg-gray-300 rounded"></div>
        <div className="w-4/6 h-25 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-25 bg-gray-300 rounded"></div>
        <div className="w-2/3 h-25 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default BookSummarySkeleton;
