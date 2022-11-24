import Navbar from '../components/Header/Navbar'
import '../styles/globals.css'
import {StateProvider} from '../Store/StateProvider'
import { initialState } from '../Store/Reducer'
import reducer from '../Store/Reducer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Script src="https://checkout.razorpay.com/v1/checkout.js" ></Script>
      <StateProvider initialState={initialState} reducer={reducer} >
      <Navbar/>
      <Component {...pageProps} />
      </StateProvider>
    
      
    </>
  )
}

export default MyApp
