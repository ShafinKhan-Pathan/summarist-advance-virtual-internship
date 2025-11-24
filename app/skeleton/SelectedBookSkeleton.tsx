const SelectedBookSkeleton = () => {
  return (
    <div className="bg-[#fbefd6] w-full h-[30%] p-4 md:flex gap-4 rounded-sm mt-2 animate-pulse">
      <div className="md:w-1/2 space-y-3">
        <div className="w-3/4 h-5 bg-gray-300 rounded" />
        <div className="w-1/2 h-5 bg-gray-300 rounded" />
      </div>
      <div className="flex mt-4 mb-4 md:border-l md:border-slate-300 pl-4 gap-4">
        <div className="w-[150px] h-[200px] bg-gray-300 rounded" />
        <div className="flex flex-col justify-center space-y-3">
          <div className="w-40 h-6 bg-gray-300 rounded" />
          <div className="w-24 h-4 bg-gray-300 rounded" />
          <div className="w-32 h-6 bg-gray-300 rounded mt-4" />
        </div>
      </div>
    </div>
  );
};

export default SelectedBookSkeleton;
