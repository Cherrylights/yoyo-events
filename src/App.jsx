import React, { useState } from 'react';
import NavBar from './components/nav/NavBar';
import EventDashboard from './views/events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewEvent = (event) => {
    setFormOpen(true);
    setSelectedEvent(event);
  };

  const handleCreateFormOpen = () => {
    setFormOpen(true);
    setSelectedEvent(null);
  };
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          handleViewEvent={handleViewEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
