import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  month: Yup.string().required('Month is required'),
  expenses: Yup.number()
    .required('Expenses is required')
    .min(0.01, 'Expenses must be at least 0.01')
    .max(1000000, 'Expenses must not exceed 1 million'),
  revenues: Yup.number()
    .required('Revenues is required')
    .min(0.01, 'Revenues must be at least 0.01')
    .max(1000000, 'Revenues must not exceed 1 million'),
});
