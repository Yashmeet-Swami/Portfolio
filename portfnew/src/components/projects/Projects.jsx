import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import projectOne from '../../assets/images/projects/projectOne.jpg'
import projectTwo from '../../assets/images/projects/projectTwo.jpg'
import projectThree from '../../assets/images/projects/projectThree.jpeg'
const Projects = () => {
    return (
        <section
            id="projects"
            className='w-full py-20  border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center mb-12'>
                <Title
                    title="Visit my portfolio and give your feedback"
                    des="My Projects" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"> */}
                    <ProjectsCard
                        title="SOCIAL MEDIA CLONE"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectOne}
                    />
                    <ProjectsCard
                        title="E-commerce Website"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectTwo}
                    />
                    <ProjectsCard
                        title="Chatting App"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectThree}
                    />
                    <ProjectsCard
                        title="SOCIAL MEDIA CLONE"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectThree}
                    />
                    <ProjectsCard
                        title="E-commerce Website"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectOne}
                    />
                    <ProjectsCard
                        title="Chatting App"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={projectTwo}
                    />
                </div>
            {/* </div> */}
        </section>
    )
}

export default Projects
