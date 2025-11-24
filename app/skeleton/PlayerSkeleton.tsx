const PlayerSkeleton = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#042330] h-45 md:h-20 z-9999 gap-4 flex items-center justify-between flex-col md:flex-row px-6 text-white">
            <div className="flex items-center w-full md:w-[calc(100%/3)] gap-3">
        <div className="w-20 h-20 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="w-24 h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-[calc(100%/3)] gap-6">
        <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
        <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse"></div>
        <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center w-full md:w-[calc(100%/3)] gap-3">
        <div className="w-10 h-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="w-[50%] h-3 bg-gray-700 rounded animate-pulse"></div>
        <div className="w-10 h-4 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default PlayerSkeleton;
