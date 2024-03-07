import clsx from 'clsx';

export const Block = ({ balance, currency }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center p-3 px-6 border rounded-md ',
        {
          'border-rose-900 text-rose-900 bg-rose-300': balance < 0,
          'border-green-900 text-green-900 bg-green-300': balance > 0,
        },
      )}
    >
      <span>{currency}</span>
      <span>{balance}</span>
    </div>
  );
};
