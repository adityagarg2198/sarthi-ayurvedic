import logo from '../../assets/images/WhatsApp Image 2024-04-09 at 6.35.11 PM.jpeg';

const Header = () => {
  return (
    <header className='h-52 py-8 px-20 flex justify-center sm:justify-start'>
      <section className='flex items-center cursor-pointer gap-2'>
        <figure className='rounded-full max-w-28 bg-white'>
          <img src={logo} alt='' />
        </figure>
        <p className='text-4xl sm:text-6xl italic text-emerald-500 font-bold'>
          Sarthi Ayurvedic
        </p>
      </section>
    </header>
  );
};

export default Header;
