/**
 *
 * ExperienceList
 *
 */
import * as React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { IExperienceList } from '../../../../Commons/Stores/ProfileStore';
import ExperienceItem from './ExperienceItem';

const StyledContainer = styled(Container)`
  margin-top: 30px;
  min-height: 500px;
`;

interface ExperienceListProps {
  experienceList: Array<IExperienceList>;
}
const ExperienceList = ({ experienceList }: ExperienceListProps) => {
  return (
    <StyledContainer>
      {experienceList && experienceList.map(item => <ExperienceItem key={item.id} item={item} />)}
    </StyledContainer>
  );
};

export default ExperienceList;
