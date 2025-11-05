"use client";

import React from "react";

interface TimelineItem {
  date: string;
  title: string;
  university: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "2010-2014",
    title: "Diploma In Human Interface",
    university: "University Of Temporary",
    description:
      "Interactively provide access to world-class material for unique catalysts for change progressive.",
  },
  {
    date: "2014-2016",
    title: "Diploma In Human Interface",
    university: "University Of Temporary",
    description:
      "Interactively provide access to world-class material for unique catalysts for change progressive.",
  },
];

const TimelineExperience: React.FC = () => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-[132px] top-0 bottom-0 w-[3px] bg-green-200" />

      <ul className="list-none pl-0 m-0">
        {timelineData.map((item, index) => (
          <li key={index} className="relative mb-14 pl-40">
            {/* Date Label */}
            <div className="absolute left-[-35px] top-2 w-24 text-right font-semibold text-gray-700">
              {item.date}
            </div>

            {/* Green Circle */}
            <div className="absolute left-[88px] top-2 w-7 h-7 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
              +
            </div>

            {/* Content Box */}
            <div className="bg-[#f7f9ff] p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <span className="text-green-600 font-medium block mb-2">
                {item.university}
              </span>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineExperience;
