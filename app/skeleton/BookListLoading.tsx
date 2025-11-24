const BookListLoading = () => {
  return (
    <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory mb-8 scrollbar-hide scroll-smooth">
      {new Array(4).fill(0).map((_, idx) => (
        <div
          key={idx}
          className="relative snap-start px-4 pt-8 pb-3 rounded w-full max-w-[200px] flex-none"
        >
          <div className="w-full h-50 bg-gray-300 rounded-md animate-pulse mb-2" />
          <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse mb-2" />
          <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse mb-2" />
          <div className="w-2/3 h-4 bg-gray-300 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default BookListLoading;
