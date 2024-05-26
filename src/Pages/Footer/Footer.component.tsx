import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import logo from '../../assets/images/logo.jpeg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <section className='footer flex flex-col px-10 pt-10 gap-10 items-center bg-emerald-500'>
        <Fade duration={2000}>
          <h4 className='text-white text-5xl md:text-7xl font-semibold'>
            Visit or Book Appointment Online
          </h4>
        </Fade>
        <button className='text-2xl md:text-4xl w-fit px-8 py-4 rounded-2xl bg-white font-bold text-emerald-500 hover:scale-105 transition ease-in-out delay-0'>
          Book Appointment Now
        </button>
      </section>
      <section className='flex justify-between items-center px-10 md:px-20 mb-10 md:mb-20'>
        <div className='rounded-full p-3'>
          <figure className='rounded-full max-w-36 bg-white'>
            <img src={logo} alt='' />
          </figure>
        </div>
        <AttentionSeeker effect='jello'>
          <div className='flex md:gap-10 items-center'>
            <a
              href='https://www.facebook.com/p/Sarthi-ayurvedic-hospital-and-panchkarma-centre-charkhi-dadri-haryana-61555531862343/'
              target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-facebook stroke-emerald-400 w-20 h-20 cursor-pointer'
                viewBox='0 0 24 24'
                strokeWidth='1.8'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/sarthiayurvedichospital'
              target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-instagram stroke-emerald-400 w-20 h-20 cursor-pointer'
                viewBox='0 0 24 24'
                strokeWidth='1.8'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
                <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                <path d='M16.5 7.5l0 .01' />
              </svg>
            </a>
            <a href='https://www.youtube.com/@dr.sanjeetrana1550' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                className='icon icon-tabler icon-tabler-brand-x stroke-emerald-400 w-20 h-20 cursor-pointer'
                width='100'
                fill='none'
                strokeWidth='1.8'
                height='100'
                viewBox='0 0 50 50'>
                <path d='M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z'></path>
              </svg>
            </a>
          </div>
        </AttentionSeeker>
      </section>
    </footer>
  );
};

export default Footer;
