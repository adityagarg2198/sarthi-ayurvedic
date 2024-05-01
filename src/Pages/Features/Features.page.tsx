import { Slide } from 'react-awesome-reveal';
import FeatureCard from '../../components/FeatureCard/FeatureCard.component';
import './Features.css'

const Features = () => {
  return (
    <section
      role='region'
      aria-label='Features'
      className='flex justify-center features bg-emerald-500 items-center flex-col px-10 md:px-20 py-16 w-full gap-14 md:gap-24'>
      <Slide direction='up'>
        <h2 className='text-5xl text-center md:text-7xl text-white font-semibold'>
          Everything You Need in One Place
        </h2>
      </Slide>
      <section className='flex gap-20 flex-wrap justify-center'>
        <FeatureCard
          body={[
            'Vaman',
            'Virechan',
            'Basti',
            'Nasya',
            'Raktamokshan',
            'Swaranprashan',
            'Shirodhara',
            'Agnikarma',
            'Vidhkarma',
            'Cupping',
          ]}
          heading='PANCHKARMA:'
        />
        <FeatureCard
          body={['All yoga for ipd patient in morning and evening']}
          heading='YOGA:'
        />
        <FeatureCard
          body={[
            'Infertility',
            'Pcod',
            'Pcos',
            'Tubal blockage',
            'Pre and post delivery care',
            'Fibroid uterus',
            'Irregular menstrual',
            'Hormonal imbalance',
            'Leucorrhea',
          ]}
          heading='GYNAE:'
        />
        <FeatureCard
          body={[
            'Swaranprashan',
            'Immunity boost',
            'Dry/wet cough',
            'Height inresing facts',
            'GASTRO-',
            'Psoriasis',
            'Eczema',
            'Scabies',
            'Dandruff',
            'Fungal infection',
            'Hyperpigmentation',
            'Acne vulgaris',
          ]}
          heading='PAEDIATRIC:'
        />
        <FeatureCard
          body={[
            'Osteo/rheumatoid arthritis',
            'All joints pain',
            'Low back pain',
            'Cervical pain',
            'Sciatica',
            'Disc problem',
            'Frozen shouldher',
            'Avs',
            'Ligament tear',
          ]}
          heading='ORTHOCARE:'
        />
        <FeatureCard
          body={[
            'Constipation',
            'Acidity',
            'Pancreatitis',
            'Ibs',
            'Liver disorder',
            'Hiatus hernia',
            'RESPICARE-',
            'Asthama',
            'Sinusitis',
            'Bronchitis',
            'Allergic rhinitis',
            'Pneumonitis',
          ]}
          heading='GASTRO CARE:'
        />
        <FeatureCard
          body={[
            'Diabetes',
            'Thyroid problem',
            'Obesity',
            'Cardiac disorder',
            'Hypertension',
            'Renal disorder',
          ]}
          heading='LIFE STYLE DISORDER:'
        />
      </section>
    </section>
  );
};

export default Features;
