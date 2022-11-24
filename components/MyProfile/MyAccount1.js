import React from "react";
import "./MyAccount.css";
import Loading from "../loading/Loading";
import { useOutletContext } from "react-router-dom";
import { useStateValue } from "../../Store/StateProvider";
const edit = (
  <svg
    className="fill-deep_purple_700"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
  >
    <path d="M5.3 23.2q-.75 0-1.275-.525Q3.5 22.15 3.5 21.4V8q0-.75.525-1.275Q4.55 6.2 5.3 6.2h8.55l-1.5 1.5H5.3q-.1 0-.2.1T5 8v13.4q0 .1.1.2t.2.1h13.4q.1 0 .2-.1t.1-.2v-7.075l1.5-1.5V21.4q0 .75-.525 1.275-.525.525-1.275.525Zm6.7-8.5Zm4.525-8.075 1.075 1.05-6.6 6.6V15.7h1.4l6.65-6.625 1.05 1.05-7.05 7.075H9.5v-3.55Zm3.575 3.5-3.575-3.5 2.3-2.3q.525-.525 1.288-.525.762 0 1.287.55l.975.975q.5.525.5 1.275 0 .75-.525 1.275Z" />
  </svg>
);
export default function MyAccount() {
  const profileData = useOutletContext();

  return (
    <>
      <div className="myaccount_container flex gap-7 flex-col items-center">
        <div className="flex vsm:w-full myaccount_name_container gap-3">
          <div className="text-black w-full  px-5 py-2 account_input flex-1 border   border-deep_purple_700  rounded-lg ">
            {" "}
            {profileData?.name}
          </div>
        </div>
        <div className="w-full items-center flex border rounded-lg pr-3 border-deep_purple_700 ">
          <div className="text-black  w-36 vsm:w-96 px-5 py-2 account_input flex-1    rounded-lg ">
            {" "}
            {profileData?.email}
          </div>
          {edit}
        </div>
        <div className="w-full items-center flex border rounded-lg pr-3 border-deep_purple_700">
          <div className="text-black w-36 vsm:w-96 px-5 py-2 account_input flex-1   rounded-lg ">
            {profileData?.mobileNum}{" "}
          </div>
          {edit}
        </div>
        <button className="w-3/4 text-lg py-1.5 rounded-lg text-white mx-auto bg-deep_purple_700 hover:bg-deep_purple_500 border-2">
          Save Change
        </button>
      </div>
    </>
  );
}
