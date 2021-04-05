import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';

const HeaderWrraper = styled.div`
  background: #202020;
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  box-sizing: border-box;
`;

function HeaderContainer() {
  return (
    <HeaderWrraper>
      <Logo width="200px" height="200px" />
      <Navigation />
    </HeaderWrraper>
  );
}

export default HeaderContainer;
