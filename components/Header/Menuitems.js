
import React from 'react';
const Menuitems = ({showMenu,active}) => {
  return (
                <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/2 bg-grey/40 backdrop-blur-lg gap-8 justify-center p-2 md-hidden' : 'hidden'}>
                    <span onClick={showMenu} className='cursor-pointer underline'>Close</span>
                    <li>Home</li>
                <li>List Property</li>
                <li>Blog</li>
                <li>Login</li>
                <li>Sign Up</li>
                </ul>
  );
};

export default Menuitems;