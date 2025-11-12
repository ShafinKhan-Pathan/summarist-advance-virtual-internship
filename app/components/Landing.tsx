import Image from "next/image";
import CaptionTitle from "../ui/CaptionTitle";
import {
  CaptionTitleData,
  FeatureTitles,
  RealTestimonials,
  StatisticContent1,
  StatisticContent2,
  StatisticRatio1,
  StatisticRatio2,
} from "../constants/StaticData";
import StatisticsWrapper from "./StatisticsWrapper";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LoginTriggerButton from "../ui/LoginTriggerButton";
import PublicLayout from "../layout/PublicLayout";

const Landing = () => {
  return (
    <PublicLayout>
      <>
        <Navbar />
        <main className="py-10 px-4 text-center md:text-left">
          <div className="w-full md:flex md:justify-between">
            <div className="w-full md:w-[50%] flex flex-col items-center justify-center gap-6 md:flex md:items-start p-2">
              <h1 className="font-bold text-xl md:text-2xl lg:text-4xl lg:max-w-[70%]">
                Gain more knowledge in less time
              </h1>
              <p className="text-sm text-slate-500 text-center w-[70%] md:text-start lg:max-w-[70%]">
                Great summaries for busy people, individuals who barely have
                time to read, and even people who dont like to read.
              </p>
              <LoginTriggerButton />
            </div>
            <div className="hidden md:flex w-[50%] md:items-center justify-center">
              <figure>
                <Image
                  src="/landing.png"
                  alt="LandingLogo"
                  width={550}
                  height={350}
                  className="hidden md:block h-auto w-auto"
                  priority
                />
              </figure>
            </div>
          </div>
          <h1 className="py-10 px-4 text-center p-4 text-2xl font-bold ">
            Understand books in few minutes
          </h1>
          <div className="py-10 px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {CaptionTitleData.map((captionTitle, i) => (
                <CaptionTitle
                  key={i}
                  icon={captionTitle.icon}
                  title={captionTitle.title}
                  description={captionTitle.description}
                />
              ))}
            </div>
          </div>
          <StatisticsWrapper
            content={StatisticContent1}
            ratio={StatisticRatio1}
          />
          <StatisticsWrapper
            reverse
            content={StatisticContent2}
            ratio={StatisticRatio2}
          />
          <h1 className="font-bold text-xl text-center py-10">
            What out members say
          </h1>
          <div className="flex flex-col justify-center items-center w-full md:w-2/2 lg:w-2/3 md:m-auto gap-4">
            {RealTestimonials.map((testimonial, i) => (
              <Testimonials
                key={i}
                name={testimonial.name}
                star={testimonial.star}
                review={testimonial.review}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center w-[70%] m-auto p-4">
            <LoginTriggerButton />
          </div>
          <h1 className="py-10 px-4 text-center p-4 text-2xl font-bold ">
            Understand books in few minutes
          </h1>
          <div className="py-10 px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FeatureTitles.map((feature, i) => (
                <CaptionTitle
                  key={i}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  feature
                />
              ))}
            </div>
          </div>
          <Footer />
        </main>
      </>
    </PublicLayout>
  );
};

export default Landing;
