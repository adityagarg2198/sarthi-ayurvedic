import { Zoom } from 'react-awesome-reveal';
import ReviewCard from '../../components/ReviewCard/ReviewCard.component';
import './Reviews.css';
const Reviews = () => {
  return (
    <section
      role='region'
      aria-label='Customer Reviews'
      className='review-section flex justify-center items-center flex-col px-10 md:px-20 md:mt-24 py-24 w-full gap-16 md:gap-24'>
      <Zoom>
        <h2 className='text-5xl text-center md:text-7xl text-emerald-800 font-semibold'>
          Facilities
        </h2>
      </Zoom>
      <section className='flex gap-28 mt-5 md:mt-20 flex-wrap justify-center'>
        <ReviewCard
          reviewer='10 bed for admission'
        />
        <ReviewCard
          reviewer='Yoga expert for consultation'
        />
        <ReviewCard
          reviewer='Nadi pariksha'
        />
        <ReviewCard
          reviewer='Ayurvedic consultation by expert more than 15 year clinical experience'
        />
        <ReviewCard
          reviewer='All ayurvedic medicine'
        />
        <ReviewCard
          reviewer='Swaranprshan for immunity'
        />
        <ReviewCard
          reviewer='Fully equipped modern ac panchkarma rooms'
        />
          <ReviewCard
          reviewer='Ambulance'
        />
      </section>
    </section>
  );
};

export default Reviews;
