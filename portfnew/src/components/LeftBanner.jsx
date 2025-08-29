import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaJava, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiLeetcode,
} from 'react-icons/si';
import TypingAnimation from './typewriter/TypingAnimation';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'MERN Stack Enthusiast', 'Tech Lover'],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  const coreTechIcons = [
    { Icon: SiMongodb, title: 'MongoDB' },
    { Icon: SiExpress, title: 'Express' },
    { Icon: FaReact, title: 'React' },
    { Icon: SiNodedotjs, title: 'Node.js' },
    { Icon: SiJavascript, title: 'JavaScript' },
    { Icon: SiTailwindcss, title: 'Tailwind CSS' },
    { Icon: SiHtml5, title: 'HTML5' },
    { Icon: SiCss3, title: 'CSS3' },
    { Icon: FaJava, title: 'Java' },
    { Icon: SiMysql, title: 'MySQL' },
  ];

  return (
    <div className='w-full lgl:w-1/2 flex flex-col justify-start lgl:justify-center gap-12 mt-[-40px] lgl:mt-[-80px]'>
      {/* Welcome Message */}
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-1'>
          <h4 className='text-lg font-normal text-gray-400'>
            <TypingAnimation
              text='Welcome to My Portfolio'
              speed={60}
              className='text-gray-400'
              cursorClassName='bg-gray-400'
              hideCursorAfterComplete={true}
            />
          </h4>
        </div>

        {/* Name and Title */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-bold text-white leading-tight'>
            <div className='flex flex-wrap items-center'>
              <TypingAnimation
                text="Hi, I'm"
                speed={70}
                delay={500}
                hideCursorAfterComplete={true}
              />
              &nbsp;
              <span className='text-[var(--color-designColor)]'>Yashmeet Swami</span>
            </div>
          </h1>

          <h2 className='text-3xl font-bold text-white h-12 flex items-center'>
            <span className='text-gray-300'>I am</span>
            <span className='ml-2 text-[var(--color-designColor)]'>{text}</span>
            <Cursor cursorStyle='|' cursorColor='#ff014f' />
          </h2>
        </div>

        {/* Description */}
        <p className='text-base font-body text-gray-400 leading-relaxed max-w-[90%]'>
          <TypingAnimation
            text="I'm a web developer specializing in the MERN stack. I build clean, responsive, and user-friendly applications with a focus on performance and accessibility."
            speed={30}
            delay={2200}
            hideCursorAfterComplete={true}
          />
        </p>
      </div>

      {/* Social + Skills Section */}
      <div className='flex flex-col xl:flex-row gap-8 xl:gap-16'>
        {/* Social Icons */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-sm uppercase font-title tracking-widest text-gray-400'>Find me on</h2>
          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/yashmeet-swami/'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-box'
              title='LinkedIn'
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href='https://github.com/Yashmeet-Swami'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-box'
              title='GitHub'
            >
              <FaGithub size={20} />
            </a>
            <a
              href='https://leetcode.com/u/22ucc120/'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-box'
              title='LeetCode'
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        {/* Skills Grid */}
        <div className='flex flex-col gap-4'>
          <h2 className='text-sm uppercase font-title tracking-widest text-gray-400'>Core Technologies</h2>
          <div className='grid grid-cols-4 sm:grid-cols-5 gap-3'>
            {coreTechIcons.map(({ Icon, title }, idx) => (
              <div key={idx} className='icon-box' title={title}>
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
