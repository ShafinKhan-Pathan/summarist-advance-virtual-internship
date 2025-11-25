"use client";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../redux/SidebarSlice";
import { useEffect, useState, useRef } from "react";
import { useSearchBookByTitleOrAuthorQuery } from "../redux/SearchSlice";
import Link from "next/link";
import { Clock, Search, X, Menu } from "lucide-react";

const Topbar = () => {
  const dispatch = useDispatch();
  const [debounceValue, setDebounceValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(inputValue), 300);
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
        <div className="flex md:w-[75%] items-center justify-end px-4 py-2 gap-4 relative">
          {/* SEARCH BOX */}
          <div className="relative w-full md:max-w-[400px]">
            <form className="flex items-center border-2 border-[#e1e7ea] bg-[#f1f6f4] rounded-sm">
              <input
                type="text"
                placeholder="Search by name"
                value={inputValue}
                className="bg-[#f1f6f4] border-r border-[#e1e7ea] outline-none px-2 py-1 rounded-sm w-full"
                onChange={(e) => setInputValue(e.target.value)}
              />

              {debounceValue ? (
                <X
                  size={20}
                  onClick={handleCloseInput}
                  className="inline-block m-2 cursor-pointer"
                />
              ) : (
                <Search size={20} className="inline-block m-2 cursor-pointer" />
              )}
            </form>

            {/* DROPDOWN BOX (FLOATS BELOW SEARCH) */}
            {debounceValue !== "" && (
              <div
                className="
                  absolute left-0 top-12 w-full 
                  max-h-[350px] overflow-y-auto scrollbar-hide
                  bg-white shadow-2xl border border-gray-200 
                  z-999 rounded-md
                "
              >
                {/* LOADING STATE */}
                {isLoading &&
                  new Array(3).fill(0).map((_, index) => (
                    <div
                      className="w-full flex items-center gap-4 p-4 animate-pulse"
                      key={index}
                    >
                      <div className="w-20 h-20 bg-gray-300 rounded" />
                      <div className="flex-1 space-y-3">
                        <div className="w-1/2 h-4 bg-gray-300 rounded" />
                        <div className="w-1/3 h-4 bg-gray-300 rounded" />
                        <div className="w-1/4 h-4 bg-gray-300 rounded" />
                      </div>
                    </div>
                  ))}

                {/* ERROR */}
                {isError && (
                  <div className="p-4 text-red-500">Error loading books</div>
                )}

                {/* NO RESULTS */}
                {!isLoading &&
                  !isError &&
                  debounceValue !== "" &&
                  data?.length === 0 && (
                    <div className="p-4 text-gray-500">No Book Found</div>
                  )}

                {/* REAL RESULTS */}
                {data?.map((book: any) => (
                  <Link
                    href={`/book/${book.id}`}
                    key={book.id}
                    onClick={handleCloseInput}
                  >
                    <div className="flex w-full gap-4 p-4 hover:bg-gray-100 cursor-pointer">
                      <img
                        src={book.imageLink}
                        className="w-30 h-30 object-cover rounded"
                        alt=""
                      />

                      <div>
                        <h1 className="font-bold text-sm">{book.title}</h1>
                        <p className="text-slate-600 text-sm">{book.author}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <Clock size={14} />
                          <p>03:24</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE SIDEBAR BTN */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => dispatch(toggleSideBar())}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
