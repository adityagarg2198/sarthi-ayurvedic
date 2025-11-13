import { type FC, type ReactNode } from "react";

const IconCard: FC<{ icon: ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <section className="flex w-full max-w-96 flex-col flex-1 gap-5 items-center text-sarthi-text-secondary">
      <figure className="w-20">{icon}</figure>
      <h4 className="text-center">{text}</h4>
    </section>
  );
};

export default IconCard;
