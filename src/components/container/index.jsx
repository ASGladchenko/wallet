import clsx from 'clsx';

export const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'px-4 min-[1600px]:max-w-[1460px]  min-[1600px]:mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};
