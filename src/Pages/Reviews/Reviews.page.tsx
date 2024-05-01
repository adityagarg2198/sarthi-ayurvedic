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
          Happy Customers, Happy Us
        </h2>
      </Zoom>
      <section className='flex gap-28 mt-5 md:mt-20 flex-wrap justify-center'>
        <ReviewCard
          reviewer='Maya Noteworthy'
          reviewContent={`This app has revolutionized my note-taking! It's simple yet powerful`}
        />
        <ReviewCard
          reviewer='Alex Efficiency'
          reviewContent={`Finally, a note-taking app that keeps up with my busy schedule. Love the organization features!`}
        />
        <ReviewCard
          reviewer='Sarah Scribbles'
          reviewContent={`The perfect blend of creativity and functionality. Makes note-taking a joy!`}
        />
        <ReviewCard
          reviewer='David Mindmap'
          reviewContent={`This app has become my go-to for brainstorming and research. Highly recommend!`}
        />
        <ReviewCard
          reviewer='Emily Organized'
          reviewContent={`Goodbye sticky notes, hello streamlined note-taking! This app is a lifesaver.`}
        />
        <ReviewCard
          reviewer='Noah Recall'
          reviewContent={`The search function makes finding old notes a breeze. Plus, the interface is super user-friendly`}
        />
      </section>
    </section>
  );
};

export default Reviews;
