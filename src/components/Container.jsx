import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-5xl my-0 mx-auto xl:px-0 px-4 ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
