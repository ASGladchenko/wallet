import { toast } from 'react-toastify';

const getOptions = (options) => (options ? options : { autoClose: 1500 });

const messageShow = () => ({
  info: (message, options) => {
    toast.info(message, getOptions(options));
  },
  success: (message, options) => {
    toast.success(message, getOptions(options));
  },
  warn: (message, options) => {
    toast.warn(message, getOptions(options));
  },
  error: (message, options) => {
    toast.error(message, getOptions(options));
  },
});

export const showMessage = messageShow();
