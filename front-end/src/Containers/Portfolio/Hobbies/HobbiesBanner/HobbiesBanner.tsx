/**
 *
 * HobbiesBanner
 *
 */
import * as React from 'react';
import styled from 'styled-components';
import { useRef, useEffect, useCallback } from 'react';

import { animated as a, config, useSpring } from 'react-spring';
import Bike from '../../../../Components/Logos/Bike';
import Cloud from './Cloud';
import CloudBlue from './CloudBlue';
import Sun from './Sun';
import Plane from '../../../../Components/Logos/Plane';
import Landscape from './Landscape';

import getPosition from '../../../../Commons/Utils/getPosition';

interface HobbiesBannerProps {
  title: string;
}

export const BannerContainer = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 1000px;
`;

const HobbiesBanner = ({ title }: HobbiesBannerProps) => {
  const rootNode = useRef<any>();
  const [{ left: propsBike }, setBike] = useSpring(() => ({ left: 0 }));
  const [{ top: propsSun }, setSun] = useSpring(() => ({ top: 8 }));
  const [{ left: propsClouds }, setClouds] = useSpring(() => ({ left: 40 }));
  const [{ left: propsPlane }, setPlane] = useSpring(() => ({ left: 60 }));
  const onScroll = useCallback(() => {
    if (rootNode.current) {
      const topScroll = rootNode.current.getBoundingClientRect().top as number;
      const positionBike = getPosition(
        0,
        0,
        -window.innerHeight,
        77,
        topScroll
      );
      const positionSun = getPosition(
        window.innerHeight / 5,
        8,
        -window.innerHeight / 10,
        12,
        topScroll
      );
      const positionCloud = getPosition(
        window.innerHeight / 5,
        40,
        -window.innerHeight / 5,
        50,
        topScroll
      );
      const positionPlane = getPosition(
        window.innerHeight / 5,
        60,
        -window.innerHeight / 5,
        96,
        topScroll
      );
      setBike({ left: positionBike });
      setSun({ top: positionSun });
      setClouds({ left: positionCloud });
      setPlane({ left: positionPlane });
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const positionBike = propsBike.interpolate(y => `${y}%`);
  const positionSun = propsSun.interpolate(y => `${y}%`);
  const positionPlane = propsPlane.interpolate(y => `${y}%`);
  const positionCloudOne = propsClouds.interpolate(y => `${y}%`);
  const positionCloudTwo = propsClouds.interpolate(y => `${Number(y) - 5}%`);
  const positionBlueCloud = propsClouds.interpolate(y => `${Number(y) + 6}%`);
  return (
    <BannerContainer ref={rootNode}>
      <Landscape>
        <Bike
          left={positionBike}
          top="65%"
          height="176.9455"
          width="308.5"
          position="absolute"
        />
        <Cloud left={positionCloudOne} top="11%" width={63} height={39} />
        <Cloud left={positionCloudTwo} top="16%" width={47} height={30} />
        <CloudBlue left={positionBlueCloud} top="5%" width={119} height={80} />
        <Sun top={positionSun} />
        <Plane
          left={positionPlane}
          top="13%"
          width="52.5"
          height="33.4"
          position="absolute"
        />
      </Landscape>
    </BannerContainer>
  );
};

export default HobbiesBanner;
