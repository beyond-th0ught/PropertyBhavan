import React from 'react'
import Logout from './Logout'
import Profile from './Profile'

const Layout = ({children}) => {
  return (
    <div>
     <Profile/>
     <main>
        {children}
        </main>
     <Logout/> 
    </div>
  )
}

export default Layout
