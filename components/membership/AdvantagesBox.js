import React from 'react'

export default function AdvantagesBox({icon,title,description}) {
  return (
    <div className='p-3 max-w-[300px] mx-auto lg:p-6 border-2 rounded-lg border-deep_purple_500 '>
        <img className='w-fit ml-auto' src="tick-dynamic-color-transformed.png" alt="" srcset="" />
        <p className='font-bold text-lg mb-2'>{title}</p>
        <p>{description}</p>
    </div>
  )
}
