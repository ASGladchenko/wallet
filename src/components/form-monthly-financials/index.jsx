import { Form, Formik } from 'formik';

import { Button, SelectField, InputField } from '../';

import { initialState, options, validationSchema } from './config';

export const FormMonthlyFinancials = ({}) => {
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={true}
      validateOnMount={false}
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col w-full gap-5 px-2 py-3 pb-5 rounded bg-zinc-300">
        <h1 className="text-center text-md md:text-xl xl:text-2xl font-kode text-zinc-900">
          Set expenses for the month
        </h1>
        <div className="flex items-start justify-between gap-2">
          <SelectField
            name="month"
            placeholder="choose month"
            options={options}
          />
          <InputField
            name="expenses"
            className="max-w-[35%]"
            type="number"
            placeholder="expenses UAH"
          />
          <InputField
            name="revenues"
            className="max-w-[35%]"
            type="number"
            placeholder="revenues UAH"
          />
        </div>
        <Button text="Added" type="submit" className="max-w-[30%] self-end" />
      </Form>
    </Formik>
  );
};
