import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
import logo2 from '../../assets/images/nabh.png';

const Header = () => {
  const navigate = useNavigate();
  const handleDrClick = () => {
    navigate('/drsanjeetrana');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className='py-4 px-20 flex justify-center sm:justify-between'>
      <section
        className='flex items-center cursor-pointer gap-2'
        onClick={handleLogoClick}>
        <figure className='rounded-full max-w-36 bg-white'>
          <img src={logo} alt='' />
        </figure>
        <div className='text-3xl sm:text-5xl italic text-sky-600 font-bold'>
          Sarthi Ayurvedic Hospital & Panchkarma Centre
        </div>
        <figure className='rounded-full max-w-28 bg-white'>
          <img src={logo2} alt='' />
        </figure>
      </section>
      <nav className='flex items-center justify-between gap-8'>
        <a
          href=''
          className='text-emerald-500 text-xl'
          onClick={handleDrClick}>
          Meet Dr. Sanjit Singh Rana
        </a>
        <a href='' className='text-emerald-500 text-2xl'>
          Facilities
        </a>
      </nav>
    </header>
  );
};

export default Header;
