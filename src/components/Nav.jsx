import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoDocumentTextSharp } from 'react-icons/io5';

const Nav = ({ checkboxValue, setCheckboxValue, navList }) => {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (path === '') {
      setActiveItem('home');
      return;
    }
    setActiveItem(path);
  }, [location]);

  const handleHideNav = () => {
    setCheckboxValue(false);
  };

  return (
    <nav
      className={`md:block md:static absolute top-20 right-0 left-0 w-full ${
        checkboxValue ? 'block' : 'hidden'
      }`}
    >
      <ul
        className={`flex gap-8 items-center lg:text-xl md:text-xs text-2xl md:flex-row flex-col ${
          checkboxValue ? 'py-5 bg-cBlue gap-4' : 'py-0'
        }`}
        onClick={() => handleHideNav()}
      >
        {navList.map((item) => (
          <li
            key={item.name}
            id={item.name}
            className={`menu-item hover:underline hover:underline-offset-4 w-fit h-fit ${
              activeItem === item.name.toLowerCase()
                ? 'text-white font-bold underline underline-offset-4'
                : ''
            }`}
            onClick={() => handleHideNav()}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        <li>
          <a
            href="https://flowcv.com/resume/emcfrihgf1"
            target="_blank"
            rel="noreferrer"
            className="bg-white py-2 px-4 rounded hover:bg-gray-300 transition-colors duration-300"
          >
            Resume <IoDocumentTextSharp className="inline text-2xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  checkboxValue: PropTypes.bool,
  setCheckboxValue: PropTypes.func,
  navList: PropTypes.array,
};

Nav.defaultProps = {
  navList: [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ],
};

export default Nav;
