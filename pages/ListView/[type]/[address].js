import React, { useEffect, useState } from "react";
import styles from "../../../styles//ListView.module.css";
import SimilarBox from "../../../components/FullDetailsComponents/Bottom/SimilarBox";
import Loading from "../../../components/loading/Loading";
import { Tab } from '@headlessui/react'
import { useMemo } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import Head from "next/head";

const FooterHero = dynamic(() => import('../../../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../../../components/Footer/Footer'), {
  ssr: false,
})

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ListView = () => {
  const parms = useRouter();
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listItemshow, setListItemshow] = useState([])
  // console.log(parms.query)
  const getListItems = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = `https://whale-app-ulq4x.ondigitalocean.app/search?type=${parms.query.type}&address=${parms.query.address}`;
    // console.log(url)
    setLoading(true);
    const data = await fetch(url, requestOptions);
    const parseData = await data.json();
    // console.log(parseData);
    setListItem(parseData);
    setListItemshow(parseData)
    setLoading(false);
  };

  const [sortIndex, setSortIndex] = useState(1)
  
  const getValue = ({ price }) => price || 0;

  useMemo (() => {
    switch (sortIndex) {
      case 0:{
        // console.log(sortIndex)
        const data = [...listItemshow].sort((a,b)=>{return (getValue(a)-getValue(b))})
        // console.log(data)
        setListItemshow(data)
        break;}
      case 2:{
        // console.log(sortIndex)
        const data = [...listItemshow].sort((a,b)=>{return (getValue(b)-getValue(a))})
        // console.log(data)
        setListItemshow(data)
        break;}
    
      default:{
        // console.log(sortIndex)
        // console.log([...listItem])
        setListItemshow([...listItem])
        break;}
    }
  }, [sortIndex])
  
  useEffect(() => {
    if(!parms.isReady) return;
    getListItems();
    // console.log(listItem);
  }, [parms.isReady]);


  return (
    <>
      <div className={styles.listview_container}>
      <Head rel="canonical">
        <title>{`Properties in ${parms.query.address}`}</title>
        <meta name="description" content={`found ${listItemshow?.length} properties in ${parms.query.address} for ${parms.query.type}`} />
        <link rel="canonical" href={`/ListView/${parms.query.type}/${parms.query.address}`} />
        </Head>
        <div className="px-3 vsm:px-8">
          <h1 className="text-black text-2xl msm:text-3xl lg:text-4xl font-semibold mt-4 mb-4">
            Showing <span className="text-purple">{listItemshow?.length}</span> in{" "}
            {parms.query.address} Properties
          </h1>

          <div className="flex gap-3 justify-between">
            <div className="flex gap-3">
              <button className="bg-white px-1 py-1 msm:py-1.5 msm:px-3  rounded-md text-xs mvsm:text-base msm:text-lg font-normal text-black border border-black ">
                Verified Property
              </button>
              <button className="bg-white flex justify-center items-center px-1 py-1 msm:py-1.5 msm:px-3  rounded-md text-xs mvsm:text-base msm:text-lg font-normal text-black border border-black ">
                <p>New Property</p>
              </button>
            </div>
            <div>
              <Tab.Group defaultIndex={1}
              onChange={(index) => {
                setSortIndex(index)
              }}
              >
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">

                  <Tab
                    
                    className={({ selected }) =>
                      classNames(
                        'w-full flex rounded-lg py-1 px-0.5 mvsm:p-1.5 msm:py-2 msm:px-2.5  text-sm font-medium leading-5 text-deep_purple_700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-deep_purple_A100 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-deep_purple_A100 hover:bg-white/[0.12] hover:text-deep_purple_400'
                      )
                    }
                  >
                    ₹<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>

                  </Tab>
                  <Tab

                    className={({ selected }) =>
                      classNames(
                        'w-full flex rounded-lg py-1 px-0.5 mvsm:p-1.5 msm:py-2 msm:px-2.5  text-sm font-medium leading-5 text-deep_purple_700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-deep_purple_A100 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-deep_purple_A100 hover:bg-white/[0.12] hover:text-deep_purple_400'
                      )
                    }
                  >
                    Sort
                  </Tab>
                  <Tab
                  
                    className={({ selected }) =>
                      classNames(
                        'w-full flex rounded-lg py-1 px-0.5 mvsm:p-1.5 msm:py-2 msm:px-2.5  text-sm font-medium leading-5 text-deep_purple_700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-deep_purple_A100 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-deep_purple_A100 hover:bg-white/[0.12] hover:text-deep_purple_400'
                      )
                    }
                  >
                    ₹<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>

                  </Tab>

                </Tab.List>
              </Tab.Group>
            </div>
          </div>
          {loading && <Loading />}
          <div className=" mt-3 mvsm:mt-5 msm:grid pb-5 flex items-center flex-col msm:grid-cols-2 lg:grid-cols-3 gap-5">
            {listItemshow?.map((data) => {
              return <SimilarBox key={data._id} data={data} theme="first" />;
            })}
          </div>
        </div>
        <FooterHero />
        <Footer />
      </div>
    </>
  );
};
export default ListView;
