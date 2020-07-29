import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

function EventForm(props) {
  const { setFormOpen } = props;
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          onClick={() => {
            setFormOpen(false);
          }}
        />
      </Form>
    </Segment>
  );
}

export default EventForm;
