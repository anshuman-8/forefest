import React from 'react';
import Image from 'next/image';
import ForefestTitle from '../public/images/forefest-title.png';

function Navbar() {
  return (
    <div>
      <nav className='h-10 '>
        <div className='flex justify-between items-center h-full'>
          <div className='flex items-center'>
            {/* <div className='w-10 h-10 bg-primary rounded-full'></div> */}
            <div className='ml-2 text-primary '><Image src={ForefestTitle} height="40" width='148'></Image></div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar