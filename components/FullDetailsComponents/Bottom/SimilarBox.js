import React from "react";
import styles from "./SimilarBox.module.css";
import image from "../../../Assets/5928293_2953962-transformed.jpeg";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "../../../Store/StateProvider";
import MembershipModal from "../../membership/MembershipModal";
import { useRouter } from "next/router";

const place = (
  <svg  xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="M12 11.7q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2T12 8.3q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5Zm0 8.175q3.1-2.8 4.7-5.313 1.6-2.512 1.6-4.362 0-2.875-1.825-4.688Q14.65 3.7 12 3.7q-2.65 0-4.475 1.812Q5.7 7.325 5.7 10.2q0 1.85 1.6 4.362 1.6 2.513 4.7 5.313Zm0 1.85q-3.9-3.375-5.8-6.262-1.9-2.888-1.9-5.263 0-3.625 2.325-5.763Q8.95 2.3 12 2.3t5.375 2.137Q19.7 6.575 19.7 10.2q0 2.375-1.9 5.263-1.9 2.887-5.8 6.262ZM12 10.2Z" />
  </svg>
);

export default function SimilarBox({ data, theme }) {
  const [state, dispatch] = useStateValue();
  const [openMemberModal, setOpenMemberModal] = useState(false)
  const clickToLogin = () => {
    state.loginRef.current?.click();
  };
  const [contactNow, setContactNow] = useState("Contact Now");
  const navigate = useRouter();

  const handleLearnMore = () => {
    const urlRegex = /\s/g;
    const str = `${data?.bedrooms} Apartment for ${data?.type} in ${data?.address}`
    const  url_title = str.toLowerCase().replace(urlRegex, '-');
    navigate.push(`/FullDetails/${data._id}/${url_title}`);
  };

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
          `https://whale-app-ulq4x.ondigitalocean.app/property/mobileNum/${data._id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
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

  return (
    <div className={`cursor-pointer  ${styles.similarBoxContainer} ${theme}`}>
      <div onClick={handleLearnMore} className={styles.img_container}>
        <img src={data?.images[0] ? data?.images[0] : "5928293_2953962-transformed.jpeg"} alt="Similar box image" />
      </div>
      <h3 onClick={handleLearnMore} className={`${styles.tag} cursor-pointer`}>
        {data?.bedrooms} Apartment for {data?.type}
      </h3>
      <div onClick={handleLearnMore} className={styles.place_price}>
        <div className={styles.place}>
          {place}
          <p className={styles.p_para}>
            {data?.address?.length <= 25
              ? data?.address
              : data?.address?.slice(0, 25) + "..."}
          </p>
        </div>
        <p className={`min-w-fit text-black inline-block ${styles.p_para}`}>
          ₹{" "}
          {data?.price
            ? new Intl.NumberFormat("en-GB", {
                notation: "compact",
                compactDisplay: "short",
              }).format(data?.price)
            : "On Call"}
        </p>
      </div>
      <div onClick={handleLearnMore} className={styles.hr}></div>
      <button onClick={handleContact} className={`${styles.btn} ${styles.btn_contact}`}>
        {contactNow}
      </button>
      <button onClick={handleLearnMore} className={`${styles.btn} ${styles.btn_learnMore}`}>
        Learn more
      </button>
      <MembershipModal type='buyer' amount={299} openMemberModal={openMemberModal} setOpenMemberModal={setOpenMemberModal}/>
    </div>
  );
}
