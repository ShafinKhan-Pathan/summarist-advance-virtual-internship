import { ChevronDown, ChevronUp } from "lucide-react";

const Accordian = ({ faq, i, openQuestion, setOpenQuestion }: any) => {
  const handleToggle = (i: any) => {
    setOpenQuestion(openQuestion === i ? null : i);
  };
  return (
    <>
      <div
        className="p-4 w-full md:max-w-[60%] border-b border-[#ddd] flex items-center justify-between mb-2 cursor-pointer relative"
        key={faq.i}
        onClick={() => handleToggle(i)}
      >
        <div>
          <h1 className="text-xl">{faq.question}</h1>
          <p
            className={`text-sm text-gray-700 font-light mt-4 ${
              openQuestion === i ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </p>
        </div>
        <button className="absolute right-10 top-0">
          {openQuestion === i ? (
            <>
              <ChevronDown size={35} className="cursor-pointer" />
            </>
          ) : (
            <ChevronUp size={35} className="cursor-pointer" />
          )}
        </button>
      </div>
    </>
  );
};

export default Accordian;
