// Resume.jsx
import React from 'react';
import Title from '../layouts/Title';
import ResumeCard from './ResumeCard';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';
import Interests from './Interests';

const Resume = () => {
    const [educationData, setEducationData] = React.useState(true);
    const [skillsData, setSkillsData] = React.useState(false);
    const [achievementsData, setAchievementsData] = React.useState(false);
    const [interestsData, setInterestsData] = React.useState(false);
    return (
        <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center mb-12'>
                <Title des="My Resume" />
            </div>

            {/* Navigation Tabs */}
            <div className='mb-8'>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4'>
                    <li onClick={() => { setEducationData(true) & setSkillsData(false) & setAchievementsData(false) & setInterestsData(false) }} className={`${educationData ? "border-[var(--color-designColor)] rounded-lg" : "border-transparent"} resumeLi`}>
                        Education
                    </li>
                    <li onClick={() => { setEducationData(false) & setSkillsData(true) & setAchievementsData(false) & setInterestsData(false) }} className={`${skillsData ? "border-[var(--color-designColor)] rounded-lg" : "border-transparent"} resumeLi`}>Skills</li>
                    <li onClick={() => { setEducationData(false) & setSkillsData(false) & setAchievementsData(true) & setInterestsData(false) }} className={`${achievementsData ? "border-[var(--color-designColor)] rounded-lg" : "border-transparent"} resumeLi`}>Achievements</li>
                    <li onClick={() => { setEducationData(false) & setSkillsData(false) & setAchievementsData(false) & setInterestsData(true) }} className={`${interestsData ? "border-[var(--color-designColor)] rounded-lg" : "border-transparent"} resumeLi`}>Interests</li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
            {
                skillsData && <Skills />
            }
            {
                achievementsData && <Achievements />
            }
            {
                interestsData && <Interests />
            }
        </section>
    )
}

export default Resume;