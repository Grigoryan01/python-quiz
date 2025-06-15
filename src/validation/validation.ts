import * as yup from 'yup';

export const validationschema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(80, 'First name must be at most 80 characters')
    .matches(/^[A-Za-z\s'-]+$/, 'First name must contain only letters'),

  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(80, 'Last name must be at most 80 characters')
    .matches(/^[A-Za-z\s'-]+$/, 'Last name must contain only letters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Email must be a valid email address')
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Email must contain "@" and a valid domain'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)'),
});

export type SignInFormData = yup.InferType<typeof validationschema>;
