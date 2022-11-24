// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap,ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(`https://whale-app-ulq4x.ondigitalocean.app/blog`)
  const blogsData = await response.json()
  const blogs : any[] =  blogsData.message
  let fields :ISitemapField[] = blogs.map((blog)=>({
    loc: `https://propertybhavan.com/BlogDetail/${blog._id}/${blog.title.toLowerCase().replaceAll(' ',"-")}`,
    lastmod: new Date().toISOString(),
  }))

  const properties = await fetch(`https://whale-app-ulq4x.ondigitalocean.app/propertyAll`)
  const propertyData = await properties.json()
  const property :any[] = propertyData
  const propertYdetails :ISitemapField[] = property.map((propDetail)=>{ 
    // r urlRegex = /\s/g;
    // const str = `${propDetail?.bedrooms} Apartment for ${propDetail?.type} in ${propDetail?.address}`
    // const  url_title = str.toLowerCase().replace(urlRegex, '-');
    // navigate.push(`/FullDetails/${propDetail._id}/${url_title}`);
    return {
    loc: `https://propertybhavan.com/FullDetails/${propDetail._id}/${propDetail?.bedrooms}-Apartment-for-${propDetail?.type}-in-${propDetail.address.replaceAll('&',"and").replaceAll(" ","-")}`,
    lastmod: new Date().toISOString(),
  }})

  fields = [...fields, ...propertYdetails]
  
  
  
  // console.log(blogsDa)
  // const fields : ISitemapField[] = []

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}