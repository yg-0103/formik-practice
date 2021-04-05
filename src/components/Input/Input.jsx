import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled(motion.input)`
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: 1.3rem;
  border: none;
  border-bottom: 2px solid #aaa;
  padding: 0 0 0 15px;
  outline: none;
`;

function Input({ type, id, children, ...restProps }) {
  const [isFocus, setFocus] = useState(false);

  return (
    <>
      <StyledInput
        id={id}
        type={type}
        onFocus={() => setFocus(true)}
        {...restProps}
      />

      <motion.label
        initial={{ x: 10, y: -10 }}
        animate={isFocus ? { y: -50 } : null}
        htmlFor={id}
      >
        {children}
      </motion.label>
    </>
  );
}

Input.defaultProps = {
  type: 'text',
  width: '100%',
  height: '50px',
};
export default React.memo(Input);
