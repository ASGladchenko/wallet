export const InfoBlock = ({ list, title }) => {
  return (
    <ul className="px-5 py-3 rounded-md bg-zinc-300 text-zinc-700 font-kode">
      <h3 className="mb-5 text-3xl text-center font-bolder">{title}</h3>
      {list.map((point, idx) => (
        <li key={`instruction-${idx}`} className="text-xs sm:text-base">
          <span className="pr-2">{idx + 1}.</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
};
