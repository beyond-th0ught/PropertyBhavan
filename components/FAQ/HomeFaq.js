import React from 'react'
import FAQ from './FAQ'

export default function HomeFaq() {
  return (
    <div className="w-full  mt-8 px-3 vsm:px-8 bg-gray-100 flex-col flex justify-center pb-4">
          <h3 className='text-xl mvsm:text-2xl my-4'>Frequently asked questions</h3>
          <div className=" w-full ">
            <FAQ que='What is Propertybhavan?' ans='Property Bhavan is a real estate website where you can buy/sell/rent a residential or commercial property without the hindrance of a broker.' detault={true}/>
            <FAQ que='Why Propertybhavan?' ans='We realize that finding a property without paying brokerage is not an easy task. Propertybhavan came into existence to bridge the gap between the buyers and sellers. '/>
            <FAQ que='How to post my property?' ans='Posting property with us is really simple

Step one: Log in to your account.
Step two: Fill in your details.
Step three: Add photographs of your property.
Step four: Upload your property and it’s done.'/>
            <FAQ que='What are the other ways to post your property?' ans='You can even post your property through WhatsApp. Send us the details of your property along with the photos at 8276035390 through Whatsapp. We will post it for you.'/>
            <FAQ que='In which states do you offer your service?' ans='We are offering our services within West Bengal at the moment.'/>
    </div>
</div>
  )
}
