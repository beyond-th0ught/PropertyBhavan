import React from 'react'
import styles from './Upper.module.css'

import image from '../../../Assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg'
// import ImageUpper from './ImageUpper'
import { Carousel } from 'react-responsive-carousel'
import ImageUpper from './ImageUpper'
// import { Link } from 'react-router-dom'


const upload = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.812 15.354q-.52 0-.885-.364-.365-.365-.365-.886v-1.208h1v1.208q0 .104.084.177.083.073.187.073h8.334q.104 0 .187-.073.084-.073.084-.177v-1.208h1v1.208q0 .521-.365.886-.365.364-.906.364ZM9.5 12.625V5.333L7.458 7.375l-.708-.687L10 3.438l3.25 3.25-.708.687L10.5 5.333v7.292Z" /></svg>
const heart = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 16.25-.688-.625q-2.02-1.813-3.333-3.094-1.312-1.281-2.062-2.25-.75-.969-1.042-1.76-.292-.792-.292-1.604 0-1.625 1.125-2.75t2.73-1.125q1.02 0 1.958.489.937.49 1.604 1.427.688-.937 1.615-1.427.927-.489 1.947-.489 1.605 0 2.73 1.125t1.125 2.75q0 .812-.282 1.583-.281.771-1.031 1.729-.75.959-2.073 2.261t-3.385 3.177Zm0-1.333q1.896-1.729 3.135-2.938 1.24-1.208 1.969-2.104.729-.896 1.021-1.594.292-.698.292-1.364 0-1.229-.823-2.052t-2.032-.823q-.729 0-1.364.312-.636.313-1.302 1.021l-.729.854h-.334l-.729-.854q-.666-.708-1.323-1.021-.656-.312-1.343-.312-1.188 0-2.021.823-.834.823-.834 2.052 0 .666.271 1.333.271.667.979 1.552.709.886 1.959 2.104 1.25 1.219 3.208 3.011Zm0-5.459Z" /></svg>
const sync = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m6.062 16.583-3.624-3.625 3.624-3.625.688.729-2.396 2.396h12.313v1H4.354l2.396 2.396Zm7.876-5.916-.688-.729 2.396-2.396H3.333v-1h12.313L13.25 4.146l.688-.729 3.624 3.625Z" /></svg>
const wtsp = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" /></svg>
export default function Upper({ data }) {
    console.log(data)
    return (
        <div className={styles.upper}>
            <div className={styles.for_rent_link}>For {data?.type === 'sale' ? 'Sale' : 'Rent'}</div>
            <p>{data?.bedrooms} Apartment for {data?.type === 'sale' ? 'Sale' : 'Rent'} in {data?.address}</p>
            {/* {data?.images?.map((img, i) => {
        return (
        
          <div key={i} className={styles.image_container}>
            {data && data.images[i] &&  <img className='flex h-96' src={data?.images[i]} alt="img" srcset="" />}
          </div>
        );
      })} */}
            {/* <div className={styles.image_container}>
                {data && data.images[0] &&  <img src={data?.images[0]} alt="img" srcset="" />}
                {data && data.images[1] &&  <img src={data?.images[1]} alt="img" srcset="" />}
            </div> */}
            <div className={styles.image_desktop_container}>
                <ImageUpper alt="Img Upper" data={data} />
            </div>
            <div className={styles.stiker_container}>
                <div>{upload}</div>
                <div>{heart}</div>
                <div>{sync}</div>
            </div>

        </div>
    )
}
