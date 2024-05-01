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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-brand-facebook stroke-indigo-400 w-20 h-20 cursor-pointer'
              viewBox='0 0 24 24'
              strokeWidth='1.8'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-brand-instagram stroke-indigo-400 w-20 h-20 cursor-pointer'
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-brand-x stroke-indigo-400 w-20 h-20 cursor-pointer'
              viewBox='0 0 24 24'
              strokeWidth='1.8'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
              <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
            </svg>
          </div>
        </AttentionSeeker>
      </section>
    </footer>
  );
};

export default Footer;
