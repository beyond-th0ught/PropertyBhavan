import React from "react";
import Image from "next/image"
import Link from 'next/link'
import logo from '../../public/logo.png'
import insta from '../../public/Instagram.png'
import linkedin from '../../public/linkden.png'
import facebook from '../../public/facebook.png'
import whatsapp from '../../public/whatsapp.png'
// import "./Footer.css";

var Footer = function () {
  return (
    <footer
      className="bg-white dark:bg-white-900"
      style={{ backgroundColor: "#341F87", color: "#ffffff" }}
    >
      <div className=" p-6 ">
        <div className="px-3 lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            {" "}
            <div className="px-6">
              <div>
                <Link
                  accessKey="7"
                  href="/"
                  className="text-xl font-bold  dark:text-white hover:text-white-700 dark:hover:text-white-300"
                >
                  <Image
                    alt=""
                    src={logo}
                    style={{ height: "50px", width: '50px', display: "inline" }}
                  ></Image>{" "}
                  <span
                    style={{ verticalAlign: "bottom", marginLeft: "-10px" }}
                  >
                    ropertybhavan
                  </span>
                </Link>
              </div>
              <p className="max-w-sm mt-2 ">
                11 Haridas Dawn Road <br />
                Kolkata, West Bengal - 700053 <br />
                hello@propertybhavan.com
                <br />
                <br />
                <span style={{ color: "#FFF066" }}>
                  To know more about us, follow us on
                </span>
              </p>
              <div className="flex mt-6 -mx-2" style={{ marginTop: "10px" }}>
                <a
                  accessKey="8"
                  href="https://instagram.com/propertybhavan?igshid=YmMyMTA2M2Y="
                  className="mx-2 text-white-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={insta}
                    style={{ height: "20px",width:"20px", display: "inline" }}
                  ></Image>{" "}
                </a>
                <a
                  accessKey="9"
                  href="https://www.linkedin.com/company/propertybhavan/"
                  className="mx-2 text-white-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={linkedin}
                    style={{ height: "20px", width:"20px", display: "inline" }}
                  ></Image>{" "}
                </a>
                <a
                  accessKey="10"
                  href="https://www.facebook.com/propertybhavan"
                  className="mx-2 text-white-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={facebook}
                    style={{ height: "20px", width:"20px", display: "inline" }}
                  ></Image>{" "}
                </a>

                <a
                  accessKey="11"
                  href="https://wa.me/message/UBEWWLEVEVERO1?src=qr"
                  className="mx-2 text-white-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={whatsapp}
                    style={{ height: "20px", width:"20px", display: "inline" }}
                  ></Image>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="footer_botton grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div>
                <h1
                  className="text-white-700 uppercase dark:text-white"
                  style={{ color: "#FFEB34", minWidth: "max-content" }}
                >
                  Company Info
                </h1>
                <Link
                  accessKey="12"
                  href="/AboutUs"
                  className="block mt-2 text-sm text-white-600 dark:text-white-400 hover:underline"
                >
                  About Us
                </Link>
                <Link
                  accessKey="13"
                  href="/Blog"
                  className="block mt-2 text-sm text-white-600 dark:text-white-400 hover:underline"
                >
                  Our Blog
                </Link>
              </div>
              <div>
                <h2
                  className="text-white-700 uppercase dark:text-white"
                  style={{ color: "#FFEB34" }}
                >
                  Support
                </h2>
                <Link
                  accessKey="14"
                  href="/FaqContainer"
                  className="block mt-2 text-sm text-white-600 dark:text-white-400 hover:underline"
                >
                  FAQ
                </Link>
                <Link
                  accessKey="15"
                  href="#"
                  className="block mt-2 text-sm text-white-600 dark:text-white-400 hover:underline"
                >
                  Feedback Forum
                </Link>
              </div>
              <div>
                <h3
                  className="text-white-700 uppercase dark:text-white"
                  style={{ color: "#FFEB34" }}
                >
                  Legal
                </h3>
                <Link
                  accessKey="16"
                  href="/TermsAndConditions"
                  className="block mt-2 text-sm text-white-600  hover:underline"
                >
                  Terms & Conditions
                </Link>
                <Link
                  accessKey="17"
                  href="/PrivacyPolicy"
                  className="block mt-2 text-sm text-white-600  hover:underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-white-200 border-none dark:bg-white-700" />
        <div>
          <p className="text-center text-white-500 dark:text-white-400">
            © 2022 Property Bhavan Private Limited
          </p>
          <hr />
          <p
            className="text-center  text-white-500 dark:text-white-400"
            style={{ fontSize: "10px" }}
          >
            The properties listed on the platform (www.propertybhavan.com) are
            not owned by Property Bhavan Pvt.ltd. The Information on the
            platform is subjected to negotiation,availability, and change at any
            time. Each property needs to undergo due diligence and inspection by
            the investor and we are not responsible for any problems (legal,
            physical, etc.).
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
