import React from 'react';
import Image from 'next/image';
import ForefestTitle from '../public/images/forefest-title.png';

function Navbar() {
  return (
    <div id='nav-bar'>
      <nav className='h-32'>
        <div className='flex flex-row justify-between items-center h-full'>
          <div className='flex items-center'>
            <a href='/' className='mx-5 my-auto text-primary '><Image src={ForefestTitle} height="79" width='186'></Image></a>
          </div>
          <div>
            <button>Create Event</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar