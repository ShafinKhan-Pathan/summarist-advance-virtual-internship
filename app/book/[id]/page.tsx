"use client";
import PrivateLayout from "@/app/layout/PrivateLayout";
import { useGetBookByIdQuery } from "@/app/redux/BookSlice";
import { useParams } from "next/navigation";
import { CiClock2, CiStar } from "react-icons/ci";
import { AiOutlineBulb, AiOutlineAudio } from "react-icons/ai";
import { LuBookOpenText } from "react-icons/lu";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import Link from "next/link";
import { getUserSubscription } from "@/app/utils/getSubscription";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
const page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [checking, setChecking] = useState(false);
  const [activeBtn, setActiveBtn] = useState<"read" | "listen" | null>(null);
  const { data, isLoading, isError } = useGetBookByIdQuery(String(id));
  const handleAccess = async (btnType: "read" | "listen") => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please login to continue");
      return;
    }

    setChecking(true);
    setActiveBtn(btnType);
    const subscription = await getUserSubscription(user.uid);
    setChecking(false);
    setActiveBtn(null);

    if (!subscription) {
      router.push("/choose-plan");
    } else {
      router.push(`/player/${id}`);
    }
  };
  return (
    <PrivateLayout>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading book details.</p>}
        {data && (
          <div className="flex flex-col w-full 2xl:w-[75%] mx-auto min-h-screen relative lg:flex-row-reverse">
            <div className="flex items-start justify-center w-full">
              <img
                src={data?.imageLink}
                alt="Book Image"
                className="w-full justify-center max-w-[300px] lg:w-[50%] flex-1 items-start"
              />
            </div>
            <div className="space-y-2 w-full lg:max-w-[50%] p-4">
              <h1 className="text-[#032b41] font-bold mt-4 text-2xl">
                {data?.title}
              </h1>
              <p className="text-[#032b41] font-bold">{data?.author}</p>
              <p className="text-[#032b41] font-semibold text-xl">
                {data?.subTitle}
              </p>
              <div className="border-t border-b border-[#e1e7ea] pt-4 pb-4 mb-8">
                <div className="max-w-[400px] flex flex-wrap gap-y-3">
                  <div className="flex items-center w-[50%] text-sm text-[#032b41] font-semibold">
                    <CiStar size={20} />
                    <p>
                      {data?.averageRating} ({data?.totalRating} ratings){" "}
                    </p>
                  </div>
                  <div className="flex items-center w-[50%] text-sm text-[#032b41] font-semibold">
                    <CiClock2 size={20} />
                    <p>03:24</p>
                  </div>
                </div>
                <div className="max-w-[400px] flex flex-wrap gap-y-3 mt-2">
                  <div className="flex items-center w-[50%] text-sm text-[#032b41] font-semibold">
                    <AiOutlineAudio size={20} />
                    <p>{data?.type}</p>
                  </div>
                  <div className="flex items-center w-[50%] text-sm text-[#032b41] font-semibold">
                    <AiOutlineBulb size={20} />
                    <p>{data?.keyIdeas} Key ideas</p>
                  </div>
                </div>
              </div>
              <div className="flex w-full space-x-4">
                <button
                  className="bg-blue-950 p-2 text-white rounded-sm w-36 flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleAccess("read")}
                >
                  <LuBookOpenText size={20} />{" "}
                  {checking && activeBtn === "read" ? "Checking..." : "Read"}
                </button>

                <button
                  className="bg-blue-950 p-2 text-white rounded-sm w-36 flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleAccess("listen")}
                >
                  <AiOutlineAudio size={20} />{" "}
                  {checking && activeBtn === "listen"
                    ? "Checking..."
                    : "Listen"}
                </button>
              </div>
              <div className="flex  items-center mt-4 mb-4 space-x-2 cursor-pointer font-semibold">
                <MdOutlineBookmarkAdd size={20} color="#0365f2" />
                <p className="text-[#0365f2]"> Add title to My Library</p>
              </div>
              <h1 className="font-semibold text-2xl">What's it about?</h1>
              <div className="flex flex-wrap w-full space-x-4 mb-4">
                <button className="bg-[#f1f6f4] font-semibold p-2 rounded-sm w-full flex items-center justify-start md:w-70 md:justify-center gap-2 mb-4">
                  {data?.tags[0]}
                </button>
                <button className="bg-[#f1f6f4] font-semibold p-2 rounded-sm w-full flex items-center justify-start md:w-70 md:justify-center gap-2 mb-4">
                  {/* #f1f6f4 */}
                  {data?.tags[1]}
                </button>
              </div>
              <p className="mb-4 text-[#032b41] leading-normal">
                {data?.bookDescription}
              </p>

              <h1 className="font-semibold text-2xl">About the author</h1>
              <p className="mb-4 text-[#032b41] leading-normal">
                {data?.authorDescription}
              </p>
            </div>
          </div>
        )}
      </div>
    </PrivateLayout>
  );
};

export default page;
