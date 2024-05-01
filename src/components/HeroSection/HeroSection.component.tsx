import { AttentionSeeker, Slide } from 'react-awesome-reveal';
import './HeroSection.css';
import { useState } from 'react';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <main className='hero-section flex px-10 h-fit md:px-20 justify-between w-full mt-10'>
      <section className='flex flex-col justify-start lg:justify-center gap-10'>
        <Slide delay={100}>
          <h1 className='text-6xl mt-8 lg:mt-0  lg:text-8xl text-emerald-500 font-bold drop-shadow-md'>
            Discover the Healing Power of Ayurveda at Sarthi Ayurvedic
          </h1>
        </Slide>
        <AttentionSeeker effect='rubberBand' duration={2000}>
          <button
            className='text-2xl md:text-4xl w-fit px-8 py-4 rounded-2xl bg-emerald-500 font-bold text-white hover:scale-105 transition ease-in-out delay-0'
            onClick={handleClick}>
            Book Appointment
          </button>
        </AttentionSeeker>
        {showModal ? (
          <div className='signup-modal flex flex-col p-10 gap-8'>
            <div className='flex'>
              <h3 className='text-lg md:text-3xl text-white px-5 py-3 w-fit bg-emerald-500 rounded-3xl font-extrabold my-0 mx-auto'>
                Sign Up Now !
              </h3>
              <button onClick={() => setShowModal(false)}>
                <svg
                  className='fill-indigo-500'
                  height='20'
                  width='20'
                  version='1.1'
                  id='Capa_1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 490 490'
                  xmlSpace='preserve'>
                  <polygon
                    points='456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 '
                  />
                </svg>
              </button>
            </div>
            <label htmlFor='name'>
              <input
                type='text'
                name='name'
                className='w-full h-16 px-6 py-2 text-emerald-900 text-3xl border-2 border-indigo-500 rounded-2xl outline-none'
                id='name'
                placeholder='Enter Name'
              />
            </label>
            <label htmlFor='email'>
              <input
                type='email'
                name='email'
                id='name'
                className='w-full h-16 px-6 py-2 text-emerald-900 text-3xl border-2 border-indigo-500 rounded-2xl outline-none'
                placeholder='Enter Email'
              />
            </label>
            <label htmlFor='password'>
              <input
                type='password'
                name='password'
                id='name'
                className='w-full h-16 px-6 py-2 text-emerald-900 text-3xl border-2 border-indigo-500 rounded-2xl outline-none'
                placeholder='Enter Password'
              />
            </label>
            <label htmlFor='cpassword'>
              <input
                type='password'
                name='cpassword'
                id='name'
                className='w-full h-16 px-6 py-2 text-emerald-900 text-3xl border-2 border-indigo-500 rounded-2xl outline-none'
                placeholder='Confirm Password'
              />
            </label>
            <button className='text-xl w-fit px-8 py-4 rounded-2xl bg-emerald-500 font-bold text-white hover:scale-105 transition ease-in-out delay-0'>
              Let's Go
            </button>
          </div>
        ) : null}
      </section>
      <AttentionSeeker
        effect='swing'
        duration={1800}
        className='hero-section-image mix-blend-multiply hidden sm:block'>
        <section className='sm:hidden' />
      </AttentionSeeker>
    </main>
  );
};

export default HeroSection;
