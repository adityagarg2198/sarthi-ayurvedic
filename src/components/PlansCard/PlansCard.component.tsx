import { FC } from 'react';
import './PlansCard.css';
import { PlansCardProps } from './PlansCard.types';
import { AttentionSeeker } from 'react-awesome-reveal';

const PlansCard: FC<PlansCardProps> = ({ features, title, price }) => {
  return (
    <AttentionSeeker effect='rubberBand' duration={1500}>
      <div className='plans-card cursor-pointer rounded-2xl h-full flex w-full md:max-w-l p-10 gap-1 flex-col hover:scale-110 transition ease-in-out delay-0'>
        <div className='flex flex-col h-36 gap-8'>
          <h3 className='text-6xl font-semibold my-0 mx-auto'>{title}</h3>
          <div className='flex flex-row items-center gap-1'>
            <sup className='text-4xl font-extrabold'>$</sup>
            <p className='text-3xl font-extrabold'>{price}</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          {Boolean(features.length) &&
            features.map((feature) => {
              return (
                <div className='flex flex-row items-center gap-2' key={feature}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-discount-check stroke-white'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1' />
                    <path d='M9 12l2 2l4 -4' />
                  </svg>
                  <p className='text-2xl'>{feature}</p>
                </div>
              );
            })}
        </div>
      </div>
    </AttentionSeeker>
  );
};

export default PlansCard;
