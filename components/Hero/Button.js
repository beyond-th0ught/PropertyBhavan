import { useState } from "react";
//import { htmlInputAttrs } from "rsuite/esm/utils";
import FindModel from "../ListView/FindModel";

export default function Button(p) {
let [openModel,setOpenModel]=useState(0);

function open(){
  setOpenModel(1); 

  p.whole(1,0);
}
function closee(s){
if(s)setOpenModel(0);
p.whole(0,1);
}
  return (<>
    {openModel?<FindModel close={closee}></FindModel>:""}
    <div className="">
      <div className="mt-5 sm:flex md:justify-start">
        <div className="rounded-md shadow">
          <button onClick={open} className="flex w-auto items-center justify-center rounded-md border border-black bg-white px-8 py-3 text-base font-medium text-black hover:bg-zinc-400 hover:text-white lg:w-80 md:py-3 md:px-10 md:text-lg">
           <a href="#over" accessKey="26"> Find Your Property</a>
          </button>
        </div>
    
      </div>
    </div></>
  );
}
