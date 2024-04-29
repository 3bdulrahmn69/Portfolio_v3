import { useEffect } from 'react';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import Small from '../assets/Small.png';
import Bondi from '../assets/Bondi.png';
import EStore from '../assets/EStore.png';
import LoveLoom from '../assets/LoveLoom.png';
import Youtube from '../assets/Youtube.png';
import MercyBridge from '../assets/MercyBridge.png';
import wowyouconvertit from '../assets/wowyouconvertit.png';

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

const myProjects = [
  {
    title: 'Wow You Convert It',
    description: 'See what your salary is worth in other wow currencies',
    img: wowyouconvertit,
    tools: ['React js', 'Tailwind CSS', 'Framer motion'],
    code: 'https://github.com/3bdulrahmn69/wow_you_convert_it',
    demo: 'https://wowyouconvertit.netlify.app',
  },
  {
    title: 'MercyBridge',
    description: 'A website to make donation more easier',
    img: MercyBridge,
    tools: ['React js', 'Tailwind CSS', 'I18next ', 'JSON Server', 'Axios'],
    code: 'https://github.com/3bdulrahmn69/mercyBridge',
  },
  {
    title: 'Youtube Clone',
    description: 'A Youtube Clone with youtube api from Rapid API',
    img: Youtube,
    tools: ['React js', 'Axios', 'Material UI', 'Rapid API'],
    code: 'https://github.com/3bdulrahmn69/youtube_clone_v2',
    demo: 'https://abdelrahman69-youtube.netlify.app/',
  },
  {
    title: 'LoveLoom',
    description: 'A Website to enhance love stories - Memories and more',
    img: LoveLoom,
    tools: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    code: 'https://github.com/3bdulrahmn69/LoveLoom',
    demo: 'https://loveloom.netlify.app/',
  },
  {
    title: 'Estore',
    description: 'A website for selling hardware products',
    img: EStore,
    tools: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/3bdulrahmn69/Estore',
  },
  {
    title: 'Bondi',
    description: 'Bootstrap template to practice',
    img: Bondi,
    tools: ['HTML', 'CSS', 'Bootstrap'],
    code: 'https://github.com/3bdulrahmn69/Bondi',
    demo: 'https://3bdulrahmn69.github.io/Bondi',
  },
  {
    title: 'Javascript projects',
    description: 'Some of my small javascript beginner projects',
    img: Small,
    tools: ['HTML', 'JavaScript'],
    code: 'https://github.com/3bdulrahmn69/JavaScript_Small_Pojects',
    demo: 'https://3bdulrahmn69.github.io/JavaScript_Small_Pojects',
  },
];

export default Projects;
