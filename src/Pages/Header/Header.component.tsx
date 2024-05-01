import logo from '../../assets/images/logo.jpeg';

const Header = () => {
  return (
    <header className='py-4 px-20 flex justify-center sm:justify-start'>
      <section className='flex items-center cursor-pointer gap-2'>
        <figure className='rounded-full max-w-36 bg-white'>
          <img src={logo} alt='' />
        </figure>
        <p className='text-4xl sm:text-6xl italic text-emerald-500 font-bold'>
          Sarthi Ayurvedic Hospital
        </p>
      </section>
    </header>
  );
};

export default Header;
