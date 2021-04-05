import { motion } from 'framer-motion';
import styled from 'styled-components';
import Input from '../Input/Input';

const InputWrapper = styled.div`
  position: relative;
  margin: 80px 0;

  label {
    position: absolute;
    top: 50%;
  }
  span {
    position: absolute;
    color: red;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const Field = ({ formik, name, label, errorMessage = true }) => {
  return (
    <InputWrapper>
      <Input id={name} {...formik.getFieldProps(name)}>
        {label}
      </Input>
      {errorMessage && formik.errors[name] && formik.touched[name] && (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {formik.errors[name]}
        </motion.span>
      )}
    </InputWrapper>
  );
};

export default Field;
