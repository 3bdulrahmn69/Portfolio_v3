import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-cBlue bg-cBlack py-4 px-16 flex items-center gap-2 hover:gap-4 rounded-lg transition-all duration-300"
      >
        <FaArrowLeft /> Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
