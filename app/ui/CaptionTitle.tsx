import type { CaptionTitle } from "../constants/StaticData";

const CaptionTitle = ({
  icon: Icon,
  title,
  description,
  feature,
}: CaptionTitle) => {
  return (
    <div
      className={`flex flex-col w-full items-center justify-center p-4 gap-2 ${
        feature && " bg-blue-200 rounded-xl"
      }`}
    >
      <Icon size={35} className="flex justify-center items-center" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-slate-500 md:h-20 w-full md:w-[200px]">{description}</p>
    </div>
  );
};

export default CaptionTitle;
