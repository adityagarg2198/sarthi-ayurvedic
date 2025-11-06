import { type FC, type ReactNode } from "react";

const IconCard: FC<{ icon: ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <section className="flex flex-col flex-1 gap-5 items-center text-sarthi-text-secondary">
      <figure className="w-20">{icon}</figure>
      <h4 className="text-3xl max-w-40 text-center">{text}</h4>
    </section>
  );
};

export default IconCard;
