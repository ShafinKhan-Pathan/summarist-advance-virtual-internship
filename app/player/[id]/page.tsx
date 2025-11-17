"use client";
import Controls from "@/app/components/AudioComponents/Controls";
import ProgressBar from "@/app/components/AudioComponents/ProgressBar";
// import ProgressBar from "@/app/components/AudioComponents/ProgressBar";

import TrackInfo from "@/app/components/AudioComponents/TrackInfo";
import PrivateLayout from "@/app/layout/PrivateLayout";
import { useGetBookByIdQuery } from "@/app/redux/BookSlice";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRef } from "react";
const page = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { data, isLoading, isError } = useGetBookByIdQuery(String(id));
  console.log(data);
  const isPlayerPage = pathname.startsWith("/player");
  return (
    <>
      <audio src={data?.audioLink} ref={audioRef}></audio>
      <PrivateLayout>
        <div className="w-full xl:w-[75%] mx-auto p-4 pb-48">
          <h1 className="font-bold text-xl w-full border-b mb-10 border-[#e1e7ea]">
            {data?.title}
          </h1>
          <div>
            <p className="whitespace-pre-line text-[#032b41] leading-normal">
              {data?.summary}
            </p>
          </div>
        </div>
      </PrivateLayout>
      {isPlayerPage && (
        <div className="fixed bottom-0 left-0 w-full bg-[#042330] h-45 md:h-20 z-9999 gap-4 flex items-center justify-between flex-col md:flex-row px-6 text-white">
          <TrackInfo data={data} />
          <Controls audioRef={audioRef} data={data?.audioLink} />
          <ProgressBar audioRef={audioRef} />
        </div>
      )}
    </>
  );
};

export default page;
