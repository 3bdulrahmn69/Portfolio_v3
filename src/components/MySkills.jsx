import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPython,
} from 'react-icons/fa6';
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from 'react-icons/si';
import { DiMysql, DiJqueryLogo } from 'react-icons/di';
import { TbBrandTailwind } from 'react-icons/tb';
import { BiLogoFlask } from 'react-icons/bi';
import TechCircle from './TechCircle';

const Skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS',
    icon: <FaCss3 />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
  },
  {
    name: 'Tailwind CSS',
    icon: <TbBrandTailwind />,
  },
  {
    name: 'jQuery',
    icon: <DiJqueryLogo />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'Node Js',
    icon: <SiNodedotjs />,
  },
  {
    name: 'Express Js',
    icon: <SiExpress />,
  },
  {
    name: 'Next Js',
    icon: <SiNextdotjs />,
  },
  {
    name: 'Python',
    icon: <FaPython />,
  },
  {
    name: 'Flask',
    icon: <BiLogoFlask />,
  },
  {
    name: 'MySQL',
    icon: <DiMysql />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
];

const MySkills = () => {
  return (
    <div className="w-full flex gap-8 flex-wrap justify-center">
      {Skills.map((skill, idx) => (
        <TechCircle key={idx} tech={skill} />
      ))}
    </div>
  );
};

export default MySkills;
