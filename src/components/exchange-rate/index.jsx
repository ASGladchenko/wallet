import { Loader } from '../';

export const ExchangeRate = ({ isLoading, error, data }) => {
  return (
    <div className="flex items-center justify-center text-xl w-[120px] cursor-default text-zinc-300 font-kode">
      {isLoading && <Loader />}
      {error && <span className="text-lg text-rose-900">error</span>}
      {!isLoading && !error && `${data?.cc} ${data?.rate.toFixed(2)}`}
    </div>
  );
};
