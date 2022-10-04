import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import ForefestTitle from '../public/images/forefest-title.png';
import Link from 'next/link';

function login() {
  return (
    <div className='bg-secondary h-screen w-full relative p-2'>
      <div className='max-w-xl min-w-fit mx-auto mt-24 py-10 flex flex-col bg-slate-300/40 z-10 shadow-xl rounded-lg items-center'>
        <a href='/' className='mx-3 my-auto text-primary '><Image src={ForefestTitle} height="55" width='210'></Image></a>

        <h1 className='text-3xl my-5 font-bold text-white'>Login</h1>

        <div className='my-3 mx-3'>
          <div className='text-white mx-2 '>Email</div>
          <input className=' border-2 border-primaryDark rounded-xl px-3 py-2' name='email' placeholder='Email' type='email'/>
        </div>

        <div className='my-3 mx-3'>
        <div className='text-white mx-2 '>Password</div>
          <input className=' border-2 border-primaryDark rounded-xl px-3 py-2' name='passowrd' placeholder='Password' type='password'/>
        </div>
        <button onClick={()=>alert("Nope!,We are not gonna help 👿")} className='text-blue-500 my-1'>Forgot password?</button>
        <div className='my-3 mx-10 text-white '>New to Forefest? <Link href="/signup"><span className='text-blue-500 hover:underline cursor-pointer'>Signup</span></Link></div>

        <button className='text-white px-5 py-3 my-2 bg-slate-600 font-semibold text-lg hover:bg-slate-800 active:scale-95 rounded-lg'>Login</button>
      </div>
    </div>
  )
}

export default login