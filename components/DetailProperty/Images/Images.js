import React from "react";
const Images = ()=>{
    return (<div><div className="grid grid-flow-row flex flex-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="w-full justify-center h-96 my-8 mx-16 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover  w-full h-96"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
      </div>
      <span className="w-full inline h-52 my-8 mx-16 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
       <img
         className="object-cover "
         src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
         alt="avatar"
       />
     </span> <span className="w-full inline h-52 my-8 mx-16 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
       <img
         className="object-cover "
         src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
         alt="avatar"
       />
     </span>
 
     </div>
     <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
     
     <span className="w-full inline h-52 -my-48 mx-16 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover "
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
    </span> <span className="w-full inline h-52 -my-48 mx-16 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover "
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
    </span>
    </div></div>
    );
  }
export default Images;
