import Slide1 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.17.jpeg';

const DrSanjeetRana = () => {
  return (
    <section className='w-full flex gap-8 h-full py-8 px-16'>
      <figure className='rounded-full flex-1 dr-image-wrapper'>
        <img src={Slide1} alt='' className='dr-image rounded-full' />
      </figure>
      <div className='flex flex-col gap-4 flex-1 dr-content'>
        <h1 className='text-3xl text-emerald-500'>Dr. Sanjeet Singh Rana</h1>
        <p className='text-emerald-950 text-xl text-justify'>
          Warmly welcome! I am Dr. Sanjeet Singh Rana, a highly-qualified M.D
          Panchkarma with over 15 years of clinical experience. I am passionate
          about providing my patients with comprehensive, compassionate, and
          personalized care tailored to their individual needs.
        </p>
        <h2 className='text-3xl text-emerald-500'>My Practice:</h2>
        <div className='flex flex-col gap-2'>
          <p className='text-emerald-950 text-xl text-justify'>
            10 year academic & clinical experience at M.L.R. ayurvedic college
            and working as HOD and Associate Professor in panchkarma department
            since 21 st April 2014.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            Doing duty as Superintendent of exam 3 times in university exams.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            Doing duty as Deputy superintendent of exam in university exams.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            Representative of NCISM from our college in heal by india.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            Doing duty as exam observer in university exams.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            3 book already wrote on panchkarma.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            Attended 3 cme at Jaipur,Raipur and Kerala.
          </p>
          <p className='text-emerald-950 text-xl text-justify'>
            Attended so many national and international seminar.
          </p>
        </div>
        <h2 className='text-3xl text-emerald-500'>My Expertise:</h2>
        <p className='text-emerald-950 text-xl text-justify'>
          For over 15 years, I have specialized in Panchakarma, a traditional
          Ayurvedic treatment modality. My practice focuses on addressing a
          range of skin conditions, including psoriasis and fungal infections.
          Additionally, I have extensive experience in treating musculoskeletal
          disorders such as disc prolapse, sciatica, lumbar spondylosis,
          cervical spondylosis, and avascular necrosis (AVN). I am well-versed
          in applying various Kerelan Panchakarma therapies to promote healing
          and well-being.
        </p>
        <h2 className='text-3xl text-emerald-500'>My Qualifications:</h2>
        <div className='flex flex-col gap-4'>
          <p className='text-emerald-950 text-xl'>
            <span className='text-emerald-500 text-xl'>
              Perceiving Ph.D. in Panchkarma:
            </span>{' '}
            Currently pursuing a doctoral degree in Panchkarma, advancing the
            field of Ayurveda.
          </p>
          <p className='text-emerald-950 text-xl'>
            <span className='text-emerald-500 text-xl'>
              M.D. in Panchkarma (2013):
            </span>{' '}
            Master's degree in Panchakarma from the prestigious Rajiv Gandhi
            University of Health Sciences, Bangalore.
          </p>
          <p className='text-emerald-950 text-xl'>
            <span className='text-emerald-500 text-xl'>P.G.C.C.H:</span>{' '}
            Achieved a Post Graduate Certificate Course in Child Health
            (P.G.C.C.H.) with a stellar A grade from the Royal Institute,
            Mumbai.
          </p>
          <p className='text-emerald-950 text-xl'>
            <span className='text-emerald-500 text-xl'>B.A.M.S. (2010):</span>{' '}
            Bachelor of Ayurveda, Medicine and Surgery from the esteemed Rajiv
            Gandhi University of Health Sciences, Bangalore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrSanjeetRana;
