import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0 0;

  input + label {
    margin-left: 5px;
  }
`;

function CheckBox({ id, children, ...restProps }) {
  return (
    <CheckboxWrapper>
      <input
        id={id}
        type="checkbox"
        style={{ width: 20, height: 20 }}
        {...restProps}
      />
      <label htmlFor={id}>{children}</label>
    </CheckboxWrapper>
  );
}

export default CheckBox;
