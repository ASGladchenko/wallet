import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);

export default App;
