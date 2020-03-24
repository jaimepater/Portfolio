/**
 *
 * Technologies
 *
 */
import * as React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';


import Technology from './Technology';
import getImage from '../Commons/Utils/getImage';



interface TechnologiesProps {
  technologies: Array<string>;
}

const StyledGrid = styled(Grid)`
  margin-top: 20px;
`;

const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <StyledGrid container spacing={1} direction="row" alignItems="flex-start">
      {technologies.map(tech => (
        <Grid item>
          <Technology text={tech} icon={getImage(tech)} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default Technologies;
