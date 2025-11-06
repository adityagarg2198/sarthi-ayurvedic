import { type FC } from "react";

const Marquee: FC<{ content: string[] }> = ({ content }) => {
  const items = [...content, ...content];

  return (
    <div className="bg-sarthi-green w-full overflow-hidden text-neutral-900 relative py-8 whitespace-nowrap text-2xl font-bold">
      <div
        className="inline-flex gap-20"
        style={{
          animation: "marqueeScroll 15s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <p key={`${item}-${i}`} className="inline-block">
            ● {item}
          </p>
        ))}
      </div>

      <style>
        {`
            @keyframes marqueeScroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}
      </style>
    </div>
  );
};

export default Marquee;
