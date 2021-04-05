import React from 'react';
import styled from 'styled-components';
import CheckBox from '../components/CheckBox/CheckBox';
import { useFormik } from 'formik';
import Button from '../components/Button/Button';
import { validationSchema } from '../utils/utils';
import Field from '../components/FormField/Field';
import { motion } from 'framer-motion';

const CheckBoxWrapper = styled.div`
  font-size: 1.3rem;
  margin: 0;
  height: 150px;
  position: relative;
  flex-flow: row wrap;
  display: flex;
  align-items: flex-start;

  h3 {
    font-size: 1rem;
    width: 100%;
    color: #aaa;
    font-weight: 400;
    margin: 0;
  }
  span {
    font-weight: bold;
    color: red;
    font-size: 0.8rem;
    position: absolute;
    bottom: -10px;
    padding: 0 10px;
  }

  label + input {
    margin-left: 20px;
  }
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border: 10px double #aaa;
  margin: 0 auto;
  padding: 70px 50px;
  border-radius: 20px;
  label {
    color: #aaa;
  }
  & > div {
    margin: 0 20px;
    width: 40%;
  }
`;

const defaultService = [
  'Ceramic Pro',
  'Paint Protection Film',
  'Paint Correction',
  'Detailing',
  'Window Tinting',
];

function FormContainer() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      model: '',
      year: '',
      code: '',
      message: '',
      service: [],
    },
    validationSchema,

    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: 50 }}>
      <StyledFieldset>
        <legend style={{ display: 'none' }}>GET A QUOTE</legend>
        <div>
          <Field formik={formik} name="name" label="Your Name*" />
          <Field formik={formik} name="email" label="Your Email*" />
          <Field formik={formik} name="phoneNumber" label="Phone Number*" />
          <Field formik={formik} name="model" label="Make And Model*" />
          <Field formik={formik} name="year" label="Year*" />
        </div>
        <div>
          <Field
            formik={formik}
            name="code"
            label="Postal Code"
            errorMessage={false}
          />
          <Field
            formik={formik}
            name="message"
            label="Message"
            errorMessage={false}
          />
          <CheckBoxWrapper>
            <h3>What services are you interested in? *</h3>
            {defaultService.map((service, idx) => (
              <CheckBox
                key={idx}
                id={service.replace(' ', '')}
                value={service}
                name="service"
                onChange={formik.handleChange}
              >
                {service}
              </CheckBox>
            ))}
            {formik.errors.service && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {formik.errors.service}
              </motion.span>
            )}
          </CheckBoxWrapper>
        </div>
        <Button
          type="submit"
          width="20%"
          height="50px"
          disabled={!(formik.isValid && formik.dirty)}
        >
          전송
        </Button>
      </StyledFieldset>
    </form>
  );
}

export default FormContainer;
