import React from 'react'
import Image from 'next/image'
import EventImage from '../public/images/demo-event.jpeg'
import DemoIcon from '../public/images/forefest-icon.png'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

function EventCard(prop) {
  const {title,description,owner,ownerIcon,location,date,time,price,image,isFav} = prop;
  return (
    <div className='inline-block p-1 my-3 mx-4'>
      <div className='flex flex-row h-52  border-2 border-primaryDark rounded-xl text-white hover:shadow-lg hover:shadow-primary hover:scale-105 hover:duration-100'>

        <div className='w-72 rounded-l-lg relative'>
          <div className='absolute top-2 left-2 h-6 w-6 z-10 hover:scale-110'>{isFav?<AiFillHeart fill='red' size={'24'}/>:<AiOutlineHeart size={'24'}/>}</div>
          <Image src={image} height={'203px'} width={'288px'} className="object-fill align-middle border-none rounded-l-lg"/>
        </div>

        <div className='flex flex-col w-96 px-3 bg-slate-400/30 hover:bg-blend-darken'>

          <div className='text-2xl font-semibold mb-2 mt-1'>{title.substring(0,30)}</div>

          {description!==null?<div className='font-light text-sm mb-1 h-16'>{description.substring(0,150)}</div>:<></>} 
          {/* must be of 150 characters */}

          <div className='flex flex-row justify-between my-2'>
            <div className='flex flex-col'> 
              <span>Fri, 30 Sep, 2022</span>
              <span>{time} IST</span>
            </div>

             <div className='flex flex-row items-center'>
              <div className='my-1 rounded-full w-6 mx-1'><Image src={ownerIcon} width={'24px'} height={'24px'} className='w-full h-full align-middle border-none'/></div>
              <span className='my-auto font-medium'>{owner}</span>
             </div>
          </div>

          <div className='flex flex-row justify-between'>
            <span className='font-medium '>{location===null?"Virtual":location}</span>
            <div className='font-medium'>{(price===null || price===0)?'Free':price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard