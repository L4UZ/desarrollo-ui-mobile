import { object, string, ref } from 'yup';

export const signUpSchema = object().shape({
  email: string().email('You must enter a valid email address').required('Email is required'),
  password: string().required('Password is required').min(4).max(16),
  passwordConfirmation: string()
    .required('Password confirmation is required')
    .oneOf([ref('password'), null], 'Passwords must match'),
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
});

export const signInSchema = object().shape({
  email: string().email('You must enter a valid email address').required('Email is required'),
  password: string().min(4).required('Password is required'),
});
