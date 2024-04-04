import { Link } from 'react-router-dom';
import Links from './Links';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-gray-400/30 text-white py-6 px-4 border-t-2 border-cBlack/20 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <Links />
        </div>
        <div className="md:py-0 py-6">
          <Link
            to="/contact"
            className="py-4 px-16  rounded-full uppercase font-medium bg-transparent border border-white text-white hover:bg-white hover:text-cBlack duration-300 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {date} Abdulrahman Moussa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
