import React from 'react'
import styles from './NearByBox.module.css'

export default function NearByBox({Icon,tag}) {
  return (
    <div className={styles.nearbybox}>
        {Icon}
        <h4 className={styles.nearby_tag}>{tag}</h4>
    </div>
  )
}
