import React from 'react'
import ResumeCard from './ResumeCard'
import Title from '../layouts/Title'
import { motion } from 'framer-motion'

const Achievements = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { duration: 0.5 } }} 
      className='w-full flex flex-col gap-8'
    >
      <div className='py-6 font-[var(--font-title)]'>
        <p className='text-sm text-[var(--color-designColor)] tracking-[4px]'>Achievements & Highlights</p>
        <h2 className='text-4xl font-bold'>My Achievements</h2>
      </div>

      <div className='w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
          title='600+ LeetCode Problems Solved'
          subTitle='Data Structures & Algorithms'
          result='LeetCode'
          des='Demonstrated strong problem-solving skills by solving over 600 DSA problems on LeetCode, covering arrays, trees, DP, graphs, and more.'
        />

        <ResumeCard
          title='Hackathon Participant'
          subTitle='Smart India Hackathon & College Hackathons'
          result='Top Performer'
          des='Participated in multiple hackathons focusing on real-world problem solving using web technologies; gained experience in team-based rapid development.'
        />

        <ResumeCard
          title='Teaching Assistant – DSA Lab'
          subTitle='Department of CSE Lab, LNMIIT'
          result='TA Experience'
          des='Assisted juniors in understanding programming fundamentals and debugging during lab sessions; improved communication and leadership through peer mentoring.'
        />
      </div>
    </motion.div>
  )
}

export default Achievements
