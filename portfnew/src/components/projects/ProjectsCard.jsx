import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src, githubLink, liveLink, isEven }) => {
  const handleIconClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col 
      ${isEven ? 
        'bg-gradient-to-r from-[#1e2024] to-[#23272b]' : 
        'bg-gradient-to-r from-bodyColor to-[#202327]'
      } 
      group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000`}>
      
      {/* Image Container with subtle border effect */}
      <div className={`w-full h-auto overflow-hidden rounded-lg 
        ${isEven ? 'border border-[#2a2e35]' : 'border border-[#25282d]'}`}>
        <img
          className='w-full h-full max-h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer'
          src={src}
          alt={title}
        />
      </div>
      
      <div className='w-full mt-5 flex flex-col gap-6'>
        <div>
          <div className='flex items-center justify-between'>
            <h3 className={`text-base uppercase font-normal
              ${isEven ? 'text-[#ff6b6b]' : 'text-[var(--color-designColor)]'}`}>
              {title}
            </h3>
            <div className="flex gap-2">
              <span 
                onClick={() => handleIconClick(githubLink)}
                className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center 
                  ${isEven ? 
                    'bg-[#1e2227] text-gray-300 hover:text-[#ff6b6b]' : 
                    'bg-black text-gray-400 hover:text-[var(--color-designColor)]'
                  } duration-300 cursor-pointer`}
                title={githubLink ? "View on GitHub" : "GitHub link not available"}
              >
                <BsGithub />
              </span>
              <span 
                onClick={() => handleIconClick(liveLink)}
                className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center 
                  ${isEven ? 
                    'bg-[#1e2227] text-gray-300 hover:text-[#ff6b6b]' : 
                    'bg-black text-gray-400 hover:text-[var(--color-designColor)]'
                  } duration-300 cursor-pointer`}
                title={liveLink ? "View Live Demo" : "Live demo not available"}
              >
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className={`text-sm tracking-wide mt-3 duration-300
            ${isEven ? 'text-gray-300 hover:text-white' : 'hover:text-gray-100'}`}>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;