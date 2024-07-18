import { useEffect } from 'react';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import { myProjects } from '../services/myProjects.js';

const Projects = () => {
  useEffect(() => {
    document.title = 'Works | Abdulrahman Moussa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Container className="py-4 animate-slideDown">
        <h1 className="text-center text-4xl font-semibold mb-4">
          My Recent Projects
        </h1>
        <p className="text-center text-gray-200">
          Here are some of my recent projects. You can check them out on Github
          or view the live demo.
        </p>
      </Container>
      <section className="w-full flex justify-evenly flex-wrap gap-y-12 py-4 px-4">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
