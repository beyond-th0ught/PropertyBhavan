import React, { Component } from 'react'
import loading from '../../Assets/loading.gif'
import Image from 'next/image'


// ***********functional component***********

export default function Loading() {
  return (
           <div className='mx-auto w-fit text-center my-3'>
             <Image src={loading} alt="Loading" />
           </div>

  )
}




// *********class component*********

// export default class Loading extends Component {
//   render() {
//     return (
//       <div className='text-center my-3'>
//         <img src={loading} alt="Loading" />
//       </div>
//     )
//   }
// }
