import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import styles from  "../styles/ListView.module.css";
import SimilarBox from "../components/FullDetailsComponents/Bottom/SimilarBox";
import Loading from "../components/loading/Loading";
import { useStateValue } from "../Store/StateProvider";

import Footer from "../components/Footer/Footer";
import FooterHero from "../components/FooterHero/FooterHero";
import { useRouter } from "next/router";

const ExploreMore = () => {
  // const params = useRouter();
  const navigate = useRouter()
  const [listItem,setListItems] = useState([])
  const [loading, setLoading] = useState(false);

  const getListItems = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = `https://whale-app-ulq4x.ondigitalocean.app/property?skip=${navigate.query.skip}`;
    // console.log(url)
    setLoading(true);
    const data = await fetch(url, requestOptions);
    const parseData = await data.json();
    setListItems(parseData.results)
    setLoading(false);

  };
  const handleNextClick = async () => {
    // console.log("Next");
    navigate.push(`/explore/skip/${Number(navigate.query.skip)+20}`)
  };

  const handlePrevClick = async () => {
    // console.log("Previous");
    navigate.push(`/explore/skip/${Number(navigate.query.skip)-20}`)
  };

  useEffect(() => {
    getListItems()
    // console.log(listItem);
  }, [navigate.query.skip]);

  return (
    <div className="listview_container ">
      <div className="px-3 vsm:px-8">
      <h1 className="text-black text-2xl msm:text-3xl lg:text-4xl font-semibold mt-4 mb-4">
        Showing <span className="text-purple">{listItem?.length}</span> Properties
      </h1>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <button className="bg-white px-1 py-1 msm:py-1.5 msm:px-3  rounded-md text-xs mvsm:text-base msm:text-lg font-normal text-black border border-black ">
            Verified Property
          </button>
          <button className="bg-white flex justify-center items-center px-1 py-1 msm:py-1.5 msm:px-3  rounded-md text-xs mvsm:text-base msm:text-lg font-normal text-black border border-black ">
            <p>New Property</p>
          </button>
        </div>
        <div>
          <button className="bg-white px-1 py-1 msm:py-1.5 msm:px-3  rounded-md text-xs mvsm:text-base msm:text-lg font-normal text-black border border-black ">
            Sort By
          </button>
        </div>
      </div>
      {loading && <Loading />}
      <div className=" mt-3 mvsm:mt-5 msm:grid pb-5 flex items-center flex-col msm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listItem?.map((data) => {
          return (
            <SimilarBox key={data._id} data={data} theme="first" />
          );
        })}
      </div>
      <div className=" mb-6 flex justify-between">
        <button
          disabled={navigate.query.skip<=20}
          onClick={handlePrevClick}
          type="button"
          className="hover:bg-deep_purple_700 bg-deep_purple_500 px-4 sm:px-8 py-1.5 text-white rounded-lg"
        >
          &larr; Previous
        </button>
        <button
          onClick={handleNextClick}
          type="button"
          className="hover:bg-deep_purple_700 bg-deep_purple_500 px-4 sm:px-8 py-1.5 text-white rounded-lg"
        >
          Next &rarr;
        </button>
      </div>
      </div>
      <FooterHero/>
      <Footer/>
    </div>
  );
};
export default ExploreMore;
