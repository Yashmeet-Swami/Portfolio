import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex items-start">
      {/* Timeline bar and dot */}
      <div className="w-10 h-[6px] bg-black bg-opacity-30 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex items-center justify-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-[var(--color-body)] group-hover:bg-[var(--color-designColor)] transition-colors duration-300"></span>
        </span>
      </div>

      {/* Card Content */}
      <div className="w-full bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg p-4 lg:px-6 lgl:px-10 flex flex-col justify-center gap-4 lgl:gap-6 shadow-[var(--shadowOne)]">

        {/* Title & Subtitle Section */}
        <div className="flex flex-col lgl:flex-row justify-between items-start lgl:items-center gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold  text-white group-hover:text-[var(--color-designColor)] transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm mt-1 text-gray-400 font-[var(--font-title)] group-hover:text-white transition-all duration-300">
              {subTitle}
            </p>
          </div>

          {/* Result Badge */}
          <div className="px-4 py-1 rounded-lg bg-black bg-opacity-25 text-[var(--color-designColor)] shadow-[var(--shadowOne)] text-sm  font-[var(--font-title)]">
            {result}
          </div>
        </div>

        {/* Description */}
        {des && (
          <p className="text-sm md:text-base text-gray-400 font-[var(--font-title)] group-hover:text-gray-300 transition-all duration-300 leading-relaxed">
            {des}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeCard;
