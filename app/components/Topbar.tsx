"use client";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../redux/SidebarSlice";
import { useEffect, useState } from "react";
import { useSearchBookByTitleOrAuthorQuery } from "../redux/SearchSlice";
import Link from "next/link";
import { Clock, Search, X, Menu } from "lucide-react";
const Topbar = () => {
  const dispatch = useDispatch();
  const [debounceValue, setDebounceValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);
  const { data, isLoading, isError } = useSearchBookByTitleOrAuthorQuery(
    debounceValue,
    { skip: debounceValue.trim() === "" }
  );
  const handleCloseInput = () => {
    setInputValue("");
    setDebounceValue("");
  };
  return (
    <>
      <div className="w-full p-4 border-b border-[#e1e7ea] bg-white">
        <div className="flex md:w-[75%] items-center justify-end  rounded-sm px-4 py-2 gap-4">
          <form className="flex items-center border-2 border-[#e1e7ea] bg-[#f1f6f4]">
            <input
              type="text"
              placeholder="search by name"
              value={inputValue}
              className="bg-[#f1f6f4] border-r border-[#e1e7ea] outline-none px-2 py-1 rounded-sm"
              onChange={(e) => setInputValue(e.target.value)}
            />
            {debounceValue !== "" && debounceValue ? (
              <X
                size={20}
                onClick={handleCloseInput}
                className="inline-block m-2 cursor-pointer"
              />
            ) : (
              <Search size={20} className="inline-block m-2 cursor-pointer" />
            )}
          </form>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => dispatch(toggleSideBar())}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      {isLoading === true && debounceValue !== "" && (
        <div className="absolute bg-red top-25 w-100 h-100 z-100 right-58 p-4 border-b border-[#e1e7ea] bg-white space-y-4">
          {new Array(3).fill(0).map((_, index) => (
            <div
              className="w-full flex items-center gap-4 p-4 animate-pulse"
              key={index}
            >
              <div className="w-24 h-24 bg-gray-300 rounded"></div>
              <div className="flex-1 space-y-3">
                <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!isLoading && !isError && debounceValue !== "" && data?.length === 0 && (
        <div className="absolute bg-red top-25 w-100 h-15 z-100 right-58 p-4 border-b border-[#e1e7ea] bg-white">
          No Book Found
        </div>
      )}
      {isError && debounceValue !== "" && (
        <div className="p-4">Error loading books</div>
      )}
      {data?.length > 0 && debounceValue !== "" && (
        <div className="absolute bg-red top-25 w-100 h-100 z-100 right-58 p-4 border-b border-[#e1e7ea] bg-white overflow-x-hidden overflow-y-scroll scrollbar-hide">
          {data.map((book: any) => (
            <Link href={`/book/${book.id}`} key={book.id}>
              <div className="flex w-full gap-2 p-8 items-center justify-center">
                <figure className="w-1/2">
                  <img src={book.imageLink} alt="book" className="w-full" />
                </figure>
                <div className="flex flex-col w-1/2">
                  <h1 className="font-bold text-sm">{book.title}</h1>
                  <p className="text-slate-600">{book.author}</p>
                  <div className="flex items-center gap-2 justi">
                    <Clock size={15} />
                    <p className="mr-2">03:24</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Topbar;
