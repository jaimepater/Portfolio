import angular from '../../assets/Images/logos/angular.png';
import backbase from '../../assets/Images/logos/backbase.png';
import bluemix from '../../assets/Images/logos/bluemix.png';
import css from '../../assets/Images/logos/css.png';
import html from '../../assets/Images/logos/html.png';
import ionic from '../../assets/Images/logos/ionic.png';
import jest from '../../assets/Images/logos/jest.png';
import jquery from '../../assets/Images/logos/jquery.png';
import js from '../../assets/Images/logos/js.png';
import node from '../../assets/Images/logos/node.png';
import react from '../../assets/Images/logos/react.png';
import sass from '../../assets/Images/logos/sass.png';
import webpack from '../../assets/Images/logos/webpack.png';
import mobx from '../../assets/Images/logos/mobx.png';
import sc from '../../assets/Images/logos/sc.png';
import ts from '../../assets/Images/logos/ts.png';
import python from '../../assets/Images/logos/python.png';
import react360 from '../../assets/Images/logos/react360.png';
import redux from '../../assets/Images/logos/redux.svg';
import reactQuery from '../../assets/Images/logos/react-query.svg';
import next from '../../assets/Images/logos/next.png';
import nest from '../../assets/Images/logos/NestJS.png';
import raspberry from '../../assets/Images/logos/raspberry.png';
import supergradients from '../../assets/Images/logos/supergradients.png';

const images = {
  angular,
  backbase,
  bluemix,
  css,
  html,
  ionic,
  jest,
  jquery,
  js,
  node,
  react,
  sass,
  webpack,
  ts,
  sc,
  python,
  react360,
  mobx,
  redux,
  reactQuery,
  next,
  nest,
  raspberry,
  supergradients,
};

const getImage = (key: string) => images[key];

export default getImage;
