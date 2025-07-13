import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
const Banner = () => {

  return (
    <section id="home"
      className='w-full pt-14 pb-20 flex flex-col gap-10 lg:gap-0 lg:flex-row items-center border-b-[1px] font-[var(--font-title)] border-b-black'
    >
      <LeftBanner />
      <RightBanner />
    </section>
  )
}

export default Banner
