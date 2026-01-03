import Image from "next/image";
import React, { Profiler } from "react";
import { reviews } from "../_data/review";
import { UserIcon } from "lucide-react";

const Reviews = () => {
  return (
    <section className="py-16 bg-white" id="students">
      <p className="text-xs text-gray-400 text-center mt-1">Student Review</p>

      <div className="flex gap-6 overflow-x-auto px-4 max-w-6xl mx-auto scrollbar-hide">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="min-w-[280px] bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            {/* <Image
              src={r.image}
              alt={r.name}
              width={100}
              height={80}
              className="w-16 h-16 rounded-full mx-auto object-cover"
            /> */}
            <div className="w-16 h-16 rounded-full mx-auto object-cover bg-gray-200">
              <UserIcon className="h-8 w-8 mx-auto my-auto" />
            </div>
            <h4 className="font-semibold text-center mt-3">{r.name}</h4>
            <p className="text-sm text-gray-500 text-center">{r.course}</p>

            <Stars count={r.rating} />

            <p className="text-sm text-gray-700 mt-3 text-center">
              “{r.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
type StarsProps = {
  count: number; // rating value
};

const Stars: React.FC<StarsProps> = ({ count }) => (
  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < count ? "⭐" : "☆"}</span>
    ))}
  </div>
);
