import PropTypes from 'prop-types';
import { FiGithub } from 'react-icons/fi';
import { MdWeb } from 'react-icons/md';
import { IconContext } from 'react-icons';

const ProjectCard = ({ project }) => {
  return (
    <article className="bg-white w-full lg:min-h-96 min-h-80 md:w-5/12 rounded-xl overflow-hidden shadow-lg transform transition duration-500 animate-slideUp">
      {project.underDevelopment && (
        <div className="under_development">under development</div>
      )}
      <figure className="h-2/3 overflow-hidden">
        <img
          src={project.img}
          className="w-full h-auto object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
          alt={project.title}
        />
      </figure>
      <div className="project__info p-4 bg-gradient-to-b from-transparent to-gray-100 rounded-b-xl">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-500">{project.description}</p>
        </div>
        <div className="py-4">
          <h3 className="text-lg font-semibold">Tools:</h3>
          <ul className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <li key={index} className="text-blue-500 flex items-center gap-1">
                <span className="text-gray-400">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-cBlack text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-cBlack-dark"
          >
            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
              <FiGithub /> Code
            </IconContext.Provider>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-block bg-cBlue text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-cBlue-dark"
            >
              <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                <MdWeb /> Demo
              </IconContext.Provider>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    code: PropTypes.string.isRequired,
    demo: PropTypes.string,
    underDevelopment: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
