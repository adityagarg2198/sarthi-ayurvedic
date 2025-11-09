import nabh from "@/assets/images/nabh.png";
import Marquee from "@/atoms/Marquee";
import Stat from "@/atoms/Stat";

const Home = () => {
  return (
    <section className="w-full h-full">
      <section className="bg-sarthi-green w-full flex items-center flex-col py-10 text-neutral-900 gap-10">
        <h1 className="text-sm">YOUR JOURNEY TO WELLNESS BEGINS HERE</h1>
        <p className="text-4xl font-semibold text-center max-w-96">
          Trusted Ayurvedic care for a healthier & happier life.
        </p>
        <div className="flex items-center gap-5">
          <figure>
            <img
              src={nabh}
              className="aspect-square object-contain w-24"
              alt="Nabh Logo"
            />
          </figure>
          <p className="text-4xl font-bold"> NABH ACCREDITED</p>
        </div>
      </section>
      <section className="w-full flex items-center py-15">
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
    </section>
  );
};

export default Home;
