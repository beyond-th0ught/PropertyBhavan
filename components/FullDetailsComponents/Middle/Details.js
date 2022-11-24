import React from "react";
import styles from "./Details.module.css";
import DetailsBox from "./DetailsBox";

const bed = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M4.05 31.95v-15.2h1.5v13.7H23.3v-13.7h15.05q2.3 0 3.95 1.625Q43.95 20 43.95 22.3v9.65Zm20.8-1.5h17.6V22.3q0-1.7-1.2-2.875t-2.9-1.175h-13.5Zm0-12.2v12.2ZM13.8 26.2q1.65 0 2.75-1.1t1.1-2.75q0-1.65-1.1-2.75t-2.75-1.1q-1.7 0-2.8 1.1-1.1 1.1-1.1 2.75t1.125 2.75q1.125 1.1 2.775 1.1Zm0-1.5q-1 0-1.7-.7t-.7-1.65q0-.95.7-1.65t1.7-.7q.95 0 1.65.7t.7 1.65q0 .95-.7 1.65t-1.65.7Zm0-2.35Z"/></svg>
const shower =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.1 20.75q-1.2 0-2.025-.825T11.25 17.9q0-1.15.825-1.975.825-.825 2.025-.825 1.15 0 1.975.825.825.825.825 1.975 0 1.2-.8 2.025t-2 .825Zm-3.15 21.2q-.85 0-1.5-.575T8.8 39.95q-1.1 0-1.925-.825T6.05 37.2V28h5.2v-1.4q0-1.6 1.05-2.625t2.6-1.025q.85 0 1.675.375Q17.4 23.7 18 24.4l1.9 2.25q.35.35.725.7t.825.65h13.5V11.4q0-1.2-.875-2.1Q33.2 8.4 32 8.4q-.55 0-1.075.225-.525.225-.925.625l-2.5 2.55q.2.85.05 1.675-.15.825-.65 1.575l-3.85-3.75q.75-.5 1.6-.625.85-.125 1.75.175l2.5-2.5q.65-.65 1.425-1.05t1.725-.4q1.85 0 3.15 1.325 1.3 1.325 1.3 3.175V28h5.45v9.2q0 1.1-.825 1.925t-1.925.825q0 .85-.65 1.425-.65.575-1.5.575ZM8.8 38.4h30.4q.55 0 .9-.325t.35-.875v-7.7H7.55v7.7q0 .55.35.875.35.325.9.325Zm31.65 0H7.55Z"/></svg>
const sofa =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9.05 35.95H8.2l-.65-4h-1.5V24.9q0-1.15.8-1.975.8-.825 1.95-.825h1.4v-5.3q0-1.1.8-1.925t1.95-.825h22.1q1.1 0 1.925.825T37.8 16.8v5.3h1.4q1.1 0 1.925.825t.825 1.925v7.1h-1.5l-.6 4H39l-.6-4H9.65ZM24.8 22.1h11.5v-5.3q0-.5-.375-.85t-.875-.35H24.8Zm-13.1 0h11.55v-6.5h-10.3q-.55 0-.9.35t-.35.85Zm-4.15 8.35h32.9v-5.6q0-.5-.35-.85t-.9-.35H8.8q-.55 0-.9.35t-.35.85Zm32.9 0H7.55h32.9Z" /></svg>
const fillSize =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M8.05 39.95v-9.7h1.5v7.1l7.75-7.75 1.1 1.1-7.75 7.75h7.1v1.5Zm22.2 0v-1.5h7.1L29.6 30.7l1.1-1.1 7.75 7.75v-7.1h1.5v9.7ZM17.3 18.4l-7.75-7.75v7.1h-1.5v-9.7h9.7v1.5h-7.1l7.75 7.75Zm13.4 0-1.1-1.1 7.75-7.75h-7.1v-1.5h9.7v9.7h-1.5v-7.1Z"/></svg>
export default function Details({data,myref}) {
  return (
    <div ref={myref} className={styles.details}>
      <h2 className="flex md:justify-start justify-center text-3xl mt-12 mb-6 text-blue-900 font-semibold">Details</h2>
      <div className={styles.detailBoxContainer}>
        <DetailsBox  Icon={bed} line='BHK' para={data?.bedrooms}/>
        <DetailsBox  Icon={shower} line='Bathroom' para={data?.bathrooms}/>
        <DetailsBox 
          Icon={sofa}
          line="Furnishing Status"
          para={data?.furnishing}
        />
        <DetailsBox Icon={fillSize} line='Super Build Area' para={`${data?.buildArea} Sq.ft`}/>
      </div>
    </div>
  );
}
