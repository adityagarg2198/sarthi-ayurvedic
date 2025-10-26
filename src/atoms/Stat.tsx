import  { type FC } from "react";

const Stat: FC<{ count: string; heading: string }> = ({ count, heading }) => {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <h2 className="text-5xl font-bold text-center">{count}+</h2>
      <p className="text-lg font-semibold text-neutral-400 text-center">{heading}</p>
    </div>
  );
};

export default Stat;
