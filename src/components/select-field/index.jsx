import { Field } from 'formik';
import { Select } from '../select';
import { someFinance } from '../form-monthly-financials/config';

export const SelectField = ({ name, ...rest }) => {
  return (
    <Field name={name}>
      {({ meta, form, field: { value, ...fieldProps } }) => {
        const error = meta.touched && meta.error ? meta.error : undefined;

        const change = async (newValue) => {
          const elseField = someFinance.find(
            ({ month }) => month === newValue.name,
          );
          await form.setFieldValue(name, newValue.name);
          await form.setFieldTouched(name);

          if (elseField) {
            await form.setFieldValue('expenses', elseField.expenses);
            await form.setFieldValue('revenues', elseField.revenues);
          } else {
            await form.setFieldValue('expenses', '');
            await form.setFieldValue('revenues', '');
            await form.setFieldTouched('expenses', false);
            await form.setFieldTouched('revenues', false);
          }
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
