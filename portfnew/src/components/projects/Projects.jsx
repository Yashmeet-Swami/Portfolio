import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import proj1 from '../../assets/images/projects/proj1.png'
import projectTwo from '../../assets/images/projects/projectTwo.png'

const Projects = () => {
    return (
        <section
            id="projects"
            className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center mb-12'>
                <Title des="My Projects" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14'>
                <ProjectsCard
                    title="TASKSYNC – Team Collaboration & Workflow Tool"
                    des="TaskSync is a full-stack team collaboration and workflow tool built with the MERN stack. It enables task planning, tracking, and management via shared workspaces, real-time updates, and smart analytics. I implemented JWT authentication, email invites using Nodemailer, and RESTful APIs for task, project, and workspace management."
                    src={proj1}
                    githubLink="https://github.com/Yashmeet-Swami/Project-Manager"
                    liveLink="https://project-manager-three-nu.vercel.app/"
                    isEven={true}
                />

                <ProjectsCard
                    title="Portfolio Website"
                    des="A responsive and visually appealing personal portfolio built using React, Tailwind CSS, and Vite. It showcases my projects, skills, and contact information with smooth animations and clean UI design. Fully optimized for both desktop and mobile devices."
                    src={projectTwo}
                    githubLink="https://github.com/Yashmeet-Swami/portfolio"
                    liveLink="https://portfolio-spa3.vercel.app/"
                    isEven={true}
                />
            </div>
        </section>
    )
}

export default Projects