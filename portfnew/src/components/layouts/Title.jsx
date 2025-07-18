import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className='flex flex-col gap-4 font-[var(--font-title)] '>
        <h3 className='text-sm uppercase font-[var(--font-lighttext)] text-[var(--color-designColor)] tracking-wide'>
          {title}
        </h3>
        <h1 className='text-5xl text-gray-300 font-bold capitalize'>
          {des}
        </h1>
      </div>
  )
}

export default Title
