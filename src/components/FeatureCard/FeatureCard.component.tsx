import { FC } from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FeatureCardProps } from './FeatureCard.types';
import { AttentionSeeker } from 'react-awesome-reveal';

import './FeatureCard.css';

const FeatureCard: FC<FeatureCardProps> = ({ body, heading }) => {
  return (
    <AttentionSeeker effect='pulse' duration={1300}>
      <div className='flex gap-6 p-8 flex-col feature-card bg-emerald-800'>
        <h3 className='text-white text-center font-extrabold text-xl md:text-4xl'>
          {heading}
        </h3>
        <div className='flex flex-col justify-between gap-3'>
          {body.length &&
            body.map((item) => {
              return (
                <p className='text-white text-lg md:text-2xl'>
                  <KeyboardArrowRight sx={{ marginRight: '0.5rem' }} />
                  {item}
                </p>
              );
            })}
        </div>
      </div>
    </AttentionSeeker>
  );
};

export default FeatureCard;
