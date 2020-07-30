import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem(props) {
  const {
    title,
    hostPhotoURL,
    hostedBy,
    description,
    date,
    venue,
    attendees,
  } = props.event;
  const { event, handleViewEvent, handleDeleteEvent } = props;
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
          content='delete'
          onClick={handleDeleteEvent}
        ></Button>
        <Button
          color='teal'
          floated='right'
          content='view'
          onClick={() => {
            handleViewEvent(event);
          }}
        ></Button>
      </Segment>
    </Segment.Group>
  );
}
