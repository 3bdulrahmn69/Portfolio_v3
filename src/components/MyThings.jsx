import PropTypes from 'prop-types';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPython,
  FaFigma,
  FaTerminal,
} from 'react-icons/fa6';
import {
  SiVim,
  SiTypescript,
  SiVisualstudiocode,
  SiPostman,
  SiGnubash,
  SiNetlify,
  SiVercel,
  SiAxios,
  SiMaterialdesign,
  SiVitest,
  SiDaisyui,
  SiNodedotjs,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiI18Next,
} from 'react-icons/si';
import { DiGit, DiMysql, DiJqueryLogo, DiResponsive } from 'react-icons/di';
import { TbBrandTailwind, TbBrandGithubCopilot } from 'react-icons/tb';
import { BiLogoFlask } from 'react-icons/bi';
import { PiFramerLogoFill } from 'react-icons/pi';

const mySkills = [
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

const myTools = [
  {
    name: 'Visual Studio Code',
    icon: <SiVisualstudiocode />,
  },
  {
    name: 'Terminal',
    icon: <FaTerminal />,
  },
  {
    name: 'Vim',
    icon: <SiVim />,
  },
  {
    name: 'Bash',
    icon: <SiGnubash />,
  },
  {
    name: 'Github Copilot',
    icon: <TbBrandGithubCopilot />,
  },
  {
    name: 'Git',
    icon: <DiGit />,
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
  },
  {
    name: 'Axios',
    icon: <SiAxios />,
  },
  {
    name: 'i18next',
    icon: <SiI18Next />,
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
  },
  {
    name: 'Netlify',
    icon: <SiNetlify />,
  },
  {
    name: 'Vercel',
    icon: <SiVercel />,
  },
  {
    name: 'Material UI',
    icon: <SiMaterialdesign />,
  },
  {
    name: 'Daisy UI',
    icon: <SiDaisyui />,
  },
  {
    name: 'Framer Motion',
    icon: <PiFramerLogoFill />,
  },
  {
    name: 'Responsive Design',
    icon: <DiResponsive />,
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
  },
  {
    name: 'Vite',
    icon: <SiVitest />,
  },
];

const MyThings = ({ skills }) => {
  return (
    <div className="w-full flex gap-8 flex-wrap justify-center">
      {skills
        ? mySkills.map((skill) => (
            <div
              key={skill.name}
              className="w-28 h-28 text-7xl p-4 flex justify-center items-center text-cBlack border-cBlack border-2 rounded-full hover:bg-cBlack hover:text-white hover:scale-110 duration-300 ease-in-out shadow-lg shadow-cBlack"
              title={skill.name}
              aria-label={skill.name}
            >
              {skill.icon}
            </div>
          ))
        : myTools.map((tool, index) => (
            <div
              key={index}
              className="w-28 h-28 text-7xl p-4 flex justify-center items-center text-cBlack border-cBlack border-2 rounded-full hover:bg-cBlack hover:text-white hover:scale-110 duration-300 ease-in-out shadow-lg shadow-cBlack"
              title={tool.name}
              aria-label={tool.name}
            >
              {tool.icon}
            </div>
          ))}
    </div>
  );
};

MyThings.propTypes = {
  skills: PropTypes.bool,
};

export default MyThings;
