import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const Accordian = ({ faq, i, openQuestion, setOpenQuestion }: any) => {
  const handleToggle = (i: any) => {
    setOpenQuestion(openQuestion === i ? null : i);
  };
  return (
    <>
      <motion.div
        className="p-4 w-full md:max-w-[60%] border-b border-[#ddd] flex items-center justify-between mb-2 cursor-pointer relative border-2"
        key={faq.i}
        onClick={() => handleToggle(i)}
      >
        <div className="w-[80%]">
          <h1 className="text-sm md:text-xl">{faq.question}</h1>
          <AnimatePresence>
            {openQuestion === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className={`text-sm text-gray-700 font-light mt-4`}
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <motion.button
          animate={{ rotate: openQuestion === i ? 360 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute right-10 top-2"
        >
          {openQuestion === i ? (
            <>
              <ChevronUp size={35} className="cursor-pointer" />
            </>
          ) : (
            <ChevronDown size={35} className="cursor-pointer" />
          )}
        </motion.button>
      </motion.div>
    </>
  );
};

export default Accordian;
