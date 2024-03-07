import { exchangeUrls } from '../../constants';
import { setCurrency } from '../currency';

export const getCurrencyThunk =
  ({ setIsLoading, setError, setData }) =>
  async (dispatch) => {
    const { eurUrl, usdUrl } = exchangeUrls;
    try {
      setIsLoading(true);

      const [usdResponse, eurResponse] = await Promise.all([
        fetch(usdUrl).then((response) => response.json()),
        fetch(eurUrl).then((response) => response.json()),
      ]);

      const newData = {
        usd: usdResponse[0],
        eur: eurResponse[0],
      };
      setData(newData);

      dispatch(setCurrency(newData));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
