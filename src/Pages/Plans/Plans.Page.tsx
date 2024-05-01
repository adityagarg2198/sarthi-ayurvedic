import { Slide } from 'react-awesome-reveal';
import PlansCard from '../../components/PlansCard/PlansCard.component';
import './Plans.css';
const Plans = () => {
  return (
    <section
      role='region'
      aria-label='Subscription Plans'
      className='plans-section flex justify-center items-center flex-col px-10 md:px-20 py-24 w-full gap-20 md:gap-40'>
      <Slide duration={1500} direction='right'>
        <h2 className='text-5xl md:text-7xl text-white font-semibold'>
          Choose your plan
        </h2>
      </Slide>
      <section className='flex gap-28 flex-wrap justify-center'>
        <PlansCard
          title='Free'
          features={[
            'Unlimited Text Notes',
            'Basic Formatting',
            'Tagging System',
            'Starred Notes',
            'Cloud Storage upto 50MB',
          ]}
          price='0'
        />
        <PlansCard
          title='Basic'
          features={[
            'Sync Across Devices',
            'Robust Search',
            'Reminders and Notifications',
            'Offline Access',
            'Customer Support',
            'Cloud Storage upto 500MB',
          ]}
          price='10/month'
        />
        <PlansCard
          title='Premium'
          features={[
            'Export and Backup',
            'Real-Time Collaboration',
            'Priority Customer Support',
            'AI-Powered Features',
            'Advanced Integrations',
            'Cloud Storage upto 10GB',
          ]}
          price='99/month'
        />
      </section>
      <section className='flex flex-col gap-5 mt-10 items-center'>
        <p className='help-text italic text-white'>
          Have questions? We're here to help!
        </p>
        <div className='flex flex-row items-center gap-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon finger-icon icon-tabler icon-tabler-arrow-big-right-lines stroke-white'
            width='35'
            height='35'
            viewBox='0 0 24 24'
            strokeWidth='1'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z' />
            <path d='M3 9v6' />
            <path d='M6 9v6' />
          </svg>
          <button className='text-lg md:text-3xl w-fit px-8 py-4 rounded-2xl bg-white font-bold text-emerald-500 hover:scale-105 transition ease-in-out delay-0'>
            Schedule a free consultation
          </button>
        </div>
      </section>
    </section>
  );
};

export default Plans;
