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

export default function BuyerMebmership() {
  const [state, dispatch] = useStateValue()

  return (
    <div className=" top-[10vh] pt-8 overflow-x-hidden fixed h-[90vh] w-full bg-white">
      <Head rel="canonical">
      <title>Membership for buyer | Find your home faster with our affordable buyer plans</title>
        <meta name="description" content="House hunting can be intimidating. With our buyer plans, you can save a lot of time and money. We study your requirements and provide you with contact information of genuine homeowners." />
        <link rel="canonical" accessKey='41' href="/buyer-membership" />
        </Head>
      <div className='px-4 mvsm:px-6'>
        <h3 className='text-3xl lg:text-4xl'>Find your home faster with our affordable buyer plans.</h3>
        <p className='text-lg leading-6 my-5'> House hunting can be intimidating. With our buyer plans, you can save a lot of time and money. We study your requirements and provide you with contact information of genuine homeowners.</p>
        <div className='my-8'>
          <div class=" max-w-4xl mx-auto mt-12 flex items-center justify-between px-8 py-4 border border-deep_purple_500 cursor-pointer rounded-xl">
              <h2 class="text-xl font-medium text-gray-700 sm:text-xl dark:text-gray-200">Basic</h2>
            <h2 class="text-2xl font-semibold text-deep_purple_500 dark:text-deep_purple_500 sm:text-3xl">₹299 <span class="text-base font-medium">/180 days</span></h2>
          </div>
          <div class="p-8 max-w-4xl mx-auto  mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
              <p class="textlg sm:text-xl">No. of owners you can contact: 5</p>

              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>

            <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
              <p class="textlg sm:text-xl">Privacy of your contact information</p>

              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <div class="flex justify-center mt-8">
            <button onClick={()=>handleBuy(299,state)} class="px-12 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-deep_purple_500 rounded-md hover:bg-deep_purple_400 focus:outline-none focus:bg-deep_purple_400 focus:ring focus:ring-deep_purple_A100 focus:ring-opacity-80">
              Buy Plan
            </button>
          </div>
        </div>
        <h4 className='w-fit mx-auto text-deep_purple_700 text-2xl font-bold'>Advantages</h4>
        <div className='my-8 gap-9 grid msm:grid-cols-2 md:grid-cols-3'>
          <AdvantagesBox icon="" title=" Competitive Pricing" description="You receive all of the exclusive perks at extremely affordable costs" />
          <AdvantagesBox icon="" title="Save Time and money" description=" We connect you to only genuine and verified homeowners so you end up saving a lot of your time and money" />
          <AdvantagesBox icon="" title="Privacy" description=" Our relationship manager assists you in finding the house of your choice and follows up with support calls" />
        </div>
      </div>
      <FooterHero />
      <Footer />
    </div>
  )
}
