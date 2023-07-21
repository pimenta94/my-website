import TypeScriptIcon from '../../../components/icons/TypeScriptIcon';
import JavaScriptIcon from '../../../components/icons/JavaScriptIcon';
import SassIcon from '../../../components/icons/SassIcon';
import HtmlIcon from '../../../components/icons/HtmlIcon';
import CssIcon from '../../../components/icons/CssIcon';
import GraphQLIcon from '../../../components/icons/GraphQLIcon';
import MySQLIcon from '../../../components/icons/MySQLIcon';
import ReactIcon from '../../../components/icons/ReactIcon';
import ReduxIcon from '../../../components/icons/ReduxIcon';
import AngularIcon from '../../../components/icons/AngularIcon';
import GitIcon from '../../../components/icons/GitIcon';
import GitHubIcon from '../../../components/icons/GitHubIcon';
import JestIcon from '../../../components/icons/JestIcon';
import NodeIcon from '../../../components/icons/NodeIcon';
import JavaIcon from '../../../components/icons/JavaIcon';
import GitLabIcon from '../../../components/icons/GitLabIcon';
import DockerIcon from '../../../components/icons/DockerIcon';
import JenkinsIcon from '../../../components/icons/JenkinsIcon';
import RemixIcon from '../../../components/icons/RemixIcon';
import BootstrapIcon from '../../../components/icons/BootstrapIcon';

const LANGUAGES = [
  {
    name: 'JavaScript',
    component: <JavaScriptIcon />,
    percentage: 90,
  },
  {
    name: 'TypeScript',
    component: <TypeScriptIcon />,
    percentage: 95,
  },
  {
    name: 'SCSS',
    component: <SassIcon />,
    percentage: 80,
  },
  {
    name: 'HTML',
    component: <HtmlIcon />,
    percentage: 90,
  },
  {
    name: 'CSS',
    component: <CssIcon />,
    percentage: 90,
  },
  {
    name: 'Node',
    component: <NodeIcon />,
    percentage: 70,
  },
  {
    name: 'Java',
    component: <JavaIcon />,
    percentage: 70,
  },
  {
    name: 'GraphQL',
    component: <GraphQLIcon />,
    percentage: 60,
  },
];

const FRAMEWORKS = [
  {
    name: 'React',
    component: <ReactIcon />,
    percentage: 85,
  },
  {
    name: 'Redux',
    component: <ReduxIcon />,
    percentage: 95,
  },
  {
    name: 'Remix',
    component: <RemixIcon />,
    percentage: 80,
  },
  {
    name: 'Bootstrap',
    component: <BootstrapIcon />,
    percentage: 75,
  },
  {
    name: 'Angular',
    component: <AngularIcon />,
    percentage: 80,
  },
  {
    name: 'Jest',
    component: <JestIcon />,
    percentage: 75,
  },
];

const OTHER = [
  {
    name: 'Git',
    component: <GitIcon />,
    percentage: 85,
  },
  {
    name: 'Git Lab',
    component: <GitLabIcon />,
    percentage: 80,
  },
  {
    name: 'Docker',
    component: <DockerIcon />,
    percentage: 70,
  },
  {
    name: 'Jenkins',
    component: <JenkinsIcon />,
    percentage: 65,
  },
  {
    name: 'My SQL',
    component: <MySQLIcon />,
    percentage: 60,
  },
  {
    name: 'GitHub Actions',
    component: <GitHubIcon />,
    percentage: 75,
  },
];

export const SKILLS_GROUPS = [
  {
    name: 'Languages',
    list: LANGUAGES,
  },
  {
    name: 'Frameworks',
    list: FRAMEWORKS,
  },
  {
    name: 'Other',
    list: OTHER,
  },
];
