import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../../actions/index';

export default function EventListItem(props) {
  const {
    id,
    title,
    hostPhotoURL,
    hostedBy,
    description,
    date,
    venue,
    attendees,
  } = props.event;
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(deleteEvent(id));
  };
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title}></Item.Header>
              <Item.Description>Hosted By {hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {date}
          <Icon name='marker' /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{description}</div>
        <Button
          color='red'
          floated='right'
          content='Delete'
          onClick={handleDeleteEvent}
        ></Button>
        <Button
          color='teal'
          floated='right'
          content='View'
          as={Link}
          to={`/events/${id}`}
        ></Button>
      </Segment>
    </Segment.Group>
  );
}
