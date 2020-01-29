/**
 *
 * ExperienceCard
 *
 */
import * as React from 'react';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import styled, {DefaultTheme} from "styled-components";
import {IExperienceList} from "../../../../Commons/Stores/ProfileStore";
import Ibm from "../../../../assets/Images/ibm.png";
import Belatrix from "../../../../assets/Images/belatrix.png";
import Bulleted from "../../../../Components/Bulleted";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Divider from "@material-ui/core/Divider";
import Technology from "../../../../Components/Technology";
import Technologies from "../../../../Components/Technologies";


interface ExperienceCardProps {
  item : IExperienceList
}

const StyledCard = styled(Card)`
   min-height: 200px;
   width: 100%;
   margin-bottom: 20px;
`;

const Logo = styled.div`
  background-image: ${(props: ILogo) => `url(${props.image})`};
  border-radius: 50%;  
  height: 40px;
  width: 40px;
  background-size: 100% 100%;
`;

const Title = styled.div`
  font-family: "Roboto";
  font-weight: bold;
  font-style: normal;
  text-align: left;
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.palette.gray2};
`;

const SubTitle = styled(Title)`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.palette.gray3};
`;

const Text = styled(Title)`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.palette.gray2};
`;

const StyledCardHeader = styled(CardHeader)`
   padding: 12px;
`;


interface ILogo {
  theme: DefaultTheme,
  image: string,
}

const images : any= {
  Belatrix,
  IBM : Ibm
};

const ExperienceCard =  ({item} : ExperienceCardProps) => {
  const differenceDate = item.from.date.to(item.to.date, true);
    
  return (<StyledCard>
    <StyledCardHeader avatar={
      <Logo image={images[item.title]} /> }
                title={<Title>{item.title}</Title>}
                subheader={<SubTitle>{differenceDate}</SubTitle>} />
    <Divider variant="middle" />
    <CardContent>
      {item.responsibilities.map( resp => (
          <Bulleted text={<Text>{resp}</Text>}
                    icon={<CheckCircleIcon />}
                    color={item.color}/>))}
                    <Technologies technologies={item.technologies}/>
    </CardContent>
  </StyledCard>);
};

export default ExperienceCard;