
import styles from '../styles/Home.module.css'

import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero/Hero"
import ImageCard from "../components/ImageCard/ImageCard";
import { useStateValue } from "../Store/StateProvider";
import { useRouter } from 'next/router';
import { actionTypes } from '../Store/Reducer';
import dynamic from 'next/dynamic'
import building from '../public/vitaly-taranov-J6hE2DTWSEw-unsplash-Copy-transformed.jpeg'
import Image from 'next/image';
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


const Home = () => {

 const [lang,setLang]=useState("");
 const loadlang= () =>{
  fetch("https://whale-app-ulq4x.ondigitalocean.app/property/search").then((response) =>{
    return response.json();
  }).then((data) => {
    setLang(data);
  })
  };
  
 useEffect(()=>{
  
  loadlang();
 }, []);

  
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


























  //stay login 
  
  const [verifiedProperties, setVerifiedProperties] = useState(null);
  const [loading, setLoading] = useState(false);
  const cookie_token = state.cookie_token;
  

  const getVerified = () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      setLoading(true);
      fetch(
        "https://whale-app-ulq4x.ondigitalocean.app/search/property?propertyVerified=true",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setVerifiedProperties(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      // console.log(error)
    }
  };

  const [profileData, setProfileData] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const getProfile = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie_token: localStorage.getItem("cookie_token"),
      },
    };

    // console.log(requestOptions)

    let url = "https://whale-app-ulq4x.ondigitalocean.app/user/profile/details";
    setLoadingProfile(true);

    const data = await fetch(url, requestOptions);
    // console.log("inside fetch")
    const parseData = await data.json();
    // console.log(parseData.message);
    setProfileData(parseData.message);
    setLoadingProfile(false);
    dispatch({
      type: actionTypes.get_account_details,
      profileData: parseData.message,
    });
  };

  useEffect(() => {
    getVerified();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem("cookie_token")) {
      dispatch({
        type: actionTypes.set_cookie_token,
        cookie_token: localStorage.getItem("cookie_token"),
      });
      getProfile();
    }
  }, [typeof window !== 'undefined' ? localStorage.getItem("cookie_token") : null]);

  const [alert, setAlert] = useState(null);
  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const findPropertyRef = useRef(null)

  const isAdmin = false;


  return (
    <div>
      

      <div className={styles.home_page}>

        <Hero findPropertyRef={findPropertyRef} lang={lang} />
        <br />
        <div className={`${styles.home_mid} sm:px-8`}>
          <div className={`${styles.popular_tag} max-w-7xl  xl:inline text-2xl text-black font-semibold mt-4`}>
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
            <Image className="h-64 min-w-[100vw] mb-5 " src={building} alt="building_image" srcset="" />
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

