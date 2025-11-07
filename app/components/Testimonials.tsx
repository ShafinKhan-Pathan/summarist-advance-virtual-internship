import type { Testimonials } from "../constants/StaticData";

const Testimonials = ({ name, star, review }: Testimonials) => {
  let starValue = new Array(star).fill("⭐");

  return (
    <>
      <div className="p-8 w-full flex flex-col items-start justify-start bg-[#fff3d7]">
        <p>
          {name}{" "}
          <span>
            {Array.from({ length: star ?? 0 }).map((_, i) => (
              <span key={i} className="text-blue-700">
                ⭐
              </span>
            ))}
          </span>
        </p>
        <p className="text-start">
          {review}
        </p>
      </div>
    </>
  );
};

export default Testimonials;
