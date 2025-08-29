import React from 'react';

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center relative">
      <div className="relative w-full max-w-md h-80 lg:h-96 flex items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full border-2 border-designColor opacity-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 rounded-full border border-designColor opacity-5 animate-ping-slow"></div>
        </div>

        {/* Quote container */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
          <div className="text-6xl font-bold text-designColor opacity-30 mb-2 leading-none">"</div>
          
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-4 text-gray-300">
            <span className="text-designColor font-medium">Code</span> is{' '}
            <span className="text-gray-300">poetry</span>{' '}
            <br className="md:hidden" />
            <span className="text-gray-300">written in</span>{' '}
            <span className="text-designColor font-semibold">logic</span>
          </blockquote>
          
          <div className="text-6xl font-bold text-designColor opacity-30 rotate-180 mt-2 leading-none">"</div>
          
          {/* Decorative divider */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-designColor"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;