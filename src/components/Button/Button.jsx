import { motion } from 'framer-motion';
import { darken, lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  width: ${props => props.width};
  height: ${props => props.height};
  color: #fff;
  background: lightgray;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background: ${lighten(0.1, 'gray')};
  }

  &:active {
    background: ${darken(0.1, 'gray')};
  }
`;

function Button({ type, children, ...restProps }) {
  return (
    <StyledButton type={type} {...restProps}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
};
export default Button;
