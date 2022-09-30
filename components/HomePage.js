import React from 'react'
import Navbar from './Navbar'
import EventCard from './EventCard'
import EventsDisplay from './EventsDisplay'

function HomePage() {
  return (
    <div className='container mx-auto scroll-smooth'>
      <Navbar/>
      <EventsDisplay/>
    </div>
  )
}

export default HomePage