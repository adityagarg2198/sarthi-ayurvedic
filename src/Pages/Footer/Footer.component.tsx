import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <section className='footer flex flex-col px-10 pt-10 gap-10 items-center bg-emerald-500'>
        <Fade duration={2000}>
          <h4 className='text-white text-5xl md:text-7xl font-semibold'>
            Try Acme Note for free
          </h4>
        </Fade>
        <button className='text-2xl md:text-4xl w-fit px-8 py-4 rounded-2xl bg-white font-bold text-emerald-500 hover:scale-105 transition ease-in-out delay-0'>
          Start Noting Now !
        </button>
      </section>
      <section className='flex justify-between items-center px-10 md:px-20 mb-10 md:mb-20'>
        <div className='rounded-full border-indigo-400 border-2 p-3 bg-emerald-500'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='none'
            className='stroke-white'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8 2V5'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 2V5'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7 11H13'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7 16H9.62'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
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
