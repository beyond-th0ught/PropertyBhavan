import React from 'react'
import AdvantagesBox from '../components/membership/AdvantagesBox'
import { handleBuy, useTitle } from '../components/Helper/Helper';
import { useStateValue } from '../Store/StateProvider';
import dynamic from 'next/dynamic'
import Head from 'next/head';

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

export default function OwnerMebmership() {
  const [state, dispatch] = useStateValue()
  return (
    <div className=" top-[10vh] fixed h-[90vh] pt-8 overflow-x-hidden w-full bg-white">
      <Head rel="canonical">
      <title>Mebmership for owner | Make your property stand out with our exclusive plans</title>
        <meta name="description" content="You can sell or rent your property fast by subscribing to one of our owner packages. We verify your property and increase visibility for your ad. With our plans, you attract more enquiries from potential buyers or tenants. You get priority slots that help youstand out from the rest." />
        <link rel="canonical" href="/owner-membership" accessKey='48' />
        </Head>
      <div className='px-4 mvsm:px-6'>
        <h3 className='text-3xl lg:text-4xl '>Make your property stand out with our exclusive plans.</h3>
        <p className='text-xl leading-6 my-5'>You can sell or rent your property fast by subscribing to one of our owner packages. We verify your property and increase visibility for your ad. With our plans, you attract more enquiries from potential buyers or tenants. You get priority slots that help youstand out from the rest.</p>
        <div className='my-8'>
          <div class=" max-w-4xl mx-auto mt-12 flex items-center justify-between px-8 py-4 border border-deep_purple_500 cursor-pointer rounded-xl">
              <h2 class="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Basic</h2>            
            <h2 class="text-2xl font-semibold text-deep_purple_500 dark:text-deep_purple_500 sm:text-3xl">₹499 <span class="text-base font-medium">/90 days</span></h2>
          </div>
          <div class="p-8 max-w-4xl mx-auto  mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
              <p class="textlg sm:text-xl">Number of Listings: 2</p>

              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>

            <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
              <p class="textlg sm:text-xl">Privacy of your phone number</p>

              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>

            <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
              <p class="textlg sm:text-xl">Verified tag on both the property</p>

              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>

            <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
              <p class="textlg sm:text-xl">Property promotion on site for 25 Days</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <div class="flex justify-center mt-8">
            <button onClick={()=>handleBuy(499,state)} class="px-14 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-deep_purple_500 rounded-md hover:bg-deep_purple_400 focus:outline-none focus:bg-deep_purple_400 focus:ring focus:ring-deep_purple_A100 focus:ring-opacity-80">
              Buy Plan
            </button>
          </div>
        </div>
        <h4 className='w-fit mx-auto text-deep_purple_700 text-2xl font-bold'>Advantages</h4>
        <div className='my-8 gap-9 grid msm:grid-cols-2 md:grid-cols-3'>
          <AdvantagesBox icon="" title="Priority Listing" description="We feature your property on te front page of our website attracting maximum visibility." />
          <AdvantagesBox icon="" title="Verified tag" description="Your ad receives a verification tag once we verify your property. This helps your property to stand out from the rest." />
          <AdvantagesBox icon="" title="Privacy" description="Your contact information remains private and is only available to screened and verified buyers and tenants." />
        </div>
      </div>
      <FooterHero />
      <Footer />
    </div>
  )
}
