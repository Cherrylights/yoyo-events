import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

function NavBar(props) {
  const { setFormOpen } = props;
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '15px' }}
          />
          YoYo Events
        </Menu.Item>
        <Menu.Item name='Events' />
        <Menu.Item>
          <Button
            positive
            inverted
            content='Create Event'
            onClick={() => {
              setFormOpen(true);
            }}
          ></Button>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login'></Button>
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '0.5em' }}
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
