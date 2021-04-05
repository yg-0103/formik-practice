import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../Link/NavigationLink';

const NavigationWrraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

function Navigation() {
  return (
    <NavigationWrraper>
      <NavigationLink>Home</NavigationLink>
      <NavigationLink>Services</NavigationLink>
      <NavigationLink>About</NavigationLink>
      <NavigationLink>Get A Quote</NavigationLink>
      <NavigationLink>Contact Us</NavigationLink>
    </NavigationWrraper>
  );
}

export default Navigation;
