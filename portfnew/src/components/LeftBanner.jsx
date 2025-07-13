import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaGithub, FaInstagram, FaJava, FaLinkedin, FaLinux, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiRedux, SiCplusplus, SiNextdotjs, SiClerk, SiC } from "react-icons/si";
import { FaJ } from 'react-icons/fa6';
import TypingAnimation from './typewriter/TypingAnimation';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['a Web Developer.', 'a MERN Stack Enthusiast.', 'a Tech Lover.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    delay:3000
  });

  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      {/* Intro Text with Typing Animation */}
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-[var(--font-normal)]'>
          <TypingAnimation
            text="Welcome to My Portfolio"
            speed={60}
            className="text-gray-300"
            cursorClassName="bg-gray-300"
            hideCursorAfterComplete={true}
          />
        </h4>

        <h1 className='text-5xl font-bold text-white'>
          <TypingAnimation
            text="Hi, I'm "
            speed={70}
            delay={500}
            hideCursorAfterComplete={true}
          />
          &nbsp;
          <TypingAnimation
            text="Yashmeet Swami"
            speed={70}
            delay={900}
            className="text-[var(--color-designColor)] capitalize"
            cursorClassName="bg-[var(--color-designColor)]"
            hideCursorAfterComplete={true}
          />
        </h1>

        <h2 className='text-4xl font-bold text-white'>
          <span>{text}</span>
        </h2>

        <p className='text-base font-[var(--font-body)] leading-6 tracking-wide'>
          <TypingAnimation
            text="I'm a web developer with a focus on MERN stack. I enjoy building clean, responsive, and user-friendly websites from development to deployment."
            speed={30}
            delay={2200}
            hideCursorAfterComplete={true}
          />
        </p>
      </div>

      {/* Social + Skills Section */}
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between'>
        {/* Social Icons */}
        <div>
          <h2 className='text-base uppercase font-[var(--font-title)] mb-4'>Find me in</h2>
          <div className='flex gap-3'>
            <span className='banner-icon'><FaLinkedin /></span>
            <span className='banner-icon'><FaGithub /></span>
            <span className='banner-icon'><FaInstagram /></span>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className='text-base uppercase font-[var(--font-title)] mb-4'>Best skills on</h2>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'>
            <span className='banner-icon'><SiMongodb /></span>
            <span className='banner-icon'><SiExpress /></span>
            <span className='banner-icon'><SiTailwindcss /></span>
            <span className='banner-icon'><FaReact /></span>
            <span className='banner-icon'><SiJavascript /></span>
            <span className='banner-icon'><SiMysql /></span>
            <span className='banner-icon'><FaJava /></span>
            <span className='banner-icon'><SiHtml5 /></span>
            <span className='banner-icon'><SiCss3 /></span>
            <span className='banner-icon'><SiNodedotjs /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner
