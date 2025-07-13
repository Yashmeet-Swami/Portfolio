import React from 'react'
import profimg from '../assets/images/profimg.png'

const RightBanner = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        <div className="relative">
          {/* Shadow Box */}
          <div className="w-[220px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
                    h-auto bg-gradient-to-r from-[#1e2024] to-[#202327] 
                    shadow-[var(--shadowOne)] rounded-xl 
                    absolute inset-0 z-0" />

          {/* Profile Image */}
          <img
            src={profimg}
            alt="Banner"
            className="w-[220px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
                 h-auto object-contain relative z-10"
          />
        </div>
      </div>
  )
}

export default RightBanner
