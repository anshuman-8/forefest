import React from 'react'
import Navbar from './Navbar'
import CategoryTab from './CategoryTab'
import EventsDisplay from './EventsDisplay'


function HomePage() {
  return (
    <div className='container mx-auto scroll-smooth'>
      <Navbar/>
      <CategoryTab/>
      <EventsDisplay/>
    </div>
  )
}

export default HomePage