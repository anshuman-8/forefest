import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import ForefestTitle from '../public/images/forefest-title.png';
import Link from 'next/link';


function Navbar() {
  const [isAuth,setIsAuth]=useState(false);

  return (
    <div id='nav-bar'>
      <nav className='h-32 px-10'>
        <div className='flex flex-row justify-between items-center h-full'>
          <div className='flex items-center'>
            {/* //4.6 */}
            <a href='/' className='mx-3 my-auto text-primary '><Image src={ForefestTitle} height="47" width='210'></Image></a>
          </div>
          <div>
          {isAuth?
          <div>
            <a className='px-3 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-green-500 text-bkg mx-3 hover:text-white active:scale-100 hover:scale-105'>Create Event</a>
            
          </div>
          :<div className='flex flex-row'>
            <div className='px-3 py-2 border-2 border-primary rounded-2xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-bkg mx-3 hover:scale-105 active:scale-100 cursor-pointer'> <Link href={"/login"} className=''>Login</Link></div>
            <div className='px-3 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-bkg mx-3 hover:scale-105 active:scale-100 cursor-pointer'><Link href='/signup' className=''>Sign up</Link></div>
          </div>}

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar