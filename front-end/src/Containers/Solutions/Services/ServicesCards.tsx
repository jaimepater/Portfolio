import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { Solution } from '../../../Definitions/definitions';
import ServicesCard from './ServicesCard';
import ServicesCardContent from './ServicesCardContent';

const StyledModal = styled(motion.div)`
  width: 50%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* For tablets and smaller devices */
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledModalContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background: rgb(58, 150, 194);
`;

const StyledContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

interface ServicesCardsProps {
  solutionList?: Solution[];
}

const ServicesCards = ({ solutionList }: ServicesCardsProps) => {
  const [selected, setSelected] = useState<Solution | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      });
    };
  }, []);

  const handleClose = useCallback(() => {
    const { body } = document;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    setSelected(null);
  }, []);

  const openModal = (item: Solution) => {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const { body } = document;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    setSelected(item);
  };

  return (
    <StyledContainer>
      <LayoutGroup>
        <Grid container spacing={4}>
          {solutionList?.map(item => (
            <ServicesCard key={item.name} item={item} isModal={false} handleSelect={openModal} />
          ))}
        </Grid>
        <AnimatePresence>
          {selected !== null && (
            <div
              style={{
                position: 'fixed',
                height: '100vh',
                width: '100%',
                zIndex: 3,
                top: 0,
                left: 0,
                marginTop: '100px',
              }}
              className="fixed"
            >
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <StyledModalContainer key="modal" style={{}}>
                  <StyledModal layoutId={`${selected.name}`} initial={{ borderRadius: '1.2rem' }}>
                    <ServicesCardContent isModal item={selected} handleClose={handleClose} />
                  </StyledModal>
                </StyledModalContainer>
                <StyledBackdrop
                  key="backdrop"
                  onClick={handleClose}
                  variants={{
                    hidden: {
                      opacity: 0,
                      transition: {
                        duration: 0.16,
                      },
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 0.04,
                        duration: 0.2,
                      },
                    },
                  }}
                  initial="hidden"
                  exit="hidden"
                  animate="visible"
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </StyledContainer>
  );
};
export default ServicesCards;
