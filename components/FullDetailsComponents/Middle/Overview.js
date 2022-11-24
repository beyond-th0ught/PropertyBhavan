import { data } from "autoprefixer";
import React from "react";
import styles from "./Overview.module.css";
export default function Overview({data,myref}) {
  return (
    <div ref={myref} className={styles.overview}>
      <h2 className="flex text-3xl mt-16 mb-4 md:justify-start justify-center text-blue-900 font-semibold">Overview</h2>
      <p className={styles.ove_det}>
        {data?.description}
      </p>
    </div>
  );
}
