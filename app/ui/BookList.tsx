import Link from "next/link";
import { Clock, Star } from "lucide-react";
import BookListLoading from "../skeleton/BookListLoading";
import BookListError from "../skeleton/BookListError";
import AudioTime from "../components/AudioComponents/AudioTime";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
interface BookListProps {
  data: any;
  isLoading: boolean;
  isError: boolean;
}
const BookList = ({ data, isLoading, isError }: BookListProps) => {
  const isPremium = useSelector(
    (state: RootState) => state.subsctiptionSlice.isPremium
  );
  if (isLoading) return <BookListLoading />;
  if (isError) return <BookListError />;

  return (
    <div>
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory mb-8 scrollbar-hide scroll-smooth">
        {data &&
          data.map((book: any) => {
            return (
              <Link
                href={`/book/${book.id}`}
                className="relative snap-start px-4 pt-8 pb-3  rounded w-full max-w-[200px] flex-none hover:bg-[#f1f6f4] cursor-pointer overflow-hidden select-none no-underline"
                key={book.id}
                title=""
              >
                {isPremium !== null &&
                  book.subscriptionRequired &&
                  !isPremium && (
                    <p
                      className={`absolute top-0 right-0 text-xs bg-blue-950 text-white rounded-xl p-1`}
                    >
                      Premium
                    </p>
                  )}

                <img
                  src={book.imageLink}
                  alt=""
                  className="rounded-md mb-2"
                  draggable={false}
                />
                <h4 className="font-bold text-md text-[#032b41] leading-relaxed mb-1">
                  {book.title}
                </h4>
                <p className="text-gray-500 text-sm mb-2 mt-2">{book.author}</p>
                <p className="text-gray-600 text-xs font-bold leading-relaxed mb-2">
                  {book.subTitle}
                </p>
                <div className="flex justify-between items-center absolute bottom-0 text-slate-500 space-x-2 ">
                  <Clock size={15} />
                  <p className="mr-2">
                    <AudioTime audioUrl={book?.audioLink} />
                  </p>
                  <Star size={15} />
                  <p className="mr-2">
                    {book.averageRating != null
                      ? Number(book.averageRating).toFixed(2)
                      : "0.00"}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BookList;
