import styles from "../../../styles/FullDetails.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Upper from "../../../components/FullDetailsComponents/Upper/Upper.jsx";
import { useRef, useState, useEffect } from "react";
import Loading from "../../../components/loading/Loading";
import { useStateValue } from "../../../Store/StateProvider";
import MembershipModal from "../../../components/membership/MembershipModal";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import Head from "next/head";

const FooterHero = dynamic(() => import('../../../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../../../components/Footer/Footer'), {
  ssr: false,
})
const Overview = dynamic(() => import('../../../components/FullDetailsComponents/Middle/Overview'), {
  ssr: false,
})
const Details = dynamic(() => import('../../../components/FullDetailsComponents/Middle/Details'), {
  ssr: false,
})
const Features = dynamic(() => import('../../../components/FullDetailsComponents/Middle/Features'), {
  ssr: false,
})
const NearBy = dynamic(() => import('../../../components/FullDetailsComponents/Middle/NearBy'), {
  ssr: false,
})



const wtsp = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" />
  </svg>
);

const FullDetails = () => {

  const [state, dispatch] = useStateValue();
  const [openMemberModal, setOpenMemberModal] = useState(false)
  const clickToLogin = () => {
    state.loginRef.current?.click();
  };

  const overviewRef = useRef(null);
  const detailsRef = useRef(null);
  const featuesRef = useRef(null);
  const nearbyRef = useRef(null);
  const parms = useRouter();
  const [fullDetails, setFullDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const [contactNow, setContactNow] = useState("Contact Now");
  const handleContact = () => {
    // console.log("clicked");
    try {
      if (localStorage.getItem("cookie_token")) {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: localStorage.getItem("cookie_token"),
          },
        };
        // console.log(requestOptions);
        fetch(
          `https://whale-app-ulq4x.ondigitalocean.app/property/mobileNum/${fullDetails._id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            if (Number(data)) {
              setContactNow(data);
            } else {
              // console.log(data.message);
              setOpenMemberModal(true);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        clickToLogin()
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const executeScroll = (str) => {
    str.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getFullDetails = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = `https://whale-app-ulq4x.ondigitalocean.app/property/${parms.query.id}`;
    setLoading(true);

    const data = await fetch(url, requestOptions);
    const parseData = await data.json();
    // console.log(parseData);
    setFullDetails(parseData);
    setLoading(false);
  };

  useEffect(() => {
    if(!parms.isReady) return;
    getFullDetails();
    // console.log(fullDetails);
  }, [parms.isReady]);

  // useTitle(`${fullDetails?.bedrooms} Apartment for ${fullDetails?.type === 'sale' ? 'Sale' : 'Rent'} in ${fullDetails?.address}`,`${fullDetails?.description}`)

  return (

    <div className={styles.fulldetail_container}>
        <Head rel="canonical">
        <title>{`${fullDetails?.bedrooms} Apartment for ${fullDetails?.type === 'sale' ? 'Sale' : 'Rent'} in ${fullDetails?.address}`}</title>
        <meta name="description" content={`${fullDetails?.description}`} />
        <link rel="canonical" href={`/fulldetails/${parms.id}`} />
        </Head>
      <div className={styles.fulldetails}>
        {!loading ? <>
          <Upper data={fullDetails} />

          <h2 className={styles.price}>₹{" "}
            {fullDetails?.price
              ? new Intl.NumberFormat("en-GB", {
                notation: "compact",
                compactDisplay: "short",
              }).format(fullDetails?.price)
              : "On Call"}</h2>
          <div className={styles.contact_container}>
            <p className={styles.location}>{fullDetails?.address}</p>
          </div>

          <div className={styles.mid_nav}>
            <div
              onClick={() => {
                executeScroll(overviewRef);
              }}
              className={styles.mid_link}
            >
              Overview
            </div>
            <div
              onClick={() => {
                executeScroll(detailsRef);
              }}
              className={styles.mid_link}
            >
              Details
            </div>
            <div
              onClick={() => {
                executeScroll(featuesRef);
              }}
              className={styles.mid_link}
            >
              Features &#38; Amenities
            </div>
            <div
              onClick={() => {
                executeScroll(nearbyRef);
              }}
              className={styles.mid_link}
            >
              Nearby
            </div>
          </div>

          <Overview data={fullDetails} myref={overviewRef} />
          <Details data={fullDetails} myref={detailsRef} />
          <Features data={fullDetails} myref={featuesRef} />
          <NearBy data={fullDetails} myref={nearbyRef} />
          <h2 className={`md:justify-start justify-center ${styles.heading}`}>Similar Properties</h2>

          {/* <PropertyCard /> */}
          <div className={`${styles.contact_right} ${styles.property_price_contact}`}>
            {wtsp}
            <button onClick={handleContact} className={styles.contact}>{contactNow}</button>
          </div>
          <MembershipModal type='buyer' amount={299} openMemberModal={openMemberModal} setOpenMemberModal={setOpenMemberModal}/>
          <div className={styles.fulldetail_footer}>
            <FooterHero />
            <Footer />
          </div> </> : <Loading />}
      </div>
    </div>
  );
};

export default FullDetails;
