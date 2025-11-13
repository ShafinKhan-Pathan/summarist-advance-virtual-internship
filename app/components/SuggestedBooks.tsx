import { useGetSuggestedBooksQuery } from "../redux/BookSlice";
import BookList from "../ui/BookList";

const SuggestedBooks = () => {
  const { data, isLoading, isError } = useGetSuggestedBooksQuery();
  return <BookList data={data} isLoading={isLoading} isError={isError} />;
};

export default SuggestedBooks;
