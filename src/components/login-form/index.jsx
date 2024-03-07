import Cookies from 'js-cookie';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../constants';
import { setAuthLogin } from '../../store/auth';
import { InputField, Button, showMessage } from '../';

import { initialState, validationSchema } from './config';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className="w-full max-w-[80%] lg:max-w-[50%] xl:max-w-[40%]">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-5 p-7 bg-zinc-300">
          <h1 className="text-[48px] font-kode text-center font-extrabold w-full">
            Sing in
          </h1>
          <InputField name="login" placeholder="Enter your login" />
          <InputField
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button text="Enter" type="submit" className="max-w-[50%] self-end" />
        </Form>
      </Formik>
    </div>
  );
};
