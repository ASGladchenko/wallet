import { Form, Formik } from 'formik';

import { Button, InputField, SelectField } from '..';

import { getStyles } from './style';
import { validationSchema } from './config';

export const FormMonthlyFinancials = ({ options, initialState, onSubmit }) => {
  const { wrapper, title, fieldContainer } = getStyles();

  return (
    <Formik
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={true}
      validateOnMount={false}
      initialValues={initialState}
      validationSchema={validationSchema}
    >
      <Form className={wrapper}>
        <h1 className={title}>Set expenses for the month</h1>

        <div className={fieldContainer}>
          <SelectField
            name="month"
            options={options}
            label="Choose a month"
            placeholder="choose month"
            className="order-3 md:-order-1"
          />

          <InputField
            type="number"
            name="revenues"
            label="Your revenues"
            placeholder="revenues UAH"
          />

          <InputField
            type="number"
            name="expenses"
            label="Your expenses"
            placeholder="expenses UAH"
          />
        </div>
        <Button text="Added" type="submit" className="max-w-[30%] self-end" />
      </Form>
    </Formik>
  );
};
