import { useGetRecommendedBooksQuery } from "../redux/BookSlice";
import BookList from "../ui/BookList";

const RecommendedBooks = () => {
  const { data, isLoading, isError } = useGetRecommendedBooksQuery();
  return <BookList data={data} isLoading={isLoading} isError={isError} />;
};

export default RecommendedBooks;
