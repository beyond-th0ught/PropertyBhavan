import React, {useState } from "react";
import styles from './ListYourProperty.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bed_image from "../Assets/bed.jpg";
import sale from "../Assets/sale_price.jpg";
import top_view from "../Assets/topView.jpg";
import { Carousel } from "react-responsive-carousel";
import { useStateValue } from "../Store/StateProvider";
import MembershipModal from "../components/membership/MembershipModal";
import { useRouter } from "next/router";
import Image from 'next/image'
import Head from "next/head";
import dynamic from 'next/dynamic'

const AboutCard = dynamic(() => import('../components/AboutCard/AboutCard'), {
  ssr: false,
})

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

const ListYourProperty = ({ findPropertyRef }) => {
  const router = useRouter();

  const [state, dispatch] = useStateValue();

  const clickToLogin = () => {
    state.loginRef.current?.click();
  };

  const handleClick = () => {
    window.open('https://calendly.com/propertybhavan/schedule-a-call');
  };

  const [openMemberModal, setOpenMemberModal] = useState(false)

  const handleListProperty = () => {
    // console.log(state)
    // if (state.cookie_token) {
    if (2) {
      console.log("login")
      if (state.profileData?.counterProperty <= 0) {
        setOpenMemberModal(true)
        // console.log(showLimitExaoust)
        return;
      }
      router.push("/ListYourPropertyButton");
    } else {
      // console.log("not login")
      clickToLogin();
    }
  }

  const handleFind = (str) => {
    console.log(str)
    str.loginRef.current?.click();
  };

  return (
    <div className={styles.listYourProperty}>
      <Head rel="canonical">
        <title>List Your Property</title>
        <meta name="description" content="You can even post your property through WhatsApp. Send us the details of your property along with the photos at 8276035390 through Whatsapp. We will post it for you." />
        <link rel="canonical" href="/ListYourProperty" accessKey="45" />
      </Head>
      <div className="px-3 py-6 vsm:px-8">
        <h1 className="text-3xl mvsm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold" >
          Post and to sell or rent out your property, <br />
          {/* <br /> */}
          <span className="leading-tight" style={{ color: "#341F87" }}> online and hassle-free.</span>
        </h1>
        <p className="text-lg msm:text-xl text-gray-400 my-8">
          List you property with our brokerage free platform and reach
          {/* <br /> */}
          our several potential buyers and renters.
        </p>
        <h3 style={{ color: "#341F87" }} className="text-2xl lg:text-3xl mt-6 font-semibold" >Sell or Rent your Property</h3>
        <div className="my-2 flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p className="flex-1 text-lg font-semibold">We will find you the ideal tenant or buyer.</p>
          </div>
          <div className="flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p className="flex-1 text-lg font-semibold">Enjoy 0% Brokerage</p>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-deep_purple_500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p className="flex-1 text-lg font-semibold">Your first property ad is on us!</p>
          </div>
        </div>
        <br />
        <button
          onClick={handleListProperty}
          className="bg-deep_purple_700 text-lg hover:bg-deep_purple_500 text-white px-10 py-2 rounded-lg"
        >
          Post Your Properties
        </button>

        <h1 className="mt-16 mb-7 text-2xl mvsm:text-3xl lg:text-4xl font-semibold">
          How to List Your <span style={{ color: "#341F87" }}>Apartment </span>
          for Sale or Rent.{" "}
        </h1>
        <div className={`${styles.how_to_list_desktop} flex justify-between my-8 gap-6`}>
          <div className="flex w-full justify-center flex-col gap-3">
            <Image className=" w-auto" src={bed_image} alt="select_beds" />{" "}
            <p className=" mvsm:text-base md:text-xl font-semibold  ">
              Choose your square foot area and select a price for renting or
              selling.
            </p>{" "}
          </div>
          <div className="flex w-full justify-center flex-col gap-3">
            <Image className=" w-auto" src={sale} alt="select_beds" />{" "}
            <p className=" mvsm:text-base md:text-xl font-semibold  ">
              Get your property listed and get contacts from buyers or tenants.
            </p>{" "}
          </div>
          <div className="flex w-full justify-center flex-col gap-3">
            <Image
              className=" w-auto rounded-3xl "
              src={top_view}
              alt="select_beds"
            />{" "}
            <p className=" mvsm:text-base md:text-xl font-semibold  ">
              Get your property listed and get contacts from buyers or tenants.
            </p>{" "}
          </div>
        </div>
        <div className={styles.how_to_list_phone}>
          <Carousel autoPlay={true} infiniteLoop={true}>
            <div className="flex w-full justify-center flex-col gap-3">
              <Image className=" w-auto" src={bed_image} alt="select_beds" />{" "}
              <p className=" mvsm:text-base md:text-xl font-semibold  ">
                Choose your square foot area and select a price for renting or
                selling.
              </p>{" "}
            </div>
            <div className="flex w-full justify-center flex-col gap-3">
              <Image className=" w-auto" src={sale} alt="select_beds" />{" "}
              <p className=" mvsm:text-base md:text-xl font-semibold  ">
                Get your property listed and get contacts from buyers or
                tenants.
              </p>{" "}
            </div>
            <div className="flex w-full justify-center flex-col gap-3">
              <Image
                className=" w-auto rounded-3xl "
                src={top_view}
                alt="select_beds"
              />{" "}
              <p className=" mvsm:text-base md:text-xl font-semibold  ">
                Get your property listed and get contacts from buyers or
                tenants.
              </p>{" "}
            </div>
          </Carousel>
        </div>
        {/* <div className="mx-auto w-fit flex justify-center"> */}
        <button
          onClick={handleListProperty}
          className="block w-fit mx-auto bg-deep_purple_700 text-lg hover:bg-deep_purple_500 text-white px-10 py-2 rounded-lg"
        >
          List Your Properties
        </button>
        <button
          onClick={handleClick}
          className="block mt-4 border-deep_purple_500 mb-16 w-fit mx-auto bg-white border-2 text-black text-lg hover:bg-deep_purple_500 hover:text-white px-10 py-2 rounded-lg"
        >
          Contact Us
        </button>
        {/* </div> */}
        <h1 className=" text-2xl mvsm:text-3xl lg:text-4xl font-semibold">
          Why Sell Or Rent through
          <span style={{ color: "#341F87" }}> Propertybhavan</span>
        </h1>
      </div>
      <MembershipModal type='owner' amount={499} openMemberModal={openMemberModal} setOpenMemberModal={setOpenMemberModal} />
      <div className={`{styles.about_card} px-3 vsm:px-8`}>
        <AboutCard />
      </div>
      <div className="px-3 vsm:px-8">
        <h1 className="mt-8 text-2xl mvsm:text-3xl lg:text-4xl font-semibold">
          Let us match you with your
          <span style={{ color: "#341F87" }}> Ideal home.</span>
        </h1>
        <p className=" my-5 text-lg lg:text-xl">
          We have over 650+ Verified Properties for Sale and Rent. Whether you
          are looking to rent a flat
          <br />
          or buy an independent house, find all in one click. Contact Owners
          directly and avoid all <br />
          brokerage cost.
          <br />
        </p>
        <button
          onClick={() => { handleFind(findPropertyRef) }}
          className="bg-deep_purple_700  mb-8 text-lg hover:bg-deep_purple_500 text-white px-10 py-2 rounded-lg"
        >
          Let’s find your new home!
        </button>
      </div>
      <hr />
      <FooterHero />
      <Footer />
    </div>
  );
};
export default ListYourProperty;
