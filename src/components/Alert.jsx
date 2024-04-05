import PropTypes from 'prop-types';

const Alert = ({ Message }) => {
  return (
    <div className="fixed z-10 top-24 md:right-2 right-0 bg-white rounded-l-full after:top-0 after:absolute after:right-0 after:bg-green-500 after:h-full after:w-2 animate-FadeInRev">
      <p className="text-green-500 py-4 px-8">{Message}</p>
    </div>
  );
};

Alert.propTypes = {
  Message: PropTypes.string.isRequired,
};

export default Alert;
