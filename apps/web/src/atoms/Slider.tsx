import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { FC, ReactNode } from "react";

const Slider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Carousel
      className="mx-auto"
      plugins={[
        Autoplay({
          delay: 4000,
          playOnInit: true,

        }),
      ]}
      opts={{
        loop: true,

      }}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="cursor-pointer hover:bg-sarthi-green" />
      <CarouselNext className="cursor-pointer hover:bg-sarthi-green" />
    </Carousel>
  );
};

export default Slider;
