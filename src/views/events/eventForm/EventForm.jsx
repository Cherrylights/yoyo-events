import React, { useState, useEffect } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function EventForm(props) {
  const {
    setFormOpen,
    handleSubmitEvent,
    handleUpdateEvent,
    selectedEvent,
  } = props;
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    category: '',
    description: '',
    city: '',
    venue: '',
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (selectedEvent) {
      setEventData(selectedEvent);
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
  }, [selectedEvent]);

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Event' : 'Create new event'} />
      <Form
        onSubmit={() => {
          if (selectedEvent) {
            handleUpdateEvent({ ...selectedEvent, ...eventData });
          } else {
            handleSubmitEvent(eventData);
          }
          setFormOpen(false);
        }}
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
