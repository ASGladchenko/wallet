import { Field } from 'formik';

import { Input } from '../input';

export const InputField = ({ name, type, ...rest }) => {
  return (
    <Field name={name}>
      {({ meta, form, field: { value } }) => {
        const error = meta.touched && meta.error ? meta.error : undefined;

        const change = async (newValue) => {
          await form.setFieldValue(name, newValue);
          form.setFieldTouched(name);
        };
        return (
          <Input
            {...rest}
            value={value}
            onChange={change}
            error={error}
            type={type}
          />
        );
      }}
    </Field>
  );
};
