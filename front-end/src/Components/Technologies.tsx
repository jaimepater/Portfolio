/**
 *
 * Technologies
 *
 */
import * as React from 'react';
import {Grid} from "@material-ui/core";
import angular from "../assets/Images/logos/angular.png";
import backbase from "../assets/Images/logos/backbase.png";
import bluemix from "../assets/Images/logos/bluemix.png";
import css from "../assets/Images/logos/css.png";
import html from "../assets/Images/logos/html.png";
import ionic from "../assets/Images/logos/ionic.png";
import jest from "../assets/Images/logos/jest.png";
import jquery from "../assets/Images/logos/jquery.png";
import js from "../assets/Images/logos/js.png";
import node from "../assets/Images/logos/node.png";
import react from "../assets/Images/logos/react.png";
import sass from "../assets/Images/logos/sass.png";
import webpack from "../assets/Images/logos/webpack.png";
import mobx from "../assets/Images/logos/mobx.png";



import Technology from "./Technology";
import styled from "styled-components";


const images: any = {
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
  mobx
};

interface TechnologiesProps {
  technologies: Array<string>

}

const StyledGrid = styled(Grid)`
 margin-top: 20px;
   
`;

const Technologies = ({technologies}: TechnologiesProps) => {

  return (<StyledGrid container spacing={1}
                  direction="row"
                  alignItems="flex-start">
        {technologies.map(tech =>
            <Grid item >
                <Technology text={tech} icon={images[tech]}/>
            </Grid>)}
    </StyledGrid>);
};

export default Technologies;