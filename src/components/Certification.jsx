import PropTypes from 'prop-types';
import { HiInformationCircle } from 'react-icons/hi';

const Certification = ({ ImgLink, cLink, name, from }) => {
  return (
    <figure className="flex flex-col items-center justify-center relative mb-4 bg-black/10 p-4 rounded-md">
      <a
        href={cLink}
        target="_blank"
        rel="noreferrer noopener"
        className="absolute top-0 right-0 text-3xl text-white hover:text-cBlue-dark duration-300 hover:animate-ping"
      >
        <HiInformationCircle />
      </a>
      <img className="rounded-md" src={ImgLink} alt={name} loading="lazy" />
      <figcaption className="w-full flex justify-between items-center mt-4">
        <p className="text-lg">{name}</p>
        <p>{from}</p>
      </figcaption>
    </figure>
  );
};

Certification.propTypes = {
  cLink: PropTypes.string.isRequired,
  ImgLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};

export default Certification;