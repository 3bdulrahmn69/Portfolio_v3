import PropTypes from 'prop-types';

const HamMenu = ({ checkboxValue, setCheckboxValue }) => {
  return (
    <label
      htmlFor="menu"
      className="w-10 h-10 flex items-center justify-center flex-col gap-1 md:hidden"
    >
      <input
        type="checkbox"
        name="menu"
        id="menu"
        className="hidden"
        checked={checkboxValue}
        onChange={() => {
          setCheckboxValue(!checkboxValue);
        }}
      />
      <span
        className={`w-8 h-1 rounded-sm bg-white block transition-transform ${
          checkboxValue ? 'rotate-45 absolute r' : ''
        }`}
      ></span>
      <span
        className={`w-8 h-1 rounded-sm bg-white block transition-transform ${
          checkboxValue ? 'rotate-45 absolute' : ''
        }`}
      ></span>
      <span
        className={`w-8 h-1 rounded-sm bg-white block transition-transform ${
          checkboxValue ? '-rotate-45 absolute' : ''
        }`}
      ></span>
    </label>
  );
};

HamMenu.propTypes = {
  checkboxValue: PropTypes.bool.isRequired,
  setCheckboxValue: PropTypes.func.isRequired,
};

export default HamMenu;
