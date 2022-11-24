import React from 'react'


export default function Alert({alert}) {
    
  return (
      alert && <div className={`py-3 right-0 md:w-1/2 md:rounded-l-md  w-full top-[10vh] fixed ${alert.success ? 'bg-deep_purple_500' : 'bg-red-400'} z-10`}>
        <p className='text-xl px-8 font-bold text-white'><span>{!alert.success && `Ops ! `}</span> {alert.msg} </p>
    </div>
  )
}
