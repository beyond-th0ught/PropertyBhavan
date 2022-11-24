import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero"
import ImageCard from "../components/ImageCard/ImageCard";
import PropertyCard from "../components/FullDetailsComponents/Middle/PropertyCard";

import { useStateValue } from "../Store/StateProvider";


import dynamic from 'next/dynamic'
import Router, { useRouter } from "next/router";

const Company = dynamic(() => import('../components/Our supports/Company'), {
  ssr: false,
})

const AboutCard = dynamic(() => import('../components/AboutCard/AboutCard'), {
  ssr: false,
})

const HomeFaq = dynamic(() => import('../components/FAQ/HomeFaq'), {
  ssr: false,
})

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})











const Home = ({findPropertyRef} ) => {
  console.warn = () => { };
  const [state, dispatch] = useStateValue();

  const router = useRouter()
  const handleExplore = () => {
    router.push(`/explore/skip/${20}`)
  }

  const handleClick = () => {
    window.open('https://calendly.com/propertybhavan/schedule-a-call');
  };





  const clickToLogin = () => {
    state.loginRef.current?.click();
  };

  const handleListProperty = () => {
    if (state.cookie_token) {
      router.push("/ListYourPropertyButton");
    } else {
      clickToLogin();
    }
  }


  return (
    <div>
      <div className="home_page">

        <Hero findPropertyRef={findPropertyRef} />
        <br />
        <div className=" home_mid sm:px-8">
          
          <div className=" popular_tag max-w-7xl  xl:inline text-2xl text-black font-semibold mt-4 ">
            Popular Localities in{" "}
            <span className="xl:inline text-purple">Kolkata</span>
          </div>
          <ImageCard />
          <div className="flex flex-col justify-center items-center  ">
            <h1 className="text-purple font-semibold " >We’re Brokerage-free!</h1>
            <h2 className="font-medium my-3 ">Post Your Property</h2>
            <p className="w-full text-center mb-8 mvsm:w-3/4 md:w-6/12">
              There are many real estate agents in India who will charge high
              brokerage fees and make unrealistic promises. Why spend more if you
              can list your property on PropertyBhavan.
            </p>
            <button onClick={handleListProperty} className="bg-deep_purple_400 mb-3 w-60 py-2 rounded-md text-lg font-medium text-white ">List Your Property</button>
            <button onClick={handleClick} className="bg-black mb-3 text-center w-60 py-2 rounded-md text-lg font-medium text-white ">Contact Us</button>
            <img className="h-64 min-w-[100vw] mb-5 " src='vitaly-taranov-J6hE2DTWSEw-unsplash-Copy-transformed.jpeg' alt="building_image" srcset="" />
          </div>
          <Company/>
          <div className="lg:inherit  max-w-7xl  xl:inline text-2xl text-black font-semibold mt-4 ">
            Here’s what to <span className="xl:inline text-purple">love </span>{" "}
            about us
            <br />
          </div>
          <div className="lg:relative max-w-7xl py-5 sm:mt-0 xl:relative">
            Real estate agents charge brokerage fees that are high and
            unregulated. It is difficult to tell how much you will be charged
            until you have already decided to accept the agent's services because
            the fees are not transparent. This can have an impact on your budget
            for purchasing a new home. We realize that the search for a property
            without paying a brokerage is not an easy task.
          </div>
          <AboutCard />
        </div>

        <HomeFaq/>
        <FooterHero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
