import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import styles from '../../styles/Navbar.module.css'
import { useStateValue } from '../../Store/StateProvider'
import { actionTypes } from '../../Store/Reducer'
import { useRef } from 'react'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const user_logo = <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.5186 0C11.5416 0.00410997 7.72865 1.58578 4.91649 4.39793C2.10434 7.21008 0.522665 11.023 0.518555 15C0.518555 19.0078 2.07777 22.7739 4.9101 25.6062C6.29987 27.0038 7.95311 28.1118 9.77409 28.866C11.5951 29.6202 13.5476 30.0056 15.5186 29.9999C19.4955 29.9958 23.3085 28.4142 26.1206 25.602C28.9328 22.7899 30.5144 18.9769 30.5186 15C30.5144 11.023 28.9328 7.21008 26.1206 4.39793C23.3085 1.58578 19.4955 0.00410997 15.5186 0ZM16.4863 21.2903C17.523 19.9415 11.3527 29.4033 12.8728 28.6394C14.3928 27.8755 15.2692 27.1013 16.9702 27.0743C21.3675 21.8333 16.9646 22.2356 15.7148 22.87L16.4863 22.258C20.8411 26.129 16.0669 30.0566 25.196 25.6451C26.9205 25.6744 10.3669 22.8325 11.9018 23.6192C13.4367 24.4058 21.2619 24.7462 22.2927 26.129C19.7988 28.2338 18.9782 22.8724 15.7148 22.87C12.3829 22.876 19.0002 23.477 16.4863 21.2903ZM15.3943 19.977C15.3389 19.977 15.2857 19.9859 15.2302 19.9881C13.9356 19.9443 12.7092 19.3972 11.8116 18.4632C10.9141 17.5292 10.4162 16.282 10.4239 14.9867C10.4262 14.331 10.558 13.6822 10.8116 13.0775C11.0652 12.4729 11.4357 11.9242 11.9018 11.4631C12.3679 11.0019 12.9205 10.6373 13.5278 10.3902C14.1351 10.143 14.7853 10.0182 15.4409 10.0229C16.0966 10.0252 16.7454 10.157 17.35 10.4106C17.9547 10.6642 18.5033 11.0346 18.9645 11.5008C19.4257 11.9669 19.7903 12.5194 20.0374 13.1267C20.2846 13.7341 20.4094 14.3842 20.4047 15.0399C20.4047 17.728 18.2533 19.9127 15.5829 19.9903C15.5208 19.9881 15.4587 19.977 15.3943 19.977ZM25.2576 24.8898C23.5426 22.6265 21.1031 21.0201 18.3464 20.3386C19.3057 19.8129 20.1059 19.039 20.6631 18.0977C21.2204 17.1565 21.5141 16.0827 21.5137 14.9889C21.5111 14.1877 21.3504 13.3948 21.041 12.6557C20.7316 11.9167 20.2794 11.2459 19.7104 10.6818C19.1413 10.1177 18.4666 9.67142 17.7249 9.36844C16.9831 9.06546 16.1889 8.91176 15.3877 8.91614C14.5865 8.91876 13.7936 9.07938 13.0545 9.38882C12.3155 9.69826 11.6447 10.1504 11.0806 10.7195C10.5165 11.2885 10.0702 11.9632 9.76725 12.7049C9.46427 13.4467 9.31057 14.2409 9.31495 15.0421C9.31902 16.1257 9.61382 17.1884 10.1686 18.1192C10.7233 19.05 11.5177 19.815 12.4689 20.3341C9.75876 20.9998 7.35166 22.5584 5.63537 24.7589C3.06113 22.1661 1.62057 18.6581 1.62975 15.0044C1.63386 11.3215 3.09869 7.7907 5.70287 5.18653C8.30706 2.58235 11.8379 1.11752 15.5208 1.11341C19.2036 1.11752 22.7345 2.58235 25.3387 5.18653C27.9429 7.7907 29.4077 11.3215 29.4118 15.0044C29.4109 16.8455 29.043 18.6679 28.3297 20.3653C27.6165 22.0626 26.5721 23.6007 25.2576 24.8898Z" fill="#341F87" />
</svg>

const menu = <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M5.417 29.375v-2.083h29.166v2.083Zm0-8.333v-2.084h29.166v2.084Zm0-8.334v-2.083h29.166v2.083Z" /></svg>

const close = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" /></svg>

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const  Navbar = ()=> {
  
  const navigate = useRouter()
  const loginModalRef = useRef()


  const [state, dispatch] = useStateValue();

  const [number, setNumber] = useState()
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const [loginModal, setLoginModal] = useState(true)
  const [signUpModal, setSignUpModal] = useState(false)
  const [signInModal, setSignInModal] = useState(false)
  const [Agree, setAgree] = useState(true)
  const [registerUser, setRegisterUser] = useState({})
  const [loginDetails, setLoginDetails] = useState(null)



  const handleChange = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
  }

  const handleLoginChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
  }




  function closeModal() {
    setIsOpen(false)
    setLoginModal(true);
    setRegisterUser({})
    setLoginDetails(null)
    setNumber(null)
    setFlag(false);
    setOtp(null)
    setSignUpModal(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const cookie_token = state.cookie_token

  const [menuOpen, setMenuOpen] = useState(false)

  const createUser = (e) => {
    try {
      // console.log(number)
      e.preventDefault();
      if (number === "" || number === undefined || number === null)
        return alert("Please enter a valid phone number!");
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobileNum: number })
        };

        // console.log(requestOptions)
        fetch('https://whale-app-ulq4x.ondigitalocean.app/user/register', requestOptions)
          .then(response => response.json())
          .then((data) => {
            // console.log(data);
            if (data.otpSent) {
              setFlag(true);
            } else {
              alert(data.msg)
            }

          })
          .catch((err) => {
            console.error(err);
          });


      } catch (err) {

        alert(err.message)
        // console.log(err.message)
      }
    } catch (error) {
      // console.log(error.message)
    }
  }

  const handleLogin = async (e) => {
    try {
      // console.log(number)
      e.preventDefault();
      if (number === "" || number === undefined || number === null)
        return alert("Please enter a valid phone number!");
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobileNum: number })
        };

        // console.log(requestOptions)
        fetch('https://whale-app-ulq4x.ondigitalocean.app/user/login', requestOptions)
          .then(response => response.json())
          .then((data) => {
            // console.log(data);
            if (data.otpSent) {
              setFlag(true);
            } else {
              alert(data.msg)
            }
          })
          .catch((err) => {
            console.error(err);
          });


      } catch (err) {

        alert(err.message)
        // console.log(err.message)
      }
    } catch (error) {
      // console.log(error.message)
    }
  }

  const verifyLoginOtp = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp: otp, mobileNum: number })
    };

    // console.log(requestOptions)
    fetch('https://whale-app-ulq4x.ondigitalocean.app/user/login/verify', requestOptions)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        if (data.cookie_token) {
          localStorage.setItem('cookie_token', data.cookie_token)
          dispatch({
            type: actionTypes.set_cookie_token,
            cookie_token: data.cookie_token
          })
          closeModal()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyRegisterOtp = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...registerUser, otp: otp })
    };

    // console.log(requestOptions)
    fetch('https://whale-app-ulq4x.ondigitalocean.app/user/register/verify', requestOptions)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        if (data.cookie_token) {
          localStorage.setItem('cookie_token', data.cookie_token)
          dispatch({
            type: actionTypes.set_cookie_token,
            cookie_token: data.cookie_token
          })
          closeModal()
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAgreeClick = () => {
    setAgree(!Agree)
  }

  const handleTermsClick = () => {
    closeModal()
    navigate.push('/terms-and-conditions')
  }

  useEffect(() => {
    dispatch({
      type: actionTypes.login_ref,
      ref: loginModalRef,
    })
  }, [])

  useEffect(() => {
    setRegisterUser({ ...registerUser, mobileNum: number })
  }, [number])

  const [showMembership, setShowMembership] = useState(false)
  const handleMembership = () => {
    setShowMembership(!showMembership)
  }
  

  return (
    <div className={`${styles.navbar} bg-purple `}>
      <div className={styles.navbar_name}>
        <Link href='/' >
          PropertyBhavan
        </Link>
        {/* <div onClick={() => { setMenuOpen(!menuOpen); setShowMembership(false) }} className="cursor-pointer fill-white menu_icon">
          {menu}
        </div> */}
        <Popover className="md:hidden">
          {({ open }) => (
            <>
              <Popover.Button aria-label="Aria Name"
              >
                <span onClick={() => { setMenuOpen(!menuOpen); setShowMembership(false) }} className={`cursor-pointer fill-white ${styles.menu_icon}`} >{menu}</span>
              </Popover.Button>

              {/* <Transition
                as={Fragment} 
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              > */}

              {menuOpen && (<div><Popover.Panel static className="absolute top-[11vh] left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div className="h-fit py-2 bg-purple flex flex-col rounded-lg shadow-2xl border  ring-1 ring-black ring-opacity-5">
                  <Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/' className={styles.link}>Home</Link>
                  <Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/ListYourProperty' className={styles.link}>List your Property</Link>
                  <Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/Blog' className={styles.link}>Blog</Link>
                  <li className='relative list-none'><p onClick={handleMembership} className={`${styles.link} cursor-pointer`}>Membership</p>
                  
                    <div className={`relative ${styles.membership_phone}  rounded-lg  bg-purple   text-white ${showMembership ? "h-fit" : "opacity-0 h-0"} duration-300 overflow-hidden transition-all ease-in-out w-full ${showMembership ? "top-1" : "top-0"}`}>
                      <Link onClick={() => { setMenuOpen(false); handleMembership() }} href='OwnerMebmership' className='text-center font-semibold p-2 text-base block'>For owner</Link>
                      <Link onClick={() => { setMenuOpen(false); handleMembership() }} href='BuyerMembership' className='text-center font-semibold p-2 text-base block'>For buyer</Link>
                    </div>
                  </li>
                  {cookie_token && <Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/MyAccount' className={`mt-3 ${styles.user_logo} mx-auto`}>{user_logo}</Link>}
                  {!cookie_token && <div ref={loginModalRef} onClick={() => { setMenuOpen(false); openModal() }} className={`mt-3 ${styles.link} ${styles.login} cursor-pointer`}>Login</div>}
                </div>
              </Popover.Panel></div>)}

              {/* </Transition> */}
            </>
          )}
        </Popover>
      </div>
      <div className={`hidden md:block ${styles.navbardetails} bg-purple ${menuOpen ? styles.navdetailsopen : styles.navdetailsclose} `}>
        <ul>
          <li><Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/' className={styles.link}>Home</Link></li>
          <li><Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/ListYourProperty' className={styles.link}>List your Property</Link></li>
          <li><Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/Blog' className={styles.link}>Blog</Link></li>
          <li className='relative'><p onClick={handleMembership} className={`${styles.link} cursor-pointer'`}>Membership</p>
          
            <div className={`absolute ${styles.membership_desktop} border-1 border rounded-lg  bg-purple  text-white ${showMembership ? "visible " : "opacity-0 invisible"} duration-300 overflow-hidden transition-all ease-in-out w-full ${showMembership ? "top-14" : "top-12"}`}>
              <Link onClick={handleMembership} href='OwnerMebmership' className='font-semibold p-2 border-b border-1 text-base block'>For owner</Link>
              <Link onClick={handleMembership} href='BuyerMembership' className='font-semibold p-2 text-base block'>For buyer</Link>
            </div>
            <div className={`relative ${styles.membership_phone} border-1 border rounded-lg  bg-purple  text-white ${showMembership ? "h-fit" : "opacity-0 h-0"} duration-300 overflow-hidden transition-all ease-in-out w-full ${showMembership ? "top-2" : "top-0"}`}>
              <Link onClick={() => { setMenuOpen(false); handleMembership() }} href='OwnerMebmership' className='text-center font-semibold p-2 border-b border-1 text-base block'>For owner</Link>
              <Link onClick={() => { setMenuOpen(false); handleMembership() }} href='BuyerMembership' className='text-center font-semibold p-2 text-base block'>For buyer</Link>
            </div>
          </li>

          {cookie_token && <li><Link onClick={() => { setMenuOpen(false); setShowMembership(false) }} href='/MyAccount' className={styles.user_logo}>{user_logo}</Link></li>}
          {!cookie_token && <li className={styles.loginLi}><div ref={loginModalRef} onClick={() => { setMenuOpen(false); openModal() }} className={`${styles.link} ${styles.login} cursor-pointer`}>Login</div></li>}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { closeModal(); setSignUpModal(false); }}>
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
                    <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      {loginModal && <div>
                        <div className='flex justify-between items-center'>
                          <Dialog.Title
                            as="h2"
                            className="text-xl mb-1 font-medium leading-6 text-gray-900"
                          >
                            Login
                          </Dialog.Title>
                          <div onClick={() => { closeModal(); setSignInModal(false); setSignUpModal(false); }}>
                            {close}
                          </div>
                        </div>
                        <p className='text-sm' >Please login to view your profile</p>
                        <form style={{ display: !flag ? "block" : "none" }} onSubmit={handleLogin}>
                          <div className='my-4 px-2 overflow-clip flex rounded-lg border w-full border-deep_purple_700'>
                            <PhoneInput
                              international

                              defaultCountry="IN"
                              value={number}
                              onChange={setNumber}
                              error={number ? (isValidPhoneNumber(number) ? undefined : 'Invalid phone number') : 'Phone number required'} />

                          </div>
                          <div className='w-full' id='recaptcha-container' />
                          <p onClick={() => { setLoginModal(false); setSignInModal(false); setSignUpModal(true) }} className='text-sm text-center underline cursor-pointer w-fit mx-auto ' >Don't have an account ?</p>
                          <button type='submit' className='w-full rounded-lg border bg-white border-deep_purple_700 hover:bg-deep_purple_500 hover:text-white py-2 mt-5'>
                            Send OTP
                          </button>

                        </form>
                        <form onSubmit={verifyLoginOtp} style={{ display: flag ? "block" : "none" }}>
                          <div className='mt-5'>

                            <p className='text-sm' >Hey user please enter the OTP</p>
                            <input required onChange={(e) => setOtp(e.target.value)} className='my-4 rounded-lg border w-full border-deep_purple_700' type="text" name="otp" id="" />
                            <button type='submit' className='w-full rounded-lg border border-deep_purple_700 hover:bg-deep_purple_700 bg-deep_purple_800 text-white py-2 mt-1'>Verify</button>
                            <p className='text-sm mt-3'>Didn't recieve a code? {" "} <span className='text-deep_purple_900 ' > click here</span> {" "}to recieve new OTP</p>
                          </div>
                        </form>
                      </div>}

                      {
                        signUpModal && <div>
                          <div className='flex justify-between items-center'>
                            <Dialog.Title
                              as="h2"
                              className="text-xl mb-1 font-medium leading-6 text-gray-900"
                            >
                              Create an account
                            </Dialog.Title>
                            <div onClick={() => { closeModal(); setSignUpModal(false); }}>
                              {close}
                            </div>
                          </div>
                          <form style={{ display: !flag ? "flex" : "none" }} onSubmit={createUser} className='flex flex-col gap-4 my-5'>
                            <input required placeholder='Name' onChange={handleChange} className='rounded-lg border w-full border-deep_purple_700' type="text" name="name" />

                            <input placeholder='Email Id' onChange={handleChange} className='rounded-lg border w-full border-deep_purple_700' type="email" name="email" id="" />
                            <div className='my-4 px-2 flex rounded-lg border w-full border-deep_purple_700'>
                              <PhoneInput
                                international
                                defaultCountry="IN"
                                value={number}
                                onChange={setNumber}
                                error={number ? (isValidPhoneNumber(number) ? undefined : 'Invalid phone number') : 'Phone number required'} />
                            </div>
                            <div className='flex items-center'>
                              <input required onChange={handleAgreeClick} type="checkbox" name="agree" id="agree" />
                              <label className='text-sm ml-3' htmlFor="agree">I agree <span onClick={handleTermsClick} className='underline'>Term and Conditions</span>  & Privacy Policy</label>
                            </div>
                            <div className='w-full' id='recaptcha-container' />
                            <button type='submit' className='w-full rounded-lg border border-deep_purple_700 hover:bg-deep_purple_700 bg-deep_purple_800 text-white py-2 mt-5'>Sign Up</button>
                          </form>
                          <form onSubmit={verifyRegisterOtp} style={{ display: flag ? "block" : "none" }}>
                            <div className='mt-5'>
                              <p className='text-sm' >Hey user please enter the OTP</p>
                              <input required onChange={(e) => setOtp(e.target.value)} className='my-4 rounded-lg border w-full border-deep_purple_700' type="text" name="otp" id="" />
                              <button type='submit' className='w-full rounded-lg border border-deep_purple_700 hover:bg-deep_purple_700 bg-deep_purple_800 text-white py-2 mt-1'>Verify</button>
                              <p className='text-sm mt-3'>Didn't recieve a code? {" "} <span className='text-deep_purple_900 ' > click here</span> {" "}to recieve new OTP</p>
                            </div>
                          </form>
                          <p onClick={() => { setSignUpModal(false); setLoginModal(true) }} className='w-fit mx-auto text-sm cursor-pointer underline '>Back to <span className='text-deep_purple_900 ' >Login</span> </p>
                        </div>
                      }
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
