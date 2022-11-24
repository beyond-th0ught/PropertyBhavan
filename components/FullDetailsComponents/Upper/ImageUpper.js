import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from './Upper.module.css'
import image from "../../../Assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg";

export default function ImageUpper({ data }) {
  return (
    <Carousel
      centerSlidePercentage={100}
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      swipeable={true}
      useKeyboardArrows={true}
    >
      {data?.images?.map((img, i) => {
        return (
          <div key={i} className={styles.image_contain_phone}>
            <img src={img} alt="img" />
          </div>
        );
      })}

    </Carousel>
  );
}
