import withoutBg from '../assets/without-bg.png';

const MyImage = () => {
  return (
    <figure className="w-full -mt-24 relative">
      <img
        src={withoutBg}
        alt="Abdulrahman Moussa"
        className="w-full h-full object-cover"
      />
      <div className="absolute -z-10 top-0 -right-10  w-80 h-80 rounded-full bg-[#EF5A6F]"></div>
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-16  w-80 h-80 rounded-full bg-[#F1DEC6] clip"></div>
      <div className="absolute -z-10 bottom-0 -right-10  w-80 h-56 bg-[#4C3BCF]"></div>
    </figure>
  );
};

export default MyImage;
