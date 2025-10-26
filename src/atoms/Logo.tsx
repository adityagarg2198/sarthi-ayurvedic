import logo from '@/assets/images/logo.jpeg'

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img src={logo} alt="logo" className='aspect-square object-contain w-20'/>
      <p className='font-semibold text-neutral-900'>
        Sarthi Ayurvedic Hospital <span className='block font-normal'>& Panchakarma Centre</span>
      </p>
    </div>
  );
};

export default Logo;
