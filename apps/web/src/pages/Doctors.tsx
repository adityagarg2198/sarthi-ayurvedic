import doctorImg from "@/assets/images/doctor.jpg";

const Doctors = () => {
  return (
    <section className="w-full h-full p-10 mb-10 text-neutral-600">
      <h3 className="text-4xl text-center text-sarthi-text-secondary">
        Meet Our <span className="text-sarthi-green">Expert Doctor</span>
      </h3>
      <section className="w-full h-full text-lg flex gap-20 mx-auto mt-10 max-w-5xl font-normal">
        <img
          style={{
            borderTopLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          className="aspect-square w-96 object-cover max-h-[400px] border-x-sarthi-green border-x-8"
          src={doctorImg}
          alt=""
        />
        <section className="flex gap-5 flex-col">
          <section>
            <h6 className="text-neutral-950 font-black">
              Prof. Dr. Sanjeet Rana
            </h6>
            <p>BAMS, MD (Panchakarma)</p>
            <p>Director, Sarthi Ayurvedic Hospital</p>
            <p>Professor – Department of Panchakarma </p>
            <p>Ayurveda Physician | 15+ Years of Clinical Experience</p>
          </section>
          <p>
            Prof. Dr. Sanjeet Rana is a distinguished Ayurvedic physician,
            academician, and clinical leader with over 15 years of experience in
            Panchakarma— the classical science of Ayurvedic detoxification and
            rejuvenation. Holding a Bachelor of Ayurvedic Medicine and Surgery
            (BAMS) and an MD in Panchakarma, he integrates ancient therapeutic
            wisdom with modern clinical practice.
          </p>
          <p>
            As the Director of Sarthi Ayurvedic Hospital and Professor in the
            Department of Panchakarma, he has led efforts in advancing
            personalized Ayurvedic treatments, holistic wellness, and academic
            excellence. His areas of expertise include Panchakarma therapies,
            chronic lifestyle disorders, Ayurvedic diagnostics, and integrative
            healing. He is widely respected for his mentorship and contributions
            to Ayurvedic education and patient care.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Doctors;
