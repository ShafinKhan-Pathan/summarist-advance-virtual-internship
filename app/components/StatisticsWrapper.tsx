import StatisticsContent from "../ui/StatisticsContent";
import StatisticsRatio from "../ui/StatisticsRatio";
import { StatContent, StatRatio } from "../constants/StaticData";

interface StatisticsWrapperProps {
  content: StatContent[];
  ratio: StatRatio[];
  reverse?: boolean;
}

const StatisticsWrapper = ({
  content,
  ratio,
  reverse,
}: StatisticsWrapperProps) => {
  const contentAlign = reverse ? "md:items-end md:text-right" : "md:items-start md:text-left"
  return (
    <>
      <div
        className={`flex flex-col md:flex-row gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className={`w-full md:w-1/2 flex flex-col items-start ${contentAlign}`} >
          {content?.map((stat, i) => (
            <StatisticsContent key={i} title={stat.title} />
          ))}
        </div>
        <div className="w-full md:w-1/2 mt-4">
          {ratio?.map((list, i) => (
            <StatisticsRatio key={i} ratio={list.ratio} title={list.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StatisticsWrapper;
