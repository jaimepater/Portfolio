/**
 *
 * BanerParellax
 *
 */
import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { useSpring, animated as a, interpolate } from 'react-spring';
import { createRef, useCallback, useEffect, useRef } from 'react';
import useVisibilitySensor from '@rooks/use-visibility-sensor';
import image from '../../../assets/Images/Experience.png';

export const ParallaxContainer = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ImageParallax = styled.div`
  width: 100%;
  height: ${(props: IImageParallax) => `${props.height}px`};
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const Title = styled.span`
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.xl};
  position: relative;
  z-index: 1;
  align-self: center;
  margin: auto;
`;

interface IParallaxContainer {
  theme: DefaultTheme;
}

interface IImageParallax {
  theme: DefaultTheme;
  height: number;
}

interface BannerParallaxProps {
  title: string;
  height: number;
}

const BannerParallax = ({ title, height }: BannerParallaxProps) => {
  const [{ top }, set] = useSpring(() => ({ top: 0 }));
  const rootNode = useRef<any>();
  const position = top.interpolate(y => y);

  // @ts-ignore
  const calc = o => `translateY(${o * -0.12}px)`;
  const onScroll = () => {
    const posY =
      (rootNode.current && rootNode.current.getBoundingClientRect().top) || 0;
    const nn = (rootNode.current && rootNode.current.scrollTop) || 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return set({ top: window.pageYOffset - posY });
  };

  const { isVisible, visibilityRect } = useVisibilitySensor(rootNode, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true
  });

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <ParallaxContainer ref={rootNode}>
      <ImageParallax height={height}>
        <Title>{title}</Title>
        <a.div
          style={{
            height: `${height * 2}px`,
            position: 'absolute',
            backgroundImage: `url(${image})`,
            transform: top.interpolate(calc),
            left: 0,
            width: '100%'
          }}
        />
      </ImageParallax>
    </ParallaxContainer>
  );
};

export default BannerParallax;
