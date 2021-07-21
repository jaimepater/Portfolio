import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import styled, { DefaultTheme } from 'styled-components';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Divider from '@material-ui/core/Divider';
import { Experience, FormattedDate } from '../../../../Definitions/definitions';
import Ibm from '../../../../assets/Images/ibm.png';
import Belatrix from '../../../../assets/Images/belatrix.png';
import Intertec from '../../../../assets/Images/intertec.png';
import Bulleted from '../../../../Components/Bulleted';
import Technologies from '../../../../Components/Technologies';
import { FORMAT_DATES } from '../../../../Commons/constants';

const images = {
  Belatrix,
  IBM: Ibm,
  Intertec,
};

const StyledCard = styled(Card)`
  min-height: 200px;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
`;

interface LogoProps {
  theme: DefaultTheme;
  image: string;
}

const Logo = styled.div`
  background-image: ${(props: LogoProps) => `url(${props.image})`};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-size: 100% 100%;
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-weight: bold;
  font-style: normal;
  text-align: left;
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.palette.gray2};
`;

const SubTitle = styled(Title)`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.palette.gray3};
`;

const SubDates = styled(Title)`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.palette.gray3};
`;

const Text = styled(Title)`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.palette.gray2};
`;

const StyledCardHeader = styled(CardHeader)`
  padding: 12px;
`;

interface ExperienceCardProps {
  item: Experience;
}

const ExperienceCard = ({ item }: ExperienceCardProps) => {
  const { from, title, technologies, color, responsibilities, to } = item;
  const fromDate = (from as FormattedDate).date;
  const toDate = (to as FormattedDate).date;
  const differenceDate = fromDate.to(toDate, true);
  const subDates = (
    <SubDates>{`${toDate.format(FORMAT_DATES)} - ${fromDate.format(FORMAT_DATES)}`}</SubDates>
  );
  const subheader = (
    <span>
      <SubTitle>{differenceDate}</SubTitle> · {subDates}
    </span>
  );

  return (
    <StyledCard>
      <StyledCardHeader
        avatar={<Logo image={images[title]} />}
        title={<Title>{title}</Title>}
        subheader={subheader}
      />
      <Divider variant="middle" />
      <CardContent>
        {responsibilities.map(resp => (
          <Bulleted
            key={resp}
            text={<Text>{resp}</Text>}
            icon={<CheckCircleIcon />}
            color={color}
          />
        ))}
        <Technologies technologies={technologies} />
      </CardContent>
    </StyledCard>
  );
};

export default ExperienceCard;
