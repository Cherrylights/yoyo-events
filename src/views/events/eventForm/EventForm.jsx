import React, { useState, useEffect } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createEvent } from '../../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useHistory, useLocation } from 'react-router-dom';
import { updateEvent } from '../../../actions/index';

function EventForm(props) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    category: '',
    description: '',
    city: '',
    venue: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = props.match.params;
  const events = useSelector((state) => state.events);

  useEffect(() => {
    if (location.pathname !== '/createEvent') {
      const event = events.find((event) => event.id === params.id);
      setEventData(event);
    } else {
      setEventData({
        title: '',
        date: '',
        category: '',
        description: '',
        city: '',
        venue: '',
      });
    }
  }, [location.pathname, params.id, events]);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmitEvent = () => {
    dispatch(
      createEvent({
        id: uuid(),
        ...eventData,
        hostedBy: 'Bob',
        hostPhotoURL: './assets/user.png',
        attendees: [],
      })
    );
    history.push('/events');
  };

  const handleUpdateEvent = () => {
    dispatch(updateEvent(eventData));
    history.push(`/events/${eventData.id}`);
  };

  return (
    <Segment clearing>
      <Header
        content={
          location.pathname === '/createEvent'
            ? 'Create new event'
            : 'Update event'
        }
      />
      <Form
        onSubmit={
          location.pathname === '/createEvent'
            ? handleSubmitEvent
            : handleUpdateEvent
        }
      >
        <Form.Field>
          <input
            type='text'
            name='title'
            value={eventData.title}
            placeholder='Event title'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='category'
            value={eventData.category}
            placeholder='Category'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='description'
            value={eventData.description}
            placeholder='Description'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='city'
            value={eventData.city}
            placeholder='City'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='venue'
            value={eventData.venue}
            placeholder='Venue'
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            name='date'
            value={eventData.date}
            placeholder='Date'
            onChange={handleChange}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button floated='right' content='Cancel' as={Link} to='/events' />
      </Form>
    </Segment>
  );
}

export default EventForm;
