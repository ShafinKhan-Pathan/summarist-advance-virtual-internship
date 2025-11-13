"use client";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PrivateLayout from "../layout/PrivateLayout";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace("/");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <PrivateLayout>
      <div className="w-full xl:w-[70%] border-2 mx-auto min-h-screen">
        <h1 className="font-bold text-xl">Selected just for you</h1>
        <div className="bg-[#fbefd6] w-full h-[30%] p-4 md:flex gap-4 rounded-sm mt-2">
          <div className="md:w-1/2">
            <p className="text-slate-600">
              How Constant Innovation Creates Radically Successful Businesses
            </p>
          </div>
          <div className="flex mt-4 mb-4 md:border-l md:border-slate-400">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2"
              alt="book"
              width={150}
              height={200}
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">The Lean Startup</h1>
              <p className="text-slate-600">Eric Ries</p>
              <div className="flex justify-center items-center gap-2 mt-4">
                <FaPlayCircle size={35} /> 3 Mins 25 Secs
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-xl">Recommended Book</h1>
        <h1>We think you'll like these</h1>
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory mb-8">
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
          <Link
            href="/"
            className="relative snap-start px-4 border-2 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&token=099193aa-4d85-4e22-8eb7-55f12a235fe2"
              alt=""
              className="rounded-md mb-2"
            />
            <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
              How to win friends and influence people in the digital Age
            </h4>
            <p className="text-gray-500 text-sm mb-2 mt-2">Dale Carnegie</p>
            <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
              Time-Tested advice for the digital age
            </p>
            <div className="flex gap-4">
              <p>03:24</p>
              <p>4.4</p>
            </div>
          </Link>
        </div>
        <h1>Suggested Book</h1>
      </div>
    </PrivateLayout>
  );
};

export default page;
