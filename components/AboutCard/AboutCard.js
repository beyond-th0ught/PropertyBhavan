import React from "react";
import Image from 'next/image'
import avatar from '../../public/wallet-dynamic-color-transformed.png'
import   phone     from '../../public/phone-only-dynamic-color-transformed.png'
import   tick     from '../../public/tick-dynamic-color-transformed.png'
import   rupee     from '../../public/rupee-dynamic-color-transformed.png'
import   girl     from '../../public/girl-dynamic-color-transformed.png'

// import "./AboutCard.css";

var AboutCard = () => {
  return (
    <div>
      <div className="about_main grid grid-flow-row gap-16 px-12 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="about_contain flex justify-center items-center">
          <div className="about_contain_inside p-4">
            <div className="about_box w-80 h-80 max-w-md border border-purple px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center md:justify-end">
                <Image
                  className="object-cover"
                  alt="Testimonial avatar"
                  src={avatar}
                />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                0% Brokerage
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                Bypass the high brokerage fees to buy & rent directly from
                sellers. Not Paying Brokerage increases your purchasing power by
                3-5%.{" "}
              </p>
            </div>{" "}
          </div>{" "}
        </div>
        <div className=" about_contain flex justify-center items-center">
          <div className=" about_contain_inside p-4">
            <div className=" about_box w-80 h-80 max-w-md border border-purple px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center md:justify-end">
                <Image
                  className="object-cover"
                  alt="Testimonial avatar"
                  src={phone}
                />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                Easy
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                Our simple, easy-to-use, userfriendly interface lets you view
                our 600+ Verified Properties listed at a single click and
                connects you directly to the property owners. All from the
                comfort of your home!{" "}
              </p>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="about_contain flex justify-center items-center">
          <div className="about_contain_inside p-4">
            <div className="about_box w-80 h-80 max-w-md border border-purple px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center md:justify-end">
                <Image
                  className="object-cover"
                  alt="Testimonial avatar"
                  src={tick}
                />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                Accurate{" "}
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                We try to be as transparent as possible when it comes to all
                details associated with properties being offered for sale or
                rent.{" "}
              </p>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="about_contain flex justify-center mx-14 items-center">
          <div className="about_contain_inside p-4">
            <div className="about_box w-80 h-80 max-w-md border border-purple px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center md:justify-end">
                <Image
                  className="object-cover"
                  alt="Testimonial avatar"
                  src={rupee}
                />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                Subscriptions
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                We offer extremely affordable subscription plants to further
                boost your experience of buying and selling your property with
                us.{" "}
              </p>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="about_contain flex justify-center items-center">
          <div className=" about_contain_inside p-4">
            <div className="about_box w-80 h-80 max-w-md border border-purple px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex justify-center md:justify-end">
                <Image
                  className="object-cover"
                  alt="Testimonial avatar"
                  src={girl}
                />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                Customer Service
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                Our prompt customer service is eager to help you with any issues
                you may have while navigating our platform.{" "}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutCard;
