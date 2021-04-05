import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Please input your name with longer than 2 characters')
    .required('This field is required'),
  phoneNumber: yup
    .string()
    .typeError('Please input numbers')
    .matches(
      /^\d{3}[-.]?\d{3}[-.]?\d{4}$/,
      'Please follow the format(예: 012-345-6789)'
    )
    .required('This field is required'),
  email: yup
    .string()
    .email('Please input a valid email')
    .required('This field is required'),
  model: yup.string().required('This field is required'),
  year: yup
    .number()
    .typeError('Please input numbers')
    .required('This field is required'),
  service: yup
    .array()
    .min(1, 'Please select at lease one service')
    .required('Please select at lease one service'),
});
