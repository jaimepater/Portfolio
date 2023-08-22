import { Moment } from 'moment';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { Position } from 'csstype';

export interface PortfolioData {
  profile?: {
    firstName: string;
    lastName: string;
    github: string;
    strava: string;
    mail: string;
    linkedin: string;
    list: Array<string>;
  };
  experience?: {
    title: string;
    list: Array<Experience>;
  };
  skills?: {
    title: string;
    list: Array<Skill>;
  };
  projects?: {
    title: string;
    list: Array<Project>;
  };
  hobbies?: {
    title: string;
    list: Array<Hobie>;
  };
}

export interface FormattedDate {
  display: string;
  date: Moment;
}

export interface Skill {
  id: string;
  name: string;
  score: string;
}

export interface Experience {
  title: string;
  id: string;
  color: string;
  responsibilities: Array<string>;
  from: FormattedDate | string;
  to: FormattedDate | string;
  description: string;
  technologies: Array<string>;
}

export interface Project {
  title: string;
  color: string;
  description: string;
  github: string;
  technologies: Array<string>;
  mainTechnologies: Array<string>;
}

export interface Hobie {
  title: string;
  color: string;
  logo: string;
  description: string;
}

export interface SvgImageProps {
  left?: string;
  width?: string | number;
  height?: string | number;
  position?: Position;
  top?: string;
  style?: object;
}

export interface Solution {
  name: string;
  shortDescription: string;
  description: string;
  img: string;
}

export interface SolutionData {
  profile?: {
    name: string;
    list: Array<string>;
  };
  services?: {
    title: string;
    list: Array<Solution>;
  };
  contact?: {
    title: string;
  };
}

export enum SolutionsImages {
  AI = 'ai',
  IOT = 'iot',
  SOFTWARE = 'software',
  TRAINING = 'training',
}
