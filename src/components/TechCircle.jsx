import PropTypes from 'prop-types';

const TechCircle = ({ tech }) => {
  return (
    <div
      className="w-28 h-28 text-7xl p-4 flex justify-center items-center text-cBlack border-cBlack border-2 rounded-full hover:bg-cBlack hover:text-white hover:scale-110 duration-300 ease-in-out shadow-lg shadow-cBlack"
      title={tech.name}
      aria-label={tech.name}
    >
      {tech.icon}
    </div>
  );
};

TechCircle.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechCircle;
