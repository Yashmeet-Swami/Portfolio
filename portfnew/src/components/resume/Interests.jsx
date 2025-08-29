import React from 'react'
import ResumeCard from './ResumeCard'
import Title from '../layouts/Title'
import { motion } from 'framer-motion';

const Interests = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { duration: 0.5 } }} 
      className='grid grid-cols-1 lg:grid-cols-2 gap-8'
    >
      {/* Left Column - Extra Curricular Activities */}
      <div>
        <div className='py-6 font-[var(--font-title)]'>
          <p className='text-sm text-[var(--color-designColor)] tracking-[4px]'>Beyond Academics</p>
          <h2 className='text-4xl font-bold'>Extra Curricular Activities</h2>
        </div>

        <div className='mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Active Participation'
            subTitle='Sports & Cultural Events'
            result=''
            des='Actively participated in sports and cultural activities in college events.'
          />
          <ResumeCard
            title='College Fest Volunteer'
            subTitle='Organizational Team'
            result=''
            des='Volunteered in college fest organization, contributing to event planning and execution.'
          />
        </div>
      </div>

      {/* Right Column - Personal Interests */}
      <div>
        <div className='py-6 font-[var(--font-title)]'>
          <p className='text-sm text-[var(--color-designColor)] tracking-[4px]'>Personality</p>
          <h2 className='text-4xl font-bold'>Personal Interests / Hobbies</h2>
        </div>

        <div className='mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Hobbies'
            subTitle='Sports, Music & More'
            result=''
            des='Playing Cricket, Badminton, and Table Tennis | Listening to Music | Exploring Travel | Casual Gaming | Watching Sports & Documentaries'
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Interests
