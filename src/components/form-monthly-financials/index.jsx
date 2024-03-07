import { Form, Formik } from 'formik';

import { Button, SelectField, InputField } from '../';

import { validationSchema } from './config';

export const FormMonthlyFinancials = ({ options, initialState, onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={true}
      validateOnMount={false}
      initialValues={initialState}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col w-full gap-5 px-2 py-5 rounded bg-zinc-300">
        <h1 className="text-center text-md md:text-xl xl:text-2xl font-kode text-zinc-900">
          Set expenses for the month
        </h1>
        <div className="flex items-start justify-between gap-2">
          <SelectField
            name="month"
            options={options}
            placeholder="choose month"
          />
          <InputField
            type="number"
            name="revenues"
            className="max-w-[35%]"
            placeholder="revenues UAH"
          />

          <InputField
            type="number"
            name="expenses"
            className="max-w-[35%]"
            placeholder="expenses UAH"
          />
        </div>
        <Button text="Added" type="submit" className="max-w-[30%] self-end" />
      </Form>
    </Formik>
  );
};
