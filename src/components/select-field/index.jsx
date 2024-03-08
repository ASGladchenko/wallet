import { Field } from 'formik';

import { Select } from '..';

export const SelectField = ({ name, selected, ...rest }) => {
  return (
    <Field name={name}>
      {({ meta, form, field: { value } }) => {
        const error = meta.touched && meta.error ? meta.error : undefined;

        const change = async (newValue) => {
          await form.setFieldValue(name, newValue.name);
          await form.setFieldTouched(name);
        };

        return (
          <Select
            {...rest}
            error={error}
            onChange={change}
            value={value || ''}
          />
        );
      }}
    </Field>
  );
};
