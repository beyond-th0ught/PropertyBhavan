import React from "react";
import { Carousel } from "react-responsive-carousel";
import SimilarBox from "../Bottom/SimilarBox";
import styles from "./PropertyCard.module.css";

export default function PropertyCard({ data }) {
  console.warn = () => {};
  const profileData = useOutletContext()
  return (
    <>
      <div className={styles.Property_slider}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          useKeyboardArrows={true}
        >
          {data===undefined?profileData?.propertyId?.map((property, i) => {
            return (
              <div key={i} className={styles.slides}>
                <SimilarBox data={property} theme="first" />
              </div>
            );
          }):data?.map((property, i) => {
            return (
              <div key={i} className={styles.slides}>
                <SimilarBox data={property} theme="first" />
              </div>
            );
          })}
          
        </Carousel>
      </div>
      <div className={styles.slider_desktop}>
        
        {data===undefined?profileData?.propertyId?.map((property, i) => {
            return (
              <div key={i} className={styles.slides}>
                <SimilarBox data={property} theme="first" />
              </div>
            );
          }):data?.map((property, i) => {
            return (
              <div key={i} className={styles.slides}>
                <SimilarBox data={property} theme="first" />
              </div>
            );
          })}
      </div>
    </>
  );
}
