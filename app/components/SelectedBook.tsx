import { FaPlayCircle } from "react-icons/fa";
import { useGetSelectedBookQuery } from "../redux/BookSlice";
import Link from "next/link";

const SelectedBook = () => {
  const { data, isLoading, isError } = useGetSelectedBookQuery();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading selected book.</p>}
      {data &&
        data.map((book: any) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <div
              className="bg-[#fbefd6] w-full h-[30%] p-4 md:flex gap-4 rounded-sm mt-2"
              
            >
              <div className="md:w-1/2">
                <p className="text-slate-600">{book.title}</p>
              </div>
              <div className="flex mt-4 mb-4 md:border-l md:border-slate-400">
                <img src={book.imageLink} alt="book" width={150} height={200} />
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">{book.subTitle}</h1>
                  <p className="text-slate-600">{book.author}</p>
                  <div className="flex justify-center items-center gap-2 mt-4">
                    <FaPlayCircle size={35} /> 3 Mins 25 Secs
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};

export default SelectedBook;
