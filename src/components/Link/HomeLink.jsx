import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

function HomeLink({ to, children, ...restProps }) {
  return (
    <StyledLink to={to} {...restProps}>
      {children}
    </StyledLink>
  );
}

HomeLink.defaultProps = {
  to: '/',
};
export default HomeLink;
