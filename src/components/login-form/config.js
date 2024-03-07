import * as Yup from 'yup';

export const initialState = {
  login: '',
  password: '',
};

const required = 'Field is required';

export const validationSchema = Yup.object().shape({
  login: Yup.string().required(required),
  password: Yup.string()
    .trim()
    .required(required)
    .min(4, 'Minimum characters 4')
    .max(16, 'Minimum characters 16'),
});
