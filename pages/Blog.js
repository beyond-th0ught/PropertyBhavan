import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import dynamic from 'next/dynamic'

const BlogCard = dynamic(() => import('../components/BlogCard/BlogCard'), {
  ssr: false,
})
const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = `https://whale-app-ulq4x.ondigitalocean.app/blog`;
    setLoading(true);
    const data = await fetch(url, requestOptions);
    const parseData = await data.json();
    //console.log(parseData.message);
    setBlogs(parseData.message);
    setLoading(false);
  };

  useEffect(() => {
    getBlogs();
    // console.log(listItem);
  }, []);
  const isAdmin = false;
  return (
    <div className="top-[10vh] h-[90vh] overflow-x-hidden fixed overflow-y-auto w-full bg-white">
      <div className="p-3 vsm:p-8">
        <div className="flex justify-between">
          <p class="text-4xl font-bold text-gray-800 mb-4">Blog</p>
          {isAdmin && (
            <Link
              to="/postBlog"
              class="font-bold bg-deep_purple_400 hover:bg-deep_purple_500 py-1 px-4 rounded-md shadow-lg h-fit text-white mb-4"
            >
              Post Blog
            </Link>
          )}
        </div>
        <div class="header ">
          <div class="title gap-4 msm:flex-row flex-col items-start  flex msm:items-end justify-between mb-12">
            <p class="text-2xl text-gray-500 flex-1">
              Our team creates content that's not just informative but also
              engaging. Whether it's through blogging, articles, case studies,
              or press releases.
            </p>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div class="grid grid-cols-1 msm:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((data, i) => {
              return (
                <BlogCard
                  key={i}
                  id={data._id}
                  title={data?.title}
                  description={data?.description}
                  author={data?.author}
                  date={data?.createdAt}
                  coverImage={data?.coverImage}
                />
              );
            })}
          </div>
        )}
      </div>

      <FooterHero />
      <Footer />
    </div>
  );
}
