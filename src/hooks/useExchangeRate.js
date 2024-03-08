import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrencyThunk } from '@/store/thunks';

export const useExchangeRates = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(getCurrencyThunk({ setData, setIsLoading, setError }));
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};
