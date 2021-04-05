import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import HomeLink from '../Link/HomeLink';

const LogoHeading = styled.h1`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }
`;

function Logo({ width, height }) {
  return (
    <div>
      <LogoHeading width={width} height={height}>
        <HomeLink to="/">
          <motion.img
            src="http://lvps.ca/wp-content/uploads/2020/07/white_logo_3x.png"
            alt="LVPS-Logo"
            initial={{ opacity: 0, x: -300 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            }}
          />
        </HomeLink>
      </LogoHeading>
    </div>
  );
}

export default Logo;
