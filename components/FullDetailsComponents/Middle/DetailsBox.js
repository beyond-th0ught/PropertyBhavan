import React from "react";
import styles from "./DetailsBox.module.css";

export default function DetailsBox({ Icon, line, para }) {
  return (
    <div className={styles.detaiBox}>
      <div className={styles.icon}>{Icon}</div>
      <h3 className={styles.line}>{line}</h3>
      <h4 className={styles.para}>{para}</h4>
    </div>
  );
}
