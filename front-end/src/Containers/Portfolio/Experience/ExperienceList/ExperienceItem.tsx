/**
 *
 * ExperienceItem
 *
 */
import * as React from 'react';
import {Grid} from "@material-ui/core";
import {useCallback, useEffect, useRef} from "react";
import {useSpring, animated as a, interpolate, config} from "react-spring";
import styled from "styled-components";
import {IExperienceList} from "../../../../Commons/Stores/ProfileStore";
import ExperienceCard from "./ExperienceCard";





interface ExperienceItemProps {
  item: IExperienceList
}


const StyledGridDate = styled(Grid)`
   position: relative;
`;


const StyledGridCard = styled(Grid)`
   position: relative;
`;

export const DateTo = styled.div`
  font-family: 'mexcellent';
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.palette.white};
  white-space: nowrap;
  text-align: left;
`;

const DateFrom = styled(DateTo)`
   margin-left: 45px;
`;


const ExperienceItem = ({item}: ExperienceItemProps) => {

  const getPosition = (x1 : number, y1  :number, x2  :number, y2 : number, x : number ) => {
    const slope = (y2 -y1) / (x2 -x1);
    const line = slope * ( x - x1) + y1;
    let result =  x - x2 > 0 ? 0 : line ;
    result = result >= y1 ? y1 : result;
    return result;
  };

  const [{ top , left } , set] = useSpring(() => ({top: 0 , left: 0 , config: config.molasses}));
  const rootNode = useRef<any>();

  const onScroll = useCallback(() => {
    if (rootNode.current) {
      const topScroll = (rootNode.current.getBoundingClientRect().top) as number;
      const positionTop = getPosition(window.innerHeight/2,50, window.innerHeight,-20, topScroll);
      const positionLeft = getPosition(window.innerHeight/2,50, window.innerHeight,-50, topScroll);
      return set({top: positionTop , left : positionLeft});
    }

  }, []);




  const positionY = top.interpolate(y => `${y}%`);
  const positionX = left.interpolate(y => `${y}%`);
  // @ts-ignore
  const transform = interpolate([top, left], (top, left) => `translate(${top*-1}%,${left*-1}%)`);





  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });



  return (<Grid container spacing={3} direction="row"
                  justify="space-between" ref={rootNode}>
        <StyledGridDate item xs={8}>
            <a.div style={{position: 'absolute', top: positionY , left: positionX , transform}}>
              <DateTo>{item.to.display}</DateTo>
              <DateFrom>{item.from.display}</DateFrom>
            </a.div>
        </StyledGridDate>
        <StyledGridCard item xs={4}>
            <ExperienceCard item={item}/>
        </StyledGridCard>
    </Grid>);
};

export default ExperienceItem;