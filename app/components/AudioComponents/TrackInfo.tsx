const TrackInfo = ({ data }: any) => {
  return (
    <div className="flex items-center justify-center w-full md:w-[calc(100%/3)] space-x-2">
      <img src={data?.imageLink} alt="bookImage" className="w-20 h-20" />
      <div className="flex flex-col">
        <p className="text-sm">{data?.title}</p>
        <p className="text-sm text-slate-400">{data?.author}</p>
      </div>
    </div>
  );
};

export default TrackInfo;
