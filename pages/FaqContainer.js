import React from 'react'
import { useTitle } from '../components/Helper/Helper'
import FAQ from '../components/FAQ/FAQ'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

export default function FaqContainer() {
  // useTitle("FAQ | Frequently Asked Questions","1.What is Propertybhavan? 2.Why Propertybhavan? 3.How to post my property? 4.In which states do you offer your service? 5.What are the other ways to post your property?")
  return (
    
    <div className='overflow-x-hidden absolute top-[10vh]'>
      <Head rel="canonical">
        <title>FAQ | Frequently Asked Questions</title>
        <meta name="description" content="1.What is Propertybhavan? 2.Why Propertybhavan? 3.How to post my property? 4.In which states do you offer your service? 5.What are the other ways to post your property?" />
        <link rel="canonical" accessKey='43' href="/faq" />
        </Head>
    
    <div className="w-full  mt-8 px-3 vsm:px-8 bg-gray-100 flex justify-center pb-4">
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
            <FAQ que='Why do I need to verify my profile?
' ans='We aim at eliminating brokers from our portal.

By getting your profile verified the user gets to know you are a genuine buyer/seller, thus making the transaction easier.'/>
            <FAQ que='What are the advantages of verifying my profile?' ans='If your property is verified the user gets to know you are a genuine buyer/seller. Verified properties get top slots in our property listing which increases the chances of your property being sold faster.'/>
            <FAQ que='Can I check properties if my account is not verified?' ans='Yes, you can check properties if your account is not verified. But to get the owner’s email address or phone number you have to subscribe to one of our assured plans.'/>
            <FAQ que='What are the refund and cancellation policies?' ans='Your money does not get refunded once you take any of our verified plans. We will provide you with an extra contact detail if you report any broker. Your subscription gets canceled after the tenure ends.

Property Service
User Guide
Propertybhavan
11 Haridas Dawn Road
Kolkata, West Bengal - 700053

hello@propertybhavan.com
To know more about us, follow us on
Facebook
Instagram
Whatsapp
Company Info
About Us
Our Blog
Support
FAQ
Feedback Forum
Legal
Terms and Conditions
Privacy Policy
© 2022 Property Bhavan Private Limited.'/>
            <FAQ que='What are the benefits of Propertybhavan’s assured plans?' ans='By choosing any of our assured plans you become a verified buyer/seller. Your property gets the top slot in on our website, and gets notified to other users based on your search. We also do social media promotion.'/>
            <FAQ que='How to post my property through Whatsapp?' ans='You can send us your property details along with pictures through Whatsapp. We will post it for you.'/>
            <FAQ que='Where can I post any wrong information posted about a property?' ans='You can call or WhatsApp us at 8276035390 or you can email us at contact@propertybhavan.com'/>
            <FAQ que='How to connect with Property Bhavan’s customer care?' ans='Call Property Bhavan’s customer care at 8276035390 or you can Whatsapp us at 8276035390.'/>
            <FAQ que='How can I report a broker?' ans='You can directly report it from the “Report a Broker” option or you can email us at contact@propertybhavan.com

Propertybhavan
11 Haridas Dawn Road
Kolkata, West Bengal - 700053

hello@propertybhavan.com
To know more about us, follow us on
Facebook
Instagram
Whatsapp
Company Info
About Us
Our Blog
Support
FAQ
Feedback Forum
Legal
Terms and Conditions
Privacy Policy
© 2022 Property Bhavan Private Limited.'/>
            
          </div>
        </div>
        <FooterHero/>
        <Footer/>
        </div>
  )
}
