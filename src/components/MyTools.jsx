import { FaFigma, FaTerminal } from 'react-icons/fa6';
import {
  SiVim,
  SiVisualstudiocode,
  SiPostman,
  SiGnubash,
  SiNetlify,
  SiVercel,
  SiAxios,
  SiMaterialdesign,
  SiVitest,
  SiDaisyui,
  SiI18Next,
  SiRedux,
} from 'react-icons/si';
import { DiGit, DiResponsive } from 'react-icons/di';
import { TbBrandGithubCopilot } from 'react-icons/tb';
import { PiFramerLogoFill } from 'react-icons/pi';
import TechCircle from './TechCircle';

const Tools = [
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

const MyTools = () => {
  return (
    <div className="w-full flex gap-8 flex-wrap justify-center">
      {Tools.map((tool, idx) => (
        <TechCircle key={idx} tech={tool} />
      ))}
    </div>
  );
};

export default MyTools;
