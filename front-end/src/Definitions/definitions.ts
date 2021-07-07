import { Moment } from 'moment';

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
  from: {
    display: string;
    date: Moment;
  };
  to: {
    display: string;
    date: Moment;
  };
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
  position?: string;
  top?: string;
  style?: object;
}
