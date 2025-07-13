import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillCode, AiFillLayout, AiFillInteraction, AiFillSignal, AiFillEdit } from 'react-icons/ai';

const Features = () => {
  return (
    <section id="features" className='w-full py-20 border-b-[1px] border-b-black'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="Features" des="What I do" />
        
        {/* Added spacing div here with mt-12 (3rem) */}
        <div className='mt-12 flex flex-col items-center'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
            <Card 
              title="Web Development"
              des="I create responsive and modern websites using the latest technologies."
              icon={<AiFillCode />}
            />
            <Card 
              title="Mobile Development"
              des="I build mobile applications for both iOS and Android platforms."
              icon={<AiFillLayout />}
            />
            <Card 
              title="UI/UX Design"
              des="I design user-friendly interfaces and experiences."
              icon={<AiFillInteraction />}
            />
            <Card 
              title="SEO Optimization"
              des="I optimize websites for better search engine visibility."
              icon={<AiFillSignal />}
            />
            <Card 
              title="Content Creation"
              des="I create engaging content for websites and social media."
              icon={<AiFillEdit />}
            />
            {/* Placeholder for future cards */}
            <div className="hidden md:block lg:hidden"></div> {/* Spacer for even layout */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features