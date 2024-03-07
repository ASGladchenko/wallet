import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);

export default App;
