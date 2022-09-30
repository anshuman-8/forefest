import React from 'react'
import Image from 'next/image'
import EventImage from '../public/images/demo-event.jpeg'

function EventCard() {
  return (
    <div className='inline-block p-1'>
      <div className='flex flex-row h-52  border-2 border-primaryDark rounded-xl'>
        <div className='w-80 py-1'><div className='relative top-2 left-2'></div><Image src={EventImage} height={'195px'}/></div>
        <div className='flex flex-col w-96 px-3 bg-slate-400/10 hover:bg-blend-darken'>
          <div className='text-2xl font-semibold mb-2 mt-1'>Event Title Big</div>
          <div className='font-normal mb-2'>This will be a short event description,This will be a short event description,This will be a short event description sdf sdf sdf wefwegvwr wr gdfsfd.</div> 
          {/* must be of 150 characters */}
          <div className='flex flex-row justify-between my-2'>
            <div className='font-medium flex flex-col'> 
              <span>Fri, 30 Sep, 2022</span>
              <span>06:30 PM IST</span>
            </div>
            <div className='font-medium'>Couresera waale</div>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='font-medium '>Virtual</span>
            <div className='font-medium'>Free</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard