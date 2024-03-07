import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from '../../constants';
import { allMonths, initialStateEditCreate } from '../../config';
import { Container, FormMonthlyFinancials } from '../../components';
import { addedNewMonth, getFilledMonth } from '../../store/filled-months';

import { filterMonth } from './helpers';

export const CreatePage = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filledMonths = useSelector(getFilledMonth);

  const options = filterMonth(filledMonths, allMonths);

  const onSubmit = (values) => {
    dispatch(addedNewMonth(values));
    navigate(routes.dashboard.index);
  };

  return (
    <section className="py-10">
      <Container>
        <FormMonthlyFinancials
          options={options}
          onSubmit={onSubmit}
          initialState={initialStateEditCreate({})}
        />
      </Container>
    </section>
  );
};
