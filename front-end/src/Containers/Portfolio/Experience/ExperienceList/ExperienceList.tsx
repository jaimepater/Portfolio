import * as React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { Experience } from '../../../../Definitions/definitions';
import ExperienceItem from './ExperienceItem';

const StyledContainer = styled(Container)`
  margin-top: 30px;
  min-height: 500px;
`;

interface ExperienceListProps {
  experienceList: Array<Experience>;
}
const ExperienceList = ({ experienceList }: ExperienceListProps) => {
  return (
    <>
      {experienceList && (
        <StyledContainer>
          {experienceList.map(item => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </StyledContainer>
      )}
    </>
  );
};

export default ExperienceList;
