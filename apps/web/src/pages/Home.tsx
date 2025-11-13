import nabh from "@/assets/images/nabh.png";
import Marquee from "@/atoms/Marquee";
import doctors from "@/assets/images/doctors.webp";
import doctor from "@/assets/images/doctor.jpg";
import Stat from "@/atoms/Stat";
import { Button } from "@/components/ui/button";
import massage from "@/assets/images/massage.png";
import type { FC } from "react";

const TreatmentCard: FC<{
  imageSrc: string;
  heading: string;
  subHeading: string;
}> = ({ imageSrc, heading, subHeading }) => {
  return (
    <div className="bg-white text-sarthi-text-secondary items-center rounded-xl flex gap-10 w-fit p-5">
      <img src={imageSrc} alt="" className="w-28 h-28" />
      <div className="flex flex-col gap-3 justify-center items-center max-w-40">
        <h4>{heading}</h4>
        <p className="text-center">{subHeading}</p>
        <Button className="cursor-pointer bg-sarthi-text-secondary text-white font-semibold text-base">
          Visit
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section className="w-full h-full flex flex-col gap-10 text-neutral-600">
      <section className="bg-sarthi-green w-full flex items-center flex-col py-10 text-neutral-900 gap-10">
        <p>YOUR JOURNEY TO WELLNESS BEGINS HERE</p>
        <h1 className="font-semibold text-center max-w-96">
          Trusted Ayurvedic care for a healthier & happier life.
        </h1>
        <div className="flex items-center gap-5">
          <figure>
            <img
              src={nabh}
              className="aspect-square object-contain w-12 md:24"
              alt="Nabh Logo"
            />
          </figure>
          <h2 className="text-4xl font-bold"> NABH ACCREDITED</h2>
        </div>
      </section>
      <section className="w-full flex flex-wrap py-5">
        <Stat count="500" heading="Patients Treated" />
        <Stat count="10" heading="Specialized Treatments" />
        <Stat count="3" heading="Expert Doctors" />
      </section>
      <Marquee
        content={[
          "ALL MAJOR HEALTH INSURANCES",
          "PANELS PROVIDED  -  ESI,  CGHS,  AYUSHMAN BHARAT,  GOVERNMENT EMPLOYEES",
          "NABH ACCREDITED",
        ]}
      />
      <section className="flex flex-col gap-5 items-center p-2">
        <h2 className="text-sarthi-green text-center">STORIES OF RECOVERY</h2>
        <p className="text-sarthi-text-secondary text-center">
          Listen to heartfelt stories from those who’ve healed with us.
        </p>
        <section className="flex items-center justify-center gap-10 flex-wrap">
          <iframe
            className="max-w-96 w-full"
            height="500"
            src="https://www.youtube.com/embed/NcD9jLOgEGI?si=kr-UvANmFNYduq7s"
            title="Patient Review"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            height="500"
            className="max-w-96 w-full"
            src="https://www.youtube.com/embed/VFmxJkkve0A?si=sQSOLx16ESrt8IfC"
            title="Patient Review"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            height="500"
            className="max-w-96 w-full"
            src="https://www.youtube.com/embed/pQgyvkS8BRw?si=SKI9nCNyYF9Q4m45"
            title="Patient Review"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </section>
      <section className="flex flex-col gap-5 p-2">
        <h2 className="text-sarthi-green text-center">ABOUT</h2>
        <section className="flex flex-row gap-5 px-10">
          <section className="flex flex-1 flex-col gap-2 items-start">
            <h4 className="font-bold text-sarthi-text-secondary">
              OUR LEGACY <span className="text-sarthi-green">OF HEALING</span>
            </h4>
            <p className="text-justify">
              Founded with a mission to bring authentic Ayurvedic healing to
              modern life, we combine centuries-old traditions with personalized
              care. Our hospital is a place of trust, comfort, and affordable
              wellness for all.
            </p>
            <h4 className="font-bold text-sarthi-text-secondary">
              We <span className="text-sarthi-green">are -</span>
            </h4>
            <p>Rooted in Tradition</p>
            <p>Focused on Affordability</p>
            <p>Dedicated to Community Wellness</p>
            <Button className="cursor-pointer bg-sarthi-green text-white font-semibold text-base">
              Know more
            </Button>
          </section>
          <section
            className="hidden md:block flex-1 h-[500px]"
            style={{
              backgroundImage: `url(${doctors})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></section>
        </section>
      </section>
      <section className="flex flex-col gap-5 p-2 items-center text-white">
        <h2 className="text-sarthi-green text-center">DOCTORS</h2>
        <h3 className="font-bold text-sarthi-text-secondary text-center">
          MEET OUR <span className="text-sarthi-green">EXPERT DOCTORS</span>
        </h3>
        <section className="flex items-center justify-center gap-10 flex-wrap">
          <section className="flex flex-col gap-5 items-center rounded-2xl bg-sarthi-text-secondary p-5 max-w-96 w-full">
            <img
              src={doctor}
              alt=""
              className="rounded-2xl aspect-square w-full h-96 object-cover"
            />
            <section className="rounded-xl p-2 border w-full border-neutral-600">
              <h4>Dr. Sanjeet Rana</h4>
              <p>Director, MD Panchkarma</p>
            </section>
          </section>
          <section className="flex flex-col gap-5 items-center rounded-2xl bg-sarthi-text-secondary p-5 max-w-96 w-full">
            <img
              src={doctor}
              alt=""
              className="rounded-2xl aspect-square w-full h-96 object-cover"
            />
            <section className="rounded-xl p-2 border w-full border-neutral-600">
              <h4>Dr. Sanjeet Rana</h4>
              <p>Director, MD Panchkarma</p>
            </section>
          </section>
          <section className="flex flex-col gap-5 items-center rounded-2xl bg-sarthi-text-secondary p-5 max-w-96 w-full">
            <img
              src={doctor}
              alt=""
              className="rounded-2xl aspect-square w-full h-96 object-cover"
            />
            <section className="rounded-xl p-2 border w-full border-neutral-600">
              <h4>Dr. Sanjeet Rana</h4>
              <p>Director, MD Panchkarma</p>
            </section>
          </section>
        </section>
      </section>
      <section className="bg-sarthi-green rounded-tl-4xl p-2 py-20 gap-10 flex flex-col items-center rounded-tr-4xl text-sarthi-text-secondary">
        <h2 className="text-center">
          HOLISTIC TREATMENTS FOR COMPLETE CARE
        </h2>
        <p className="text-center">
          We offer a wide range of Ayurvedic therapies designed to restore
          balance, promote healing, and rejuvenate your body.
        </p>
        <Button className="cursor-pointer bg-sarthi-text-secondary text-white font-semibold text-base">
          Browse All Treatments
        </Button>
        <section className="flex gap-10 flex-wrap justify-center">
          <TreatmentCard
            imageSrc={massage}
            heading="PANCHAKARMA THERAPY"
            subHeading="A holistic detox therapy to restore balance and vitality."
          />
          <TreatmentCard
            imageSrc={massage}
            heading="AYURVEDIC MASSAGE"
            subHeading="Relaxing massage with herbal oils for deep healing."
          />
          <TreatmentCard
            imageSrc={massage}
            heading="HERBAL MEDICATION"
            subHeading="Natural remedies prepared from authentic herbs."
          />
          <TreatmentCard
            imageSrc={massage}
            heading="DETOXIFICATION"
            subHeading="Flush out toxins and restore your body’s natural balance."
          />
          <TreatmentCard
            imageSrc={massage}
            heading="YOGA & MEDITATION"
            subHeading="Ancient practices for inner peace and physical health"
          />
        </section>
      </section>
    </section>
  );
};

export default Home;
