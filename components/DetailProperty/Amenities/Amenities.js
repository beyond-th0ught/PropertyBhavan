import React from "react";
const Amenities =function () {
    return (
      <div className="my-8">
        <div className="mx-16 p-4 inline lg:max-w-lg">
        
            <img
          className="object-cover inline w-30 h-30"
          src="checkbox.png"
          alt="checkbox"
        />
                <span className="inline px-4 text-xl semi-bold">
                CCTV
                </span>
            </div>
            <div className="mx-16 p-4 inline lg:max-w-lg">
        
        <img
      className="object-cover inline w-30 h-30"
      src="checkbox.png"
      alt="checkbox"
    />
            <span className="inline px-4 text-xl semi-bold">
            Security
            </span>
        </div>
        <div className="mx-16 p-4 inline lg:max-w-lg">
        
            <img
          className="object-cover inline w-30 h-30"
          src="checkbox.png"
          alt="checkbox"
        />
                <span className="inline px-4 text-xl semi-bold">
                Life 
                </span>
            </div>
        </div>
    );
  }
export default Amenities;
