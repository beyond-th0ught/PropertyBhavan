import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import  Link  from "next/link"
import { useStateValue } from "../Store/StateProvider";
import "../styles/Profile.module.css"

export default function Profile({loading}) {
  console.warn = () => { };
  const router = useRouter();
  const handleProfileNave = (str) => {
    router.push(str);
  };
  const [profile, setProfile] = useState("1");
  const phoneProfile = () => {
    if (profile === "0") {
      router.push("subscription");
    }
    else if (profile === "1") {
      router.push("");
    } else if (profile === "2") {
      router.push("Mylisting");
    } else if (profile == "3") {
      router.push("Wishlist");
    }
  };
  useEffect(() => {
    phoneProfile();
  }, [profile]);

  const [state, dispatch] = useStateValue();

  // const handleLogout = () => {
  //   dispatch({
  //     type: actionTypes.log_out,
  //   });
  //   localStorage.clear();
  //   // navigate("/");
  //   window.location.reload()
  // };
  // const detail = state.profileData;

  // useEffect(() => {
  //   if (state.cookie_token === null) {
  //     router.push("/");
  //   }
  //   console.log(state.profileData)
  // }, []);

  return (
    <div className="profile_container">
      <div className=" mt-24 mx-auto w-full">
        <select
          className="profile_nav_phone md:hidden flex  py-1  w-fit  mx-auto"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
          value={profile}
          name="profile_select"
          id=""
        >

          <option value="0">Subscription</option>
          <option value="1">Account Details</option>
          <option value="2">My Listing</option>
          <option value="3">Wishlist</option>
        </select>
        <nav className="profile_nav mx-auto md:flex hidden w-fit flex items-center gap-2 mvsm:gap-7 ">
          <Link
            onMouseEnter={() => {
              handleProfileNave("subscription");
            }}
            className="text-lg mvsm:text-xl  py-0.5 px-1 border-b-2 border-white hover:border-deep_purple_906 "
            href="/subscription"
          >
            Subscription
          </Link>
          <Link
            onMouseEnter={() => {
              handleProfileNave("/MyAccount");
            }}
            className="text-lg mvsm:text-xl  py-0.5 px-1 border-b-2 border-white hover:border-deep_purple_906 "
            href=""
          >
            Account Details
          </Link>
          <Link
            onMouseEnter={() => {
              handleProfileNave("/Mylisting");
            }}
            className="text-lg mvsm:text-xl  py-0.5 px-1 border-b-2 border-white hover:border-deep_purple_906 "
            href="Mylisting"
          >
            My Listing
          </Link>
          <Link
            onMouseEnter={() => {
              handleProfileNave("/Wishlist");
            }}
            className="text-lg mvsm:text-xl  py-0.5 px-1 border-b-2 border-white hover:border-deep_purple_906 "
            href="Wishlist"
          >
            Wishlist
          </Link>
        </nav>
        {/* <div className="w-full px-5 flex justify-center mx-auto mt-4 mvsm:mt-8">
          {loading && <Loading />}
          {!loading && <MyAccount detail={detail}/>}
          <Outlet context={state.profileData} /> */}
        {/* </div> */}
      
      {/* {!loading && (
        <button
          onClick={handleLogout}
          className=" text-white mx-auto border-red-800 border hover:bg-red-600 rounded-lg bg-red-700 px-4 py-1 my-4 ml-auto w-fit"
        >
          Logout
        </button>
      )} */}
      </div>
    </div>
  );
}
