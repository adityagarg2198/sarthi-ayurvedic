import logo from "@/assets/images/logo.jpeg";
import { cn } from "@/lib/utils";
import type { FC } from "react";

const Logo: FC<{ className?: string; isLarge?: boolean }> = ({
  className = "",
  isLarge = false,
}) => {
  return (
    <div className="flex items-center gap-1">
      <img
        src={logo}
        alt="logo"
        className={cn("aspect-square object-contain w-20", isLarge && "w-40")}
      />
      <p className={cn("font-bold text-neutral-900 hidden sm:block", className)}>
        Sarthi Ayurvedic Hospital{" "}
        <span className="block font-normal text-neutral-800">& Panchakarma Centre</span>
      </p>
    </div>
  );
};

export default Logo;
