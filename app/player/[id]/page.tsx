"use client";
import PrivateLayout from "@/app/layout/PrivateLayout";
import { useGetBookByIdQuery } from "@/app/redux/BookSlice";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
const page = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const { data, isLoading, isError } = useGetBookByIdQuery(String(id));
  const isPlayerPage = pathname.startsWith("/player");
  return (
    <>
      <PrivateLayout>
        <div className="w-full xl:w-[75%] mx-auto p-4 pb-24">
          <h1 className="font-bold text-xl w-full p-4 border-b border-[#e1e7ea]">
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
        <div className="fixed bottom-0 left-0 w-full bg-[#042330] h-20 z-9999 flex items-center justify-between px-6 text-white">
            <div className="flex">
                <img src={data?.imageLink} alt="bookImage" className="w-10 h-10" />
                 <p>{data?.title}</p>
            </div>
         
          <div className="flex items-center gap-4">
            <button>⏮</button>
            <button>▶</button>
            <button>⏭</button>
          </div>
          <p>00:00</p>
        </div>
      )}
    </>
  );
};

export default page;
