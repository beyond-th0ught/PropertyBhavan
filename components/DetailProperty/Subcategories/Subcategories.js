import React from "react";
const Subcategories = ()=>{
    return (
      <nav className="bg-white dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a
            href="#"
            accessKey="1"
            className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-purple mx-1.5 sm:mx-6"
          >
            <span className="xl:inline text-violet">Overview</span>
          </a>
          <a
            href="#"
            accessKey="2"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-purple mx-1.5 sm:mx-6"
          >
         <span className="xl:inline hover:text-violet">Details</span>
          </a>
          <a
            href="#"
            accessKey="3"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-purple mx-1.5 sm:mx-6"
          >
      <span className="xl:inline hover:text-violet"> Features &  Amenities</span> 
          </a>
          <a
            href="#"
            accessKey="4"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-purple mx-1.5 sm:mx-6"
          >
        <span className="xl:inline hover:text-violet">Nearby</span> 
          </a>
         
        </div>
      </nav>
    );
  }
export default Subcategories;
