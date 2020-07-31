import React, { useState } from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

function NavBar(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '15px' }}
          />
          YoYo Events
        </Menu.Item>
        <Menu.Item name='Events' as={NavLink} to='/events' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event'></Button>
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu handleSignOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}

export default NavBar;
