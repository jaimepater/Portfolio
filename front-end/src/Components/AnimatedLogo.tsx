import React, { useRef } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';

interface AnimatedLogoProps {
  width?: number;
  height?: number;
}

const AnimatedLogo = ({ width = 60, height = 60 }: AnimatedLogoProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start center'] });
  const [y, setY] = React.useState(0);
  const [xp, setXp] = React.useState(0);
  const [xj, setXj] = React.useState(0);

  const spring = useSpring(scrollYProgress, { stiffness: Math.max(700 * 120, 0), damping: 20 * 5 });
  const yMotion = useTransform(spring, [0, 1], [1, 420]);
  const xpMotion = useTransform(spring, [0, 1], [-50, 0]);
  const xjMotion = useTransform(spring, [0, 1], [50, 0]);
  useMotionValueEvent(yMotion, 'change', latest => {
    setY(latest);
  });
  useMotionValueEvent(xpMotion, 'change', latest => {
    setXp(latest);
  });
  useMotionValueEvent(xjMotion, 'change', latest => {
    setXj(latest);
  });

  const StyledTextP = styled.text`
    transform: translate(${xp}px, ${y}px);
  `;

  const StyledTextJ = styled.text`
    transform: translate(${xj}px, ${y}px);
  `;

  return (
    <div ref={ref}>
      <motion.svg
        id="animated-svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height * 4}
        viewBox="-31 -1 122 488"
      >
        <motion.circle cx="30" cy="410" r="60" fill="#3f51b5" stroke="#3f51b5" strokeWidth="2" />
        <StyledTextJ transform="translate(0 70)" fill="#fff" fontSize="90" fontFamily="Italianno">
          <tspan x="0" y="0">
            J
          </tspan>
        </StyledTextJ>

        <StyledTextP transform="translate(25 20)" fill="#fff" fontSize="90" fontFamily="Italianno">
          <tspan x="24" y="17">
            p
          </tspan>
        </StyledTextP>
      </motion.svg>
    </div>
  );
};

export default AnimatedLogo;
