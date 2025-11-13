import Link from "next/link";
import { CiClock2, CiStar } from "react-icons/ci";

interface BookListProps {
  data: any;
  isLoading: boolean;
  isError: boolean;
}
const BookList = ({ data, isLoading, isError }: BookListProps) => {
  return (
    <div>
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory mb-8">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading books.</p>}
        {data &&
          data.map((book: any) => (
            <Link
              href={`/book/${book.id}`}
              className="relative snap-start px-4 pt-8 pb-3 no-underline rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer"
              key={book.id}
            >
              <p
                className={`absolute top-0 right-0 text-xs bg-blue-950 text-white rounded-xl ${
                  book.subscriptionRequired ? "p-1" : "p-0"
                }`}
              >
                {book.subscriptionRequired ? "Premium" : ""}
              </p>
              <img src={book.imageLink} alt="" className="rounded-md mb-2" />
              <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
                {book.title}
              </h4>
              <p className="text-gray-500 text-sm mb-2 mt-2">{book.author}</p>
              <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
                {book.subTitle}
              </p>
              <div className="flex justify-between items-center absolute bottom-0 text-slate-500 ">
                <CiClock2 size={15} />
                <p className="mr-2">03:24</p>
                <CiStar />
                <p className="mr-2">4.4</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookList;
