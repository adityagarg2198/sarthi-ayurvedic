import nabh from "@/assets/images/nabh.png";

const Home = () => {
  return (
    <main className="w-full h-dvh">
      <section className="bg-sarthi-green w-full flex items-center flex-col py-10 text-neutral-900 gap-10">
        <h1 className="text-sm">YOUR JOURNEY TO WELLNESS BEGINS HERE</h1>
        <p className="text-4xl font-semibold text-center w-[400px]">
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
    </main>
  );
};

export default Home;
