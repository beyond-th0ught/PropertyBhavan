import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../components/loading/Loading';
import dynamic from 'next/dynamic'
import Head from 'next/head';

const FooterHero = dynamic(() => import('../../../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../../../components/Footer/Footer'), {
  ssr: false,
})
const image = '../../../components/dum-dum-transformed.png'
function BlogDetail() {
    const params = useRouter()
    // console.log(params)
    const html = React.useRef(null);
    const [blogDetail, setBlogDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBlogDetail = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        let url = `https://whale-app-ulq4x.ondigitalocean.app/blog/${params?.query?.id}`;
        setLoading(true);
        const data = await fetch(url, requestOptions);
        const parseData = await data.json();
        // console.log(parseData.message);
        setBlogDetail(parseData.message);
        setTimeout(() => {
            //forceUpdate();
            html.current.innerHTML = parseData.message.body;
        }, 1000);
        setLoading(false);
    };

    useEffect(() => {
        if(!params.isReady) return;
        getBlogDetail();
        // console.log(listItem);
    }, [params.isReady]);

    // useTitle(`${blogDetail?.title}`,`${blogDetail?.description}`)
    return (
        <div className='w-full fixed overflow-x-hidden overflow-y-auto h-[90vh] top-[10vh]'>
            <Head rel="canonical">
                <title>{`${blogDetail?.title}`}</title>
                <meta name="description" content={`${blogDetail?.description}`} />
                <link rel="canonical" href={`/blog/${params?.query?.id}`} />
                </Head>
            {loading ? <Loading /> : <div className='max-w-4xl sm:px-8 mx-auto px-2 my-4'>
                <h3 className='lg:text-5xl md:text-4xl mvsm:text-3xl leading-9 '>{blogDetail.title}</h3>
                <p className='my-3 text-lg font-semibold'>{blogDetail.description}</p>
                <p>by <span className='font-semibold'>{blogDetail.author}</span>  • <span className='text-gray-500'>Last updated</span> - {new Date(blogDetail.createdAt).toUTCString().slice(5, 16)} </p>
                <img className=' w-full my-8 max-h-[70vh] object-cover' src={blogDetail.coverImage} alt="" srcset="" />
                <div ref={html}>

                </div>
            </div>
            }
            <FooterHero />
            <Footer />
        </div>
    )
}

export default BlogDetail
