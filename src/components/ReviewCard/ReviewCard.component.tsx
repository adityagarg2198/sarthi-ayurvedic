import { FC } from 'react';
import { ReviewCardProps } from './ReviewCard.types';
import './ReviewCard.css';
import { Fade } from 'react-awesome-reveal';

const ReviewCard: FC<ReviewCardProps> = ({ reviewer }) => {
  return (
    <Fade direction='up' duration={1200}>
      <div className='review-card cursor-pointer rounded-2xl flex shadow-l justify-between bg-white max-w-lg md:max-w-md p-10 gap-2 flex-col hover:scale-110 transition ease-in-out delay-75'>
        <h3 className='text-emerald-500 font-semibold text-2xl md:text-3xl'>
          {reviewer}
        </h3>
      </div>
    </Fade>
  );
};

export default ReviewCard;
