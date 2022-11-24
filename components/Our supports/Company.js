import React from 'react'
import Image from 'next/image'
import digital from '../../public/digital-ocean.png'
import retool from '../../public/retool.png'
import zoho from '../../public/zoho.png'
import notion from '../../public/notion.png'
import twilio from '../../public/twilio.png'
import sg from '../../public/sg.png'
import startup from '../../public/startup-india.png'
import nasscom from '../../public/nasscom.png'
export default function Company() {
  return (
    <div>
        <h3 className='text-2xl md:text-3xl font-semibold'>Companies supporting us</h3>
        <div className='my-8 justify-center mx-auto items-center gap-x-16 flex flex-wrap'>
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={digital} alt=""/>
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={retool} alt="" />
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={zoho} alt=""  />
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={notion} alt=""  />
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={twilio} alt=""  />
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={sg} alt=""  />
          <Image className='msm:h-[70px] h-[50px] md:h-[100px] w-auto mx-auto' src={startup} alt=""  />
          <Image className='msm:h-[70px] h-[50px] md:h-[150px] w-auto mx-auto' src={nasscom} alt=""  />
        </div>
    </div>
  )
}

