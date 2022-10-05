import React from 'react'

function CategoryTab() {
  return (
    <div className='mt-8 md:flex md:items-center md:justify-between md:space-x-8 mx-5 md:mx-10 mb-3'>
        <div className='flex items-center space-x-4 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap'>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                All
            </a>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                Virtual
            </a>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                In-Person
            </a>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                Meetup
            </a>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                Music
            </a>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                Culture
            </a>
            <a href="/login" className='px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg capitalize'>
                Exibition
            </a>
            
        </div>
    </div>
  )
}

export default CategoryTab