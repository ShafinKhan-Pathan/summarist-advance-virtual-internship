import type { StatContent } from "../constants/StaticData";

const StatisticsContent = ({ title }: StatContent) => {
  return (
    
      <p className="font-bold mt-4 text-gray-400 text-xl md:text-2xl lg:text-3xl ">
        {title}
      </p>

  );
};

export default StatisticsContent;
