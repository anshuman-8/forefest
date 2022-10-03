import React from 'react'
import Image from 'next/image'
import EventImage from '../public/images/demo-event.jpeg'
import DemoIcon from '../public/images/forefest-icon.png'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

function EventCard(prop) {
  const {title,description,owner,ownerIcon,location,date,price,isFav} = prop;
  const dateTime=new Date(date);

  function displayCurrentTime(date) {
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const time = hours + ":" + minutes + " " + am_pm;
    return time;
};

  const image=`https://picsum.photos/seed/${title}/300/200`;
  return (
    <div className='inline-block p-1 my-7 mx-5'>
      <div className='flex flex-col sm:flex-row justify-center border-2 w-full border-primaryDark rounded-xl text-white hover:shadow-lg hover:shadow-primary hover:scale-105 hover:duration-100' title={description!==null?description.substring(0,200):title}>


        <div className=' rounded-l-lg relative'>
          <button onClick={console.log("like")} className='absolute p-1 top-2 left-2 h-8 w-8 z-10 bg-slate-500/50 rounded-full shadow-lg hover:scale-110'>{isFav?<AiFillHeart fill='red' size={'26'}/>:<AiOutlineHeart size={'24'}/>}</button>
          <img src={image} height={'200px'} width={'300px'} className="object-cover inset-0 w-full h-full align-middle border-none rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"/>
        </div>

        <div className='flex flex-col min-w-[180px]  px-3 py-2 bg-slate-400/30 hover:bg-blend-darken'>

          <div className='text-2xl h-20 font-semibold mb-2 mt-3'>{title.substring(0,30)}</div>

          {/* {description!==null?<div className='font-light text-sm mb-1 h-16'>{description.substring(0,150)}</div>:<div className='h-10'></div>}  */}
          {/* must be of 150 characters */}
          <div className='flex flex-row items-center'>
              <div className='w-6 mx-1 '><Image src={ownerIcon} width={'24px'} height={'24px'} className='w-full rounded-full h-full align-middle border-none'/></div>
              <span className='my-auto font-medium'>{owner}</span>
          </div>
          <div className=' justify-between my-2'>
            <div className='flex flex-col'> 
              <span>{dateTime.toDateString()}</span>
              <span>{displayCurrentTime(dateTime)} IST</span>
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <span className='font-medium '>{location===null?"Virtual":location}</span>
            <div className='font-medium mx-2'>{(price===null || price===0)?'Free':"Rs. "+price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard