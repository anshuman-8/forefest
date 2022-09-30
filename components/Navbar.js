import React from 'react';
import Image from 'next/image';
import ForefestTitle from '../public/images/forefest-title.png';

function Navbar() {
  return (
    <div id='nav-bar'>
      <nav className='h-16 '>
        <div className='flex justify-between items-center h-full'>
          <div className='flex items-center'>
            <a href='/' className='mx-5 my-auto text-primary '><Image src={ForefestTitle} height="75" width='186'></Image></a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar