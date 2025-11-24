const SettingsSkeleton = () => {
  return (
    <div className="w-full lg:max-w-[65%] mx-auto space-y-10 animate-pulse">

      <div className="h-8 w-40 bg-gray-300 rounded mb-8"></div>

      {/* Subscription */}
      <div className="space-y-2 border-b pb-4 border-[#e1e7ea]">
        <div className="h-5 w-52 bg-gray-300 rounded"></div>
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>

      {/* Email */}
      <div className="space-y-2 border-b pb-4 border-[#e1e7ea]">
        <div className="h-5 w-24 bg-gray-300 rounded"></div>
        <div className="h-6 w-44 bg-gray-300 rounded"></div>
      </div>

      {/* Button */}
      <div className="h-10 w-[70%] bg-gray-300 rounded-lg"></div>

    </div>
  );
};

export default SettingsSkeleton;
