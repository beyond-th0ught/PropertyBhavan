
import Svg from "./Svg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useStateValue } from "../../Store/StateProvider";
import { useRouter } from "next/router";


export default function Hero({findPropertyRef,lang}) {

  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);

  const handleChangee = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
    setSearchDetails({ ...searchDetails, [e.target.name]: e.target.value });
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchtext(value);
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return (
      <div className="flex max-h-32 overflow-y-auto overflow-x-hidden mt-4 pl-2">
      <ul >
        {suggest.map((item, index) => {
          return (
            <div key={index} >
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
      </div>
    );
  };









  const [state,dispatch] = useStateValue()
  const [isOpen, setIsOpen] = useState(false);
  const [searchDetails, setSearchDetails] = useState({type:'sale'});
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  function closeModal() {
    setIsOpen(false);
    setSearchDetails(null);
    setSearchtext("");
    setSuggest([]);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (e) => {
    setSearchDetails({ ...searchDetails, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    // console.log(searchDetails);
    
    router.push(`/ListView/${searchDetails.type}/${searchDetails.address}`)
  };

  return (
    <div className=" h-96 bg-purple">
      <main className="hero_top_banner mx-8 py-10 max-w-7xl sm:mt-0 ">
        <div className="sm:text-left">
          <h1 className="text-3xl bg-deep-purple-902 font-bold tracking-tight text-gray-900 sm:text-4xl msm:text-5xl md:text-6xl ">
            <p className="md:block   min-w-max text-white">
              Find Your Property
            </p>
            {/* <br /> */}
            <p className="block text-yellow md:inline">Brokerage Free</p>
          </h1>
          <p className="mt-3 text-base text-white sm:text-left sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl md:mx-0">
            We will help you find your home in Kolkata at zero brokerage cost
            without a real estate agents.
          </p>
          <button
          ref={findPropertyRef}
            onClick={openModal}
            className="flex  w-auto mt-6 items-center justify-center rounded-md border border-black bg-white px-8 py-3 text-base font-medium text-black hover:bg-zinc-400 hover:text-white lg:w-80 md:py-3 md:px-10 md:text-lg"
          >
            Find Your Property
          </button>
          {/* <Button whole={p.whole} /> */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className=" w-full max-w-md transform p-6 overflow-y-auto rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                      <form onSubmit={(e)=>{e.preventDefault(); handleSearch()}}>
                        <Dialog.Title
                          as="h3"
                          className=" text-xl font-medium leading-6 text-gray-900"
                        >
                          Find Property Here
                        </Dialog.Title>
                        <div className=" mt-5">
                          <div className=" flex  flex-col ">
                            <label className=" text-lg" htmlFor="address">
                              Search Location
                            </label>
                            <input
                              required
                              onChange={handleChangee}
                              
                              className=" text-base border rounded-lg border-deep_purple_500"
                              type="text"
                              name="address"
                              id="address"
                              placeholder="Search.."
                              value={searchtext}
                            />
                              {getSuggestions()}

{/* <div className="searchcontainer">
      <input
        type="text"
        // placeholder="Search.."
        // className="search"
        // value={searchtext}
        // onChange={handleChange}
      />
      
    </div> */}






                          </div>
                          <div className=" flex mt-3 text-lg gap-8">
                            <div className="flex gap-2 items-center">
                              <input
                              required
                              checked
                                onChange={handleChange}
                                id="sale"
                                value="sale"
                                type="radio"
                                name="type"
                              />
                              <label htmlFor="sale"> Sale</label>
                            </div>
                            <div className="flex gap-2 items-center">
                              <input
                              required
                                onChange={handleChange}
                                id="rent"
                                value="rent"
                                type="radio"
                                name="type"
                              />
                              <label htmlFor="rent"> Rent</label>
                            </div>
                          </div>
                        </div>

                        <div className=" mt-6 flex justify-between  ">
                          <button
                            type="button"
                            className="inline-flex  px-5 sm:px-8 justify-center rounded-md border border-transparent bg-blue-100  py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="inline-flex px-5 sm:px-8 justify-center rounded-md border border-transparent bg-deep_purple_700 py-2 text-sm font-medium text-white hover:bg-deep_purple_500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div className="lg:absolute lg:inset-y-0 lg:right-0  lg:my-20 lg:py-5 invisible lg:visible">
            <Svg />
          </div>
        </div>
      </main>
    </div>
  );
}
