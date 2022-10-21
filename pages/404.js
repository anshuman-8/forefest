import React from 'react'
import Image from 'next/image'
import Cactus404 from '../public/images/cactus404.png'
import Link from 'next/link'

function Index() {
  return (
    <div className='flex bg-bkg h-screen text-white'>
    <div className='max-w-4xl flex flex-col md:flex-row m-auto items-center ' >
        <Image src={Cactus404}/>
        <div className='text-center'>
          <div className='font-semibold text-3xl my-5'>
           <span className='text-5xl'>Oh no!</span> This page doesn't exist.
          </div>
          <div className='text-xl my-5'>
            <span className='text-2xl'>404</span> error Page not found
            </div>
            <Link href={"/"} className="">
              <span className='bg-slate-700 px-3 py-2 rounded-lg hover:underline cursor-pointer hover:bg-slate-800'>
              Back Home
              </span>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Index