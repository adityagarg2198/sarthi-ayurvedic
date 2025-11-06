import Slider from "@/atoms/Slider";
import { CarouselItem } from "@/components/ui/carousel";
import slide1 from "@/assets/images/slide1.webp";
import slide2 from "@/assets/images/slide2.webp";
import IconCard from "@/atoms/IconCard";
import massage from "@/assets/images/massage.png";

const About = () => {
  return (
    <section className="w-full h-full">
      <section className="bg-sarthi-green w-full flex items-center text-center flex-col py-40 text-sarthi-text-secondary gap-6">
        <p className="text-lg">Get to know about Sarthi Ayurvedic Hospital</p>
        <h2 className="text-3xl max-w-lg">
          <strong>
            We are dedicated to restoring health through the wisdom of Ayurveda.
          </strong>
        </h2>
        <p className="text-lg max-w-3xl">
          For centuries, Ayurveda has been guiding people toward balance,
          vitality, and holistic well-being. At Sarthi Ayurvedic Hospital &
          Panchkarma Centre, we blend authentic Ayurvedic treatments with
          compassionate care to heal the root cause of illness. Our mission is
          simple — to help you live a healthier, more harmonious life,
          naturally.
        </p>
      </section>
      <Slider>
        <CarouselItem className="w-full">
          <div
            className="h-[600px] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${slide1})` }}
          ></div>
        </CarouselItem>
        <CarouselItem className="w-full">
          <div
            className="h-[600px] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${slide2})` }}
          ></div>
        </CarouselItem>
      </Slider>
      <section className="w-full text-center flex flex-col gap-20 text-sarthi-text-secondary py-8 px-2">
        <h1 className="text-5xl">
          Our Healing <span className="text-sarthi-green">Impact</span>
        </h1>
        <section className="flex gap-4">
          <IconCard
            icon={<img src={massage} loading="lazy" />}
            text="Therapeutic Massage"
          />
          <IconCard
            icon={<img src={massage} loading="lazy" />}
            text="Herbal Remedies"
          />
          <IconCard
            icon={<img src={massage} loading="lazy" />}
            text="Meditation & Wellness"
          />
        </section>
      </section>
    </section>
  );
};

export default About;
