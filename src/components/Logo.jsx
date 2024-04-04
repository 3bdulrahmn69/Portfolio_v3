import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <a href="/" className="h-16 w-16 rounded-full relative p-1 bg-white logo">
      <img src={logo} alt="logo" className="opacity-50" />
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-2xl text-cBlack tracking-tighter">
        AM
      </span>
    </a>
  );
};

export default Logo;
