import Cookies from 'js-cookie';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { routes } from '@/constants';
import { setAuthLogin } from '@/store/auth';

import { InputField, Button, showMessage } from '..';

import { getStyles } from './style';
import { initialState, validationSchema } from './config';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { wrapper, form, title } = getStyles();

  const onSubmit = (values) => {
    const isAuth = values.login === 'root' && values.password === '1234567890';

    if (!isAuth) {
      showMessage.error('Access denied');
      return;
    }

    Cookies.set('TOKEN', true);
    dispatch(setAuthLogin(values.login));
    localStorage.setItem('login', values.login);
    navigate(routes.dashboard.index);
  };

  return (
    <div className={wrapper}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        <Form className={form}>
          <h1 className={title}>Sing in</h1>

          <InputField
            name="login"
            placeholder="Enter your login"
            label="Login"
          />

          <InputField
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button text="Enter" type="submit" className="max-w-[50%] self-end" />
        </Form>
      </Formik>
    </div>
  );
};
