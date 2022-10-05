import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import ForefestTitle from '../public/images/forefest-title.png';
import Link from 'next/link';


function Navbar() {
  const [isAuth,setIsAuth]=useState(true);
  const  ownerIcon= "https://robohash.org/LNN.png?set=set3"

  return (
    <div id='nav-bar'>
      <nav className='h-32 px-5 md:px-10'>
        <div className='flex flex-row justify-between items-center h-full'>
          <div className='flex items-center'>
            {/* //4.6 */}
            <a href='/' className='mx-1 md:mx-3 my-auto text-primary scale-75 md:scale-100'><Image src={ForefestTitle} height="47" width='210'></Image></a>
          </div>
          <div>
          {isAuth?
          <div className='scale-75 md:scale-100 flex flex-row items-center'>
            <button className='px-3 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-green-500 text-bkg mx-3 active:scale-100 hover:scale-105'>Create Event</button>
            <button title={"user name"} className='w-12 mx-1 '><Image src={ownerIcon} width={'48px'} height={'48px'} className='w-full  rounded-full h-full align-middle border-none bg-slate-400/30 hover:shadow-xl active:scale-95'/></button>

          </div>
          :<div className='flex flex-row scale-90 md:scale-100'>
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