import { FC } from 'react';
import { FeatureCardProps } from './FeatureCard.types';
import { AttentionSeeker } from 'react-awesome-reveal';

import './FeatureCard.css'

const FeatureCard: FC<FeatureCardProps> = ({ body, heading }) => {
  return (
    <AttentionSeeker effect='pulse' duration={1300}>
      <div className='flex gap-6 p-8 flex-col feature-card'>
        <h3 className='text-emerald-900 text-center font-extrabold text-xl md:text-4xl'>
          {heading}
        </h3>
        <div className='flex flex-col justify-between gap-3'>
          {body.length &&
            body.map((item) => {
              return (
                <p className='text-emerald-950 text-lg md:text-3xl'>
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
