import type { StatRatio } from "../constants/StaticData";
const StatisticsRatio = ({ ratio, title }: StatRatio) => {
  return (
    <div className="bg-[#f1f6f4] w-full p-8 flex flex-col text-start">
      <h1 className="text-lg">
        <span className="text-blue-600 font-bold">{ratio}%</span> {title}
      </h1>
    </div>
  );
};

export default StatisticsRatio;
