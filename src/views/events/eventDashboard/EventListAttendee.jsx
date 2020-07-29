import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function EventListAttendee(props) {
  const { photoURL } = props.attendee;
  return (
    <List.Item>
      <Image size='mini' circular src={photoURL}></Image>
    </List.Item>
  );
}
