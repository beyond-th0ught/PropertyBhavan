// import './FooterHero.css'

export default function FooterHero() {
  return (
    <div className="footer_hero_container bg-purple dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
      <div className=" footer_hero container flex flex-col mx-8 md:py-10 sm:py-10">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="text-white lg:w-1/2 lg:mx-6">
            <h1 className="text-3xl font-semibold lg:text-5xl">
              You can count on us to help you
              <span className="xl:inline text-yellow"> sell </span> or{" "}
              <span className="xl:inline text-yellow">rent </span> your
              property.
            </h1>
          </div>
          <div className="mt-8 lg:w-1/3 lg:mx-8">
            <form className="">
              <div className="shrink flex-auto">
                <label className="block mb-2 text-sm text-white">Name</label>
                <input
                  type="text"
                  placeholder="Survajeet "
                  className="block sm:w-11/12  py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="flex-auto mt-6">
                <label className="block mb-2 text-sm text-white">Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  className="block sm:w-11/12  py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <button className=" footer_hero_contact sm:w-11/12 flex-1  py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-yellow rounded-md hover:bg-violet hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                Contact Now
              </button>
            </form>
          </div>
        </div>{" "}
        <hr className="my-12" />
      </div>
    </div>
  );
}
