export default function Nearby() {
  return (<div className="grid grid-flow-row py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      <div className="w-32 mx-16 my-4 border border-purple bg-purple text-white rounded p-4 shadow-md lg:max-w-lg">
          <div className="flex flex-col justify-center items-center space-y-2">
             
              <p className="">
             Hospital
              </p>
          </div>
      </div>
      <div className="w-32 mx-16 my-4 border border-purple bg-purple text-white rounded p-4 shadow-md lg:max-w-lg">
          <div className="flex flex-col justify-center items-center space-y-2">
              <p className="">
                Park
              </p>
          </div>
      </div>
      <div className="w-32 mx-16 my-4 border border-purple bg-purple text-white rounded p-4 shadow-md lg:max-w-lg">
          <div className="flex flex-col justify-center items-center space-y-2">
            
              <p className="">
          Bus
              </p>
          </div>
      </div>
      <div className="w-32 mx-16 my-4 border border-purple bg-purple text-white rounded p-4 shadow-md lg:max-w-lg">
          <div className="flex flex-col justify-center items-center space-y-2">
              <p className="">
      Mall
              </p>
          </div>
      </div>
      </div>
  );}