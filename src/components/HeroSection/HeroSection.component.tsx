import { Swiper, SwiperSlide } from 'swiper/react';
import emailjs from '@emailjs/browser';
import Slide1 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.17.jpeg';
import Slide2 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.20.jpeg';
import Slide3 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.21.jpeg';
import Slide4 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.24 PM.jpeg';
import Slide5 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.25 (2).jpeg';
import Slide6 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.25 PM (1).jpeg';
import Slide7 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.25 PM.jpeg';
import Slide8 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.26 PM (1).jpeg';
import Slide9 from '../../assets/images/WhatsApp Image 2024-04-28 at 12.17.26 PM.jpeg';
import { Pagination, Autoplay } from 'swiper/modules';
import './HeroSection.css';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Alert, Snackbar } from '@mui/material';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const handleClick = () => {
    setShowModal(true);
  };

  const handleButtonClick = async () => {
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: name,
          mobile: mobile,
          to_name: 'Sarthi Ayurvedic',
          message: message,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );
      if (res.status === 200) {
        setAlert(true);
        setShowModal(false);
      }
    } catch {
      //
    }
  };

  return (
    <main className='hero-section flex px-10 md:px-20 justify-between w-full mt-10'>
      <section className='flex flex-col justify-start lg:justify-center gap-10'>
        <h1 className='text-5xl mt-8 lg:mt-0  lg:text-7xl text-emerald-500 font-bold drop-shadow-md'>
          Discover the Healing Power of Ayurveda & Panchkarma at Sarthi
          Ayurvedic
        </h1>
        <button
          className='text-2xl md:text-4xl w-fit px-8 py-4 rounded-2xl bg-emerald-500 font-bold text-white hover:scale-105 transition ease-in-out delay-0'
          onClick={handleClick}>
          Book Appointment
        </button>
        {showModal ? (
          <div className='signup-modal flex flex-col p-10 gap-8'>
            <div className='flex'>
              <h3 className='text-lg md:text-3xl text-white px-5 py-3 w-fit bg-emerald-500 rounded-3xl font-extrabold my-0 mx-auto'>
                Book Appointment
              </h3>
              <button onClick={() => setShowModal(false)}>
                <svg
                  className='fill-emerald-500'
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
                value={name}
                onChange={({ currentTarget: { value } }) => setName(value)}
                className='w-full h-16 px-6 py-2 text-emerald-900 text-2xl border-2 border-emerald-500 rounded-2xl outline-none'
                id='name'
                placeholder='Enter Name'
              />
            </label>
            <label htmlFor='number'>
              <input
                type='text'
                name='number'
                onChange={({ currentTarget: { value } }) => setMobile(value)}
                value={mobile}
                className='w-full h-16 px-6 py-2 text-emerald-900 text-2xl border-2 border-emerald-500 rounded-2xl outline-none'
                placeholder='Enter Mobile Number'
              />
            </label>
            <label htmlFor='complaint'>
              <textarea
                name='complaint'
                id='complaint'
                value={message}
                rows={4}
                onChange={({ currentTarget: { value } }) => setMessage(value)}
                className='w-full px-6 py-2 text-emerald-900 text-2xl border-2 border-emerald-500 rounded-2xl outline-none'
                placeholder='Describe your problem here'
              />
            </label>
            <button
              className='text-xl w-fit px-8 py-4 rounded-2xl bg-emerald-500 font-bold text-white hover:scale-105 transition ease-in-out delay-0'
              onClick={handleButtonClick}>
              Book Now
            </button>
          </div>
        ) : null}
      </section>
      <section className='hidden md:block'>
        <Swiper
          direction={'vertical'}
          autoplay={{
            delay: 1500,
          }}
          effect='fade'
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper'>
          <SwiperSlide>
            {' '}
            <img src={Slide1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide4} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide5} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide6} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide7} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide8} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide9} alt='' />
          </SwiperSlide>
        </Swiper>
      </section>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{
          left: '50% !important',
          '& div': {
            background: '#047857',
          },
        }}
        open={alert}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}>
        <Alert
          severity='success'
          variant='filled'
          sx={{
            color: 'white',
            fontSize: '2rem',
            padding: '0.5rem 1rem',
          }}>
          Appointment Booked Successfully
        </Alert>
      </Snackbar>
    </main>
  );
};

export default HeroSection;
