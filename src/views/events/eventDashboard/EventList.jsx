import React from 'react';
import EventListItem from './EventListItem';

function EventList({ events, handleViewEvent, handleDeleteEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          handleViewEvent={handleViewEvent}
          handleDeleteEvent={() => {
            handleDeleteEvent(event.id);
          }}
        />
      ))}
    </>
  );
}

export default EventList;
