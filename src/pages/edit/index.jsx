import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from '../../constants';
import { ErrorPage } from '../error-page';
import { allMonths, initialStateEditCreate } from '../../config';
import { Container, FormMonthlyFinancials } from '../../components';
import { editMonth, getFilledMonth } from '../../store/filled-months';

export const EditPage = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { month: activeMonth } = useParams();

  const filledMonth = useSelector(getFilledMonth);

  const options = allMonths.filter(
    ({ name }) => name.toLocaleLowerCase() === activeMonth,
  );

  if (options.length === 0 || filledMonth.length === 0) {
    return <ErrorPage />;
  }

  const initial = filledMonth.find(
    ({ month }) => month.toLowerCase() === activeMonth,
  );

  const onSubmit = (values) => {
    dispatch(editMonth(values));
    navigate(routes.dashboard.index);
  };

  return (
    <section className="py-10">
      <Container>
        <FormMonthlyFinancials
          options={options}
          onSubmit={onSubmit}
          initialState={initialStateEditCreate(initial)}
        />
      </Container>
    </section>
  );
};
