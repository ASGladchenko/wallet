import { useSelector } from 'react-redux';

import {
  Greeting,
  Container,
  ExchangeRate,
  DetailedBalance,
} from '../../components';
import { useExchangeRates } from '../../hooks';
import { getAuthLogin } from '../../store/auth';
import { getFilledMonth } from '../../store/filled-months';

export const Dashboard = ({}) => {
  const filledMonth = useSelector(getFilledMonth);

  const { data, error, isLoading } = useExchangeRates();
  const login = useSelector(getAuthLogin);

  return (
    <section className="pt-[20px]">
      <Container className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-center w-full gap-3 mb-3 sm:justify-between md:flex-nowrap">
          <Greeting login={login} />

          <div className="flex gap-5">
            <ExchangeRate
              error={error}
              data={data?.usd}
              isLoading={isLoading}
            />

            <ExchangeRate
              error={error}
              data={data?.eur}
              isLoading={isLoading}
            />
          </div>
        </div>

        <DetailedBalance filledMonth={filledMonth} />
      </Container>
    </section>
  );
};
