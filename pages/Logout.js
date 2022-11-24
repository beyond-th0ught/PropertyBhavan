import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { actionTypes } from '../Store/Reducer';
import { useStateValue } from '../Store/StateProvider';

const Logout = () => {
    const router = useRouter();
    const [state, dispatch] = useStateValue();
    const handleLogout = () => {
      dispatch({
        type: actionTypes.log_out,
      });
      localStorage.clear();
      // router.push("/");
      window.location.reload()
    };
    useEffect(() => {
      if (state.cookie_token === null) {
        router.push("/");
      }
      console.log(state.profileData)
    }, []);
  return (
    <div>
      {/* {!loading && ( */}
        <button
          onClick={handleLogout}
          className=" flex  justify-center text-white mx-auto border-red-800 border hover:bg-red-600 rounded-lg bg-red-700 px-4 py-1 my-4 ml-auto w-fit cursor-pointer"
        >
          Logout
        </button>
    {/* //   )} */}
    </div>
  )
}

export default Logout
