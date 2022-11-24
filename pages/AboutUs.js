import React from "react";
import dynamic from 'next/dynamic'

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

export default function AboutUs() {
  return (
    <div className="top-[10vh] h-[90vh] overflow-x-hidden fixed overflow-y-auto bg-white  terms_container">
      <div className="p-3 vsm:p-8">
        <h2 className="mx-auto text-purple w-fit font-bold py-7 text-2xl mvsm:text-4xl">
          About Us
        </h2>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            About Property Bhavan
          </h3>
          <p className="font-medium">
            Property Bhavan is a real estate platform where you can
            buy/rent/sell property without the hindrance of a broker. This
            platform came into existence to bridge the gap between buyers and
            sellers.We take you through the entire journey of buying, selling,
            or renting a house. It’s a one-place stop for all your real estate
            needs.
          </p>
        </div>
        <div>
          <h3 className=" font-medium py-3 text-xl mvsm:text-2xl">
            Why propertybhavan.com?
          </h3>
          <p className="font-medium">
            With the ever-evolving online search behaviour, propertybhavan.com
            shares updated information pertinent to real estate activities,
            assisting prospective buyers to make informed buying decisions. We
            make online property searches easier, quicker and smarter!
          </p>
        </div>
      </div>
      <FooterHero />
      <Footer />
    </div>
  );
}
