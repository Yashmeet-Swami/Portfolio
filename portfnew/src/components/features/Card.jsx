import React from 'react'

import { HiArrowRight } from 'react-icons/hi'

const Card = ({ title, des, icon }) => {
    return (
        <div className="w-full px-12 h-80 py-10 rounded-lg shadow-(--shadowOne) flex items-center
            bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
             hover:from-black hover:to-[#1e2024] transition-colors duration-1000">

            <div className='h-72 overflow-y-hidden'>
                <div className='flex h-full flex-col gap-10 lg:translate-y-12 translate-y-16 group-hover:translate-y-0 transition-transform duration-500'>
                    <div className=' justify-between w-10 h-8 flex flex-col'>
                        {
                            icon ? (
                                <span className='text-5xl text-[var(--color-designColor)]'>{icon}</span>
                            ): (
                                <>
                                <span className = 'w-full h-[2px] rounded-lg bg-[var(--color-designColor)] inline-flex'>{ icon }</span>
                                <span className='w-full h-[2px] rounded-lg bg-[var(--color-designColor)] inline-flex'>{icon}</span>
                                <span className='w-full h-[2px] rounded-lg bg-[var(--color-designColor)] inline-flex'>{icon}</span>
                                <span className='w-full h-[2px] rounded-lg bg-[var(--color-designColor)] inline-flex'>{icon}</span>
                                </>
                            )
                        }

                </div>

                <div className='flex flex-col gap-6'>
                    <h2 className='text-xl md:text-2xl font-[var(--font-title)]-bold text-gray-300'>{title}</h2>
                    <p className='base'>
                        {des}
                    </p>
                    <span className='text-[var(--color-designColor)] text-2xl'>
                        <HiArrowRight />
                    </span>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Card
