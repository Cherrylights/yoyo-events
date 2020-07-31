import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../api/sampleData';
// import { v4 as uuid } from 'uuid';

function EventDashboard(props) {
  const [events, setEvents] = useState(sampleData);

  // const handleSubmitEvent = (event) => {
  //   setEvents([
  //     ...events,
  //     {
  //       ...event,
  //       id: uuid(),
  //       hostedBy: 'Bob',
  //       hostPhotoURL: './assets/user.png',
  //       attendees: [],
  //     },
  //   ]);
  // };

  // const handleUpdateEvent = (event) => {
  //   const newEvents = events.map((evt) => {
  //     if (evt.id === event.id) {
  //       return event;
  //     } else {
  //       return evt;
  //     }
  //   });
  //   setEvents(newEvents);
  // };

  const handleDeleteEvent = (eventId) => {
    const newEvents = events.filter((event) => event.id !== eventId);
    setEvents(newEvents);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} handleDeleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}

export default EventDashboard;
