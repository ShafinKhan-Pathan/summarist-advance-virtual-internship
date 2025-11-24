"use client";

import PrivateLayout from "../layout/PrivateLayout";

const BookDetailSkeleton = () => {
  return (
    <PrivateLayout>
    <div className="flex flex-col w-full 2xl:w-[75%] mx-auto min-h-screen lg:flex-row-reverse gap-6 p-4 animate-pulse">
      <div className="flex justify-center w-full lg:w-1/2">
        <div className="w-[250px] h-[350px] bg-gray-300 rounded-md" />
      </div>
      <div className="w-full lg:max-w-[50%] space-y-6">
        <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
        <div className="border-t border-b border-[#e1e7ea] py-4">
          <div className="flex flex-wrap gap-y-3 max-w-[400px]">
            <div className="flex items-center gap-3 w-[50%]">
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <div className="w-24 h-4 bg-gray-300 rounded" />
            </div>
            <div className="flex items-center gap-3 w-[50%]">
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <div className="w-20 h-4 bg-gray-300 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap gap-y-3 max-w-[400px] mt-3">
            <div className="flex items-center gap-3 w-[50%]">
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <div className="w-24 h-4 bg-gray-300 rounded" />
            </div>
            <div className="flex items-center gap-3 w-[50%]">
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <div className="w-28 h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-36 h-10 bg-gray-300 rounded"></div>
          <div className="w-36 h-10 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <div className="w-40 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="h-6 w-40 bg-gray-300 rounded"></div>
        <div className="flex gap-4 mt-2">
          <div className="w-24 h-8 bg-gray-300 rounded"></div>
          <div className="w-24 h-8 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
          <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="h-6 w-48 bg-gray-300 rounded mt-6"></div>
        <div className="space-y-2 mt-2">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
          <div className="w-4/6 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
    </PrivateLayout>
  );
};

export default BookDetailSkeleton;
