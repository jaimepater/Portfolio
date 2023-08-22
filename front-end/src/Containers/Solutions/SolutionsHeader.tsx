import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../Components/Logo';

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.div`
  margin-left: 10px;
`;

export const StyledMenuIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const SolutionsHeader = () => {
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <StyledMenuIcon>
          <Logo />
          {showText && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 1],
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                times: [0, 0.8, 1],
              }}
            >
              <StyledText>JP Dev Solutions</StyledText>
            </motion.div>
          )}
        </StyledMenuIcon>
      </StyledToolbar>
    </AppBar>
  );
};

export default SolutionsHeader;
