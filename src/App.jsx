import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import HomePage from './views/home/HomePage';
import EventDashboard from './views/events/eventDashboard/EventDashboard';
import EventDetailedPage from './views/events/eventDetailed/EventDetailedPage';
import EventForm from './views/events/eventForm/EventForm';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
