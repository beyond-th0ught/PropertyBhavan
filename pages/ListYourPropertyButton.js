import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styles from "./ListYourPropertyButton.module.css";
import { useStateValue } from "../Store/StateProvider";
import { useTitle } from "../components/Helper/Helper";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import Head from "next/head";

const FooterHero = dynamic(() => import('../components/FooterHero/FooterHero'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: false,
})

const ListYourPropertyButton = function () {

  const [state, dispatch] = useStateValue()
  let cookie_token = state.cookie_token
  const [checkDetails, setCheckDetails] = useState([])
  const [listDetails, setListDetails] = useState({amenities:[]})
  const [inputImage, setInputImage] = useState(null)

  const onImageChangeImage = (e) => {
    // console.log(e.target.value)
    if (e.target.files && e.target.files[0]) {
      setInputImage({
        [e.target.name]: e.target.files[0]
      })
    }
  };

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setListDetails({...listDetails,amenities:[...listDetails.amenities,e.target.value]})
    } else {
      setListDetails({...listDetails,amenities:listDetails.amenities.filter((value) => value !== e.target.value)})
    }
  };


  const handleChange = (e) => {
    setListDetails({ ...listDetails, [e.target.name]: e.target.value })
  }

  const navigate = useRouter()

  const listProperty = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "upload",
        inputImage.upload,
        inputImage.upload.name
      );
      for (const key in listDetails) {
       formData.append(key,listDetails[key])
      }
      // formData.append('name','hello')
      // console.log(inputImage)
      // for (var key of formData.entries()) {
      //   console.log(key[0] + ', ' + key[1])
      // }
      const requestOptions = {
        method: 'POST',
        headers: {cookie_token:localStorage.getItem('cookie_token')},
        body: formData,
      };
      // console.log(listDetails)
      // console.log(requestOptions)
      fetch('https://whale-app-ulq4x.ondigitalocean.app/property', requestOptions)
        .then(response => response.json())
        .then((data) => {
          // console.log(data.msg);
          navigate.push('/ListYourProperty')
        })
      .catch (error=>{
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  }

  // useTitle("List your property form","There are many real estate agents in India who will charge high brokerage fees and make unrealistic promises. Why spend more if you can list your property on PropertyBhavan.")
  

  return (
    <div className={styles.list_your_property_form}>
      <Head rel="canonical">
      <title>List your property form</title>
        <meta name="description" content="There are many real estate agents in India who will charge high brokerage fees and make unrealistic promises. Why spend more if you can list your property on PropertyBhavan." />
        <link rel="canonical" href="/ListYourPropertyButton" accessKey="47" />
        </Head>
      <form onSubmit={(e) => { e.preventDefault(); listProperty(); }} className="py-8 px-3 sm:px-8">
        <h3 className="text-center text-xl sm:text-2xl  msm:text-4xl">List Your Property Form</h3>
        <div className="type_category flex w-fit mt-5 justify-start gap-x-8 mvsm:gap-x-16 gap-y-5">
          <div className="flex flex-col gap-1">
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="prop_type">Select a type</label>
            <select required onChange={handleChange} className="rounded-lg text-sm mvsm:text-lg py-0.5 w-full my-0" id="prop_type" name="type">
              <option value='' className="text-sm mvsm:text-lg">Select</option>
              <option value='sale' className="text-sm mvsm:text-lg">Sell</option>
              <option value='rent' className="text-sm mvsm:text-lg">Rent</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="prop_category">Select a Category</label>
            <select required onChange={handleChange} className="rounded-lg text-sm mvsm:text-lg py-0.5 w-full my-0" id="prop_category" name="category">
              <option value='' className="text-sm mvsm:text-lg">Select</option>
              <option value='commercial' className="text-sm mvsm:text-lg">Commercial </option>
              <option value='residential' className="text-sm mvsm:text-lg">Residential </option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="prop_subcategory">Select a Sub Category</label>
            <select required onChange={handleChange} className="rounded-lg text-sm mvsm:text-lg py-0.5 w-full my-0" id="prop_subcategory" name="subCategory">
              <option value='' className="text-sm mvsm:text-lg">Select</option>
              <option value='plot' className="text-sm mvsm:text-lg">Plot</option>
              <option value='flat/apartment,house,complex' className="text-sm mvsm:text-lg">Flat/Apartment,House,Complex</option>
            </select>
          </div>
        </div>
        <h4 className=" text-xl sm:text-2xl msm:text-4xl w-fit font-semibold my-7">Listing Information</h4>
        <div className="flex w-fit flex-col gap-2.5">
          <div className="flex flex-col gap-1" >
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="sale_price">Sale Price</label>
            <input required onChange={handleChange} className=" w-40 vsm:w-48  py-1 vsm:py-1.5 rounded-lg" type="number" min={0} name="price" id="sale_price" />
          </div>
          <div className="flex flex-col gap-1" >
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="super_build_area">Super Build Area</label>
            <input required onChange={handleChange} className=" w-40 vsm:w-48  py-1 vsm:py-1.5 rounded-lg" type="number" min={0} name="buildArea" id="super_build_area" />
          </div>
          <div className="flex flex-col gap-1" >
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="furnishing_status">Furnishing Status: </label>
            <select required onChange={handleChange} className=" text-sm mvsm:text-lg  w-40 vsm:w-48  py-1 vsm:py-1.5 rounded-lg" id="furnishing_status" name="furnishing">
              <option value='' className="text-sm mvsm:text-lg">Select</option>
              <option value='furnished' className="text-sm mvsm:text-lg">furnished</option>
              <option value='semifurnished' className="text-sm mvsm:text-lg">semifurnished</option>
              <option value='unfurnished' className="text-sm mvsm:text-lg">unfurnished</option>
            </select>
          </div>
        </div>
        <div className="flex w-fit justify-between gap-8 mvsm:gap-16 my-7" >
          <div className="flex flex-col gap-1">
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="bedSize">Bedroom</label>
            <select required onChange={handleChange} className=" text-sm mvsm:text-lg rounded-lg py-0.5 w-full my-0" id="bedSize" name="bedrooms">
              <option value='' className="text-sm mvsm:text-lg">Select</option>
              <option value='1bhk' className="text-sm mvsm:text-lg">1 BHK</option>
              <option value='2bhk' className="text-sm mvsm:text-lg">2 BHK</option>
              <option value='3bhk' className="text-sm mvsm:text-lg">3 BHK</option>
              <option value='4bhk' className="text-sm mvsm:text-lg">4 BHK</option>
              <option value='5+bhk' className="text-sm mvsm:text-lg">5+ BHK</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="bathroom">Bathroom</label>
            <select required onChange={handleChange} className="text-sm mvsm:text-lg rounded-lg py-0.5 w-full my-0" id="bathroom" name="bathrooms">
              <option value={0} className="text-sm mvsm:text-lg">Select</option>
              <option value={1} className="text-sm mvsm:text-lg">1</option>
              <option value={2} className="text-sm mvsm:text-lg">2</option>
              <option value={3} className="text-sm mvsm:text-lg">3</option>
            </select>
          </div>
        </div>
        <div className="flex w-fit flex-col gap-1" >
          <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="description">Description</label>
          <textarea required onChange={handleChange} className="h-36 w-60 msm:w-96" id="description" placeholder="type something here..." name="description" />
        </div>
        <div className="flex flex-col gap-1" >
            <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="address">Address</label>
            <input required onChange={handleChange} className=" w-40 vsm:w-56  py-1 vsm:py-1.5 rounded-lg" type="text" name="address" id="address" />
        </div>
        <div className="mt-7 mb-2 w-fit">
          <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="">Amenities</label>
        </div>
        <div className="flex w-fit flex-col gap-3">
          <div className="flex gap-5 mvsm:gap-7">
            <div className="flex gap-1.5 mvsm:gap-2 items-center">
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='CCTV' id="1"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="1">CCTV</label>
            </div>
            <div className="flex gap-1.5 mvsm:gap-2 items-center" >
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='Security' id="2"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="2">Security</label>
            </div>
            <div className="flex gap-1.5 mvsm:gap-2 items-center" >
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='Gym' id="3"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="3">Gym</label>
            </div>
          </div>
          <div className="flex gap-5 mvsm:gap-7">
            <div className="flex gap-1.5 mvsm:gap-2 items-center">
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='Swimming pool' id="4"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="4">Swimming pool</label>
            </div>
            <div className="flex gap-1.5 mvsm:gap-2 items-center" >
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='Lift' id="5"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="5">Lift</label>
            </div>
            <div className="flex gap-1.5 mvsm:gap-2 items-center">
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='Laundry' id="6"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="6">Laundry</label>
            </div>
          </div>
          <div className="flex gap-5 mvsm:gap-7">
            <div className="flex gap-1.5 mvsm:gap-2 items-center">
              <input onChange={handleCheckBox} type="checkbox" name="amenities_choice" value='Parking' id="7"></input>
              <label  className="w-fit text-xs mvsm:text-sm font-semibold" htmlFor="7">Parking</label>
            </div>
          </div>
        </div>
        <div className="flex mt-6 gap-4 items-center">
          <label className="w-fit text-sm mvsm:text-lg font-semibold" htmlFor="photos">Photos</label>
          <input accept="image/png, image/jpeg, image/jpg" required name='upload' onChange={onImageChangeImage} className="w-auto py-1.5 rounded-lg" id="photos" type="file" />
        </div>
        <button type="submit" className="bg-deep_purple_800 hover:bg-deep_purple_500 border border-black rounded-xl my-8 text-sm mvsm:text-lg text-white py-2 px-5 mvsm:px-7">Submit Your Property</button>
      </form>
      <FooterHero/>
      <Footer />
    </div>
  );
};
export default ListYourPropertyButton;
