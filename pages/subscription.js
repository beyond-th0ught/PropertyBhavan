import React from 'react'
import { useStateValue } from '../Store/StateProvider'
import Layout from './Layout'


export default function Subscription() {
const [state,dispatch]= useStateValue();
  return (
    <Layout>
    <div className='flex justify-center mt-8'>{state.profileData?.ownerPlan ? `You are on ${state.profileData?.ownerPlan} plan` : "You don't have any active plan"}</div>
    </Layout>
  )
}
