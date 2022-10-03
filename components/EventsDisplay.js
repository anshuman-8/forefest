import React from 'react'
import EventCard from './EventCard'
import DummyData from './dummyevent.json';

function EventsDisplay() {
  return (
    <div id='events'>
        <div className='grid grid-cols-2 lg:grid-cols-3  mx-5'>
            {DummyData.map((event) => (
                <EventCard
                    key={event.id.$oid}
                    title={event.title}
                    description={event.description}
                    owner={event.owner}
                    ownerIcon={event.ownerIcon}
                    location={event.location}
                    date={event.date}
                    // time={event.time}
                    price={event.price}
                    image={event.image}
                    isFav={event.isFav}
                />
            ))}
        </div>
    </div>
  )
}

export default EventsDisplay