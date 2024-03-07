import * as Yup from 'yup';

const yupNumber = Yup.number()
  .required('Expenses is required')
  .min(0.01, 'Expenses must be at least 0.01')
  .max(1000000, 'Expenses must not exceed 1 million')
  .test('decimal', 'Only two decimal places are allowed', (value) => {
    if (!value) return true;
    const decimalCount = (value.toString().split('.')[1] || []).length;
    return decimalCount <= 2;
  });

export const validationSchema = Yup.object().shape({
  month: Yup.string().required('Month is required'),
  expenses: yupNumber,
  revenues: yupNumber,
});
