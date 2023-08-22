import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { Solution } from '../../../Definitions/definitions';
import ServicesCardContent from './ServicesCardContent';

interface ServicesCardProps {
  item: Solution;
  isModal: boolean;
  handleSelect: (item: Solution) => void;
}

const StyledCard = styled(motion.div)`
  background: transparent;
  color: white;
  margin: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-bottom-color: transparent;
`;

const ServicesCard = ({ item, handleSelect, isModal }: ServicesCardProps) => {
  const { name } = item;
  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <StyledCard
        key={name}
        layoutId={`${name}`}
        onClick={() => handleSelect(item)}
        initial={{ borderRadius: '0.6rem' }}
      >
        <ServicesCardContent item={item} isModal={isModal} />
      </StyledCard>
    </Grid>
  );
};
export default ServicesCard;
