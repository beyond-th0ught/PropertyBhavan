import { useEffect } from "react";

export const checkoutHandler = async (amount) => {

    // console.log(amount)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            cookie_token: localStorage.getItem('cookie_token')
        },
        body: JSON.stringify({ amount })
    };
    // console.log(requestOptions)
    let url = "https://whale-app-ulq4x.ondigitalocean.app/payment/create";
    const data = await fetch(url, requestOptions);
    const parseData = await data.json();
    // console.log(parseData)
    const getkey = await fetch("https://whale-app-ulq4x.ondigitalocean.app/payment/getkey",{headers: {
        "Content-Type": "application/json",
        cookie_token: localStorage.getItem('cookie_token')
    }})
    const key = await getkey.json()
    // console.log(key.key)
    const options = {
        key:key.key,
        amount: parseData.message.amount,
        currency: "INR",
        name: "Propertybhavan",
        description: "Property Bhavan is a real estate website where you can buy/sell/rent a residential or commercial property without the hindrance of a broker.",
        image: "logo.png",
        order_id: parseData.message.id,
        handler: async function (response){
            verifyHandler(response.razorpay_order_id,response.razorpay_payment_id,response.razorpay_signature,amount)
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
        },
        // callback_url: "https://whale-app-ulq4x.ondigitalocean.app/payment/verify",
        prefill: {
            name: parseData.details.name,
            email: parseData.details.email,
            contact: parseData.details.mobileNum
        },
        notes: {
            "address": "11 Haridas Dawn Road Kolkata, West Bengal - 700053"
        },
        theme: {
            "color": "#121212"
        }
    };
    // console.log(options)
    const razor = new window.Razorpay(options);
    razor.on('payment.failed', function (response) {
        alert(response.error.description);
    });
    razor.open();
}

export const verifyHandler = async (razorpay_order_id, razorpay_payment_id, razorpay_signature, amount) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            cookie_token: localStorage.getItem('cookie_token')
        },
        body: JSON.stringify({ razorpay_order_id, razorpay_payment_id, razorpay_signature, amount })
    };
    // console.log(requestOptions)
    let url = "https://whale-app-ulq4x.ondigitalocean.app/payment/verify";
    const data = await fetch(url, requestOptions);
    const parseData = await data.json();
    // console.log(parseData)
    if(parseData.success){
        alert(`Your transactin is successful and your order id is ${parseData.message}`)
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }
}

export const handleBuy = (amount,state)=>{
    
    if (localStorage.getItem("cookie_token")) {
        checkoutHandler(amount)
    }else{
        state.loginRef.current?.click();
    }
}

export function useTitle(title,description) {
    useEffect(() => {
      const prevTitle = document.title
      const preDesc = document.getElementsByTagName("META")[3].content
      document.title = title
      document.getElementsByTagName("META")[3].content = description
    //   return () => {
    //     document.title = prevTitle
    //   }
    })
  }