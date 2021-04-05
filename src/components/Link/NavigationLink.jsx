import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(motion(NavLink))`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 10px;
  color: #fff;
  & + & {
    margin-left: 100px;
  }
`;

function NavigationLink({ to, children, ...restProps }) {
  return (
    <StyledNavLink
      to={to}
      {...restProps}
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
      whileHover={{
        textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
        scale: 1.2,
      }}
    >
      {children}
    </StyledNavLink>
  );
}

NavigationLink.defaultProps = {
  to: '/',
};

export default NavigationLink;
