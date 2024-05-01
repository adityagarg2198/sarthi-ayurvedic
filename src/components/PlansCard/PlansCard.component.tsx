import { FC } from 'react';
import { Navigation } from '@mui/icons-material';
import './PlansCard.css';
import { PlansCardProps } from './PlansCard.types';

const PlansCard: FC<PlansCardProps> = ({ features, title, price }) => {
  return (
    <div className='plans-card cursor-pointer rounded-2xl h-96 flex w-full md:max-w-2xl p-10 gap-1 flex-col hover:scale-110 transition ease-in-out delay-0'>
      <div className='flex flex-col h-32 gap-4'>
        <h3 className='text-3xl font-semibold my-0 mx-auto'>{title}</h3>
        <p className='text-2xl text-center font-extrabold'>{price}</p>
      </div>
      <div className='flex flex-col gap-3'>
        {Boolean(features.length) &&
          features.map((feature) => {
            return (
              <div className='flex flex-row items-center gap-2' key={feature}>
                <Navigation sx={{ transform: 'rotate(90deg)' }} />
                <p className='text-2xl'>{feature}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PlansCard;
