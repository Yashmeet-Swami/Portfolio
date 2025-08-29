import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillCode, AiFillLayout, AiFillInteraction, AiFillSignal, AiFillEdit } from 'react-icons/ai';

const Features = () => {
  return (
    <section id="features" className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center mb-12'>
        <Title des="Features" />
      </div>
      {/* Added spacing div here with mt-12 (3rem) */}
      <div className='mt-12 flex flex-col items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
          <Card
            title="Web Development"
            des="I build modern, scalable, and responsive websites using the latest frontend and backend technologies to ensure seamless user experiences."
            icon={<AiFillCode />}
          />

          <Card
            title="UI/UX Design"
            des="I craft visually appealing and intuitive interfaces that prioritize user experience, ensuring easy navigation and engagement across devices."
            icon={<AiFillInteraction />}
          />

          <Card
            title="SEO Optimization"
            des="I enhance website structure, content, and performance to improve visibility on search engines, helping businesses reach their target audience effectively."
            icon={<AiFillSignal />}
          />

          {/* Placeholder for future cards */}
          <div className="hidden md:block lg:hidden"></div> {/* Spacer for even layout */}
        </div>
      </div>

    </section>
  )
}

export default Features