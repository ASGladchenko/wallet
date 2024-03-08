import { useSelector } from 'react-redux';

import {
  Summary,
  Greeting,
  Container,
  ExchangeRate,
  DetailedBalance,
} from '@/components';
import { useExchangeRates } from '@/hooks';
import { getAuthLogin } from '@/store/auth';
import { getFilledMonth } from '@/store/filled-months';

import { getStyles } from './style';

export const Dashboard = ({}) => {
  const filledMonth = useSelector(getFilledMonth);

  const { data, error, isLoading } = useExchangeRates();
  const login = useSelector(getAuthLogin);

  const { wrapper } = getStyles();

  return (
    <section className="pt-[20px]">
      <Container className="flex flex-col gap-5">
        <div className={wrapper}>
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

        <Summary
          usd={data?.usd?.rate}
          eur={data?.eur?.rate}
          filledMonth={filledMonth}
        />

        <DetailedBalance filledMonth={filledMonth} />
      </Container>
    </section>
  );
};
