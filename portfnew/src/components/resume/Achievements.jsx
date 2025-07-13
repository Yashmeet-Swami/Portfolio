import React from 'react'
import ResumeCard from './ResumeCard'
import Title from '../layouts/Title'
import { motion } from 'framer-motion';
const Achievements = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 , transition: { duration: .5 } }} className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left Column - Education */}
            <div>
                    <div className='py-6 font-[var(--font-title)]'>
                        <p className='text-sm text-[var(--color-designColor)] tracking-[4px]'>2019 - 2025</p>
                        <h2 className='text-4xl font-bold'>Education Qualification</h2>
                    </div>

                    <div className='mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                        <ResumeCard
                            title='Computer and Communication Engineering'
                            subTitle='The LNM Institute of Information Technology, Jaipur (2022 - Present)'
                            result='7.78/10 (CGPA)'
                            des='Currently pursuing a Bachelor of Technology in Computer and Communication Engineering (2022-2026) building expertise in software development, algorithms, and full-stack web applications.'
                        />
                        <ResumeCard
                            title='Senior Secondary Education'
                            subTitle='Maharishi Dayanand Public School, Jaipur (2021)'
                            result='87.40%'
                            des='Scored 87.40% in the Class 12 CBSE Examination, with a focus on Science and Mathematics.'
                        />
                        <ResumeCard
                            title='Secondary Education'
                            subTitle='St. Teresa School, Jaipur (2019)'
                            result='94%'
                            des='Achieved 94% in the Class 10 CBSE Examination, demonstrating a strong foundation in core subjects.'
                        />
                    </div>
        </div>

    {/* Right Column - JEE Achievements */}
    <div>
            <div className='py-6 font-[var(--font-title)]'>
                <p className='text-sm text-[var(--color-designColor)] tracking-[4px]'>Competitive Exams</p>
                <h2 className='text-4xl font-bold'>JEE Performance</h2>
            </div>

                    <div className='mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                        <ResumeCard
                            title='JEE Advanced'
                            subTitle='Indian Institutes of Technology (2022)'
                            result='AIR 20000'
                            des='Secured All India Rank of 19746 in JEE Advanced, among top 11.1% of candidates nationwide.'
                        />
                        <ResumeCard
                            title='JEE Mains'
                            subTitle='National Testing Agency (2022)'
                            result='97 Percentile'
                            des='Achieved 97 percentile in JEE Mains, demonstrating strong aptitude in Physics, Chemistry, and Mathematics.'
                        />
                    </div>
                </div>
            </motion.div>
  )
}

export default Achievements
