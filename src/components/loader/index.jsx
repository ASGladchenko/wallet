export const Loader = ({}) => {
  return (
    <p className="relative w-8 h-8 rounded-full border-[3px] border-b-transparent  border-accent animate-rotateBigSpinner">
      <span className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full origin-top-left border-[3px] top-1/2 left-1/2 animate-rotateSmallSpinner border-b-transparent border-second"></span>
    </p>
  );
};
