"use client";
import { useState } from "react";
import { ChoosePlans, FaqsData } from "../constants/StaticData";
import CaptionTitle from "../ui/CaptionTitle";
import Divider from "../ui/Divider";
import Button from "../ui/Button";
import Footer from "../components/Footer";
import Accordian from "../ui/FaqSection";
const plans = [
  {
    id: "yearly",
    title: "Premium Plus Yearly",
    price: "$99.99/year",
    trial: "7-day free trial included",
  },
  {
    id: "monthly",
    title: "Premium Monthly",
    price: "$9.99/month",
    trial: "No trial included",
  },
];

const page = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  return (
    <>
      <div className="w-full">
        <div className="text-center w-full relative">
          <div className="choose__plan--header text-white w-full md:rounded-br-[16rem] md:rounded-bl-[16rem] bg-[#032b41] -z-1 ">
            <div className="max-w-[85%] m-auto flex justify-center items-center flex-col  gap-8 ">
              <h1 className="text-2xl md:text-4xl w-full md:max-w-[80%] mt-4 font-bold ">
                Get unlimited access to many amazing books to read
              </h1>
              <p className="text-md w-full md:max-w-[80%]">
                Turn ordinary moments into amazing learning opportunities
              </p>
              <figure className="flex justify-center max-w-[300px] m-auto rounded-t-[180px] overflow-hidden">
                <img src={"/pricing-top.png"} alt="Pricing Image" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-4 text-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:max-w-[75%] m-auto">
          {ChoosePlans.map((captionTitle, i) => (
            <CaptionTitle
              key={i}
              icon={captionTitle.icon}
              description={captionTitle.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-12 gap-4">
        <h1 className="text-xl font-bold p-4">Choose the plan that fits you</h1>
        {plans.map((plan, index) => (
          <div key={plan.id} className="w-full md:max-w-[50%]">
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`cursor-pointer p-6 rounded-lg border-2 transition-all ${
                selectedPlan === plan.id
                  ? "border-green-500 bg-[#f6faf6]"
                  : "border-gray-300 bg-white"
              }`}
            >
              <div className="flex gap-4 items-start">
                <input
                  type="radio"
                  checked={selectedPlan === plan.id}
                  readOnly
                  className="mt-1 w-5 h-5 accent-green-600"
                />
                <div>
                  <h3 className="font-semibold text-lg">{plan.title}</h3>
                  <h1 className="text-xl font-bold">{plan.price}</h1>
                  <p className="text-sm text-gray-500">{plan.trial}</p>
                </div>
              </div>
            </div>
            {index === 0 && (
              <div className="w-full flex items-center justify-center pt-4">
                <div className="h-px w-28 bg-gray-300" />
                <span className="px-3 text-gray-500 text-sm">or</span>
                <div className="h-px w-28 bg-gray-300" />
              </div>
            )}
          </div>
        ))}
        <div className="w-full md:max-w-[50%] flex flex-col items-center justify-center p-4 sticky bottom-0 bg-white">
          <Button subscription={true} selectedPlan={selectedPlan} />
          <p className="text-center text-xs p-2 text-gray-400">
            {selectedPlan === "monthly"
              ? "30-day money back guarantee, no questions asked."
              : "Cancel your trial at any time before it ends, and you wont be charged."}
          </p>
        </div>

        {FaqsData?.map((faq, i) => (
          <Accordian
            faq={faq}
            i={i}
            key={i}
            openQuestion={openQuestion}
            setOpenQuestion={setOpenQuestion}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
