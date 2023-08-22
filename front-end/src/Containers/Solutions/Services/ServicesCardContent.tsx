import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { Solution, SolutionsImages } from '../../../Definitions/definitions';
import getServicesImages from '../../../Commons/Utils/getServicesImages';

interface ServicesCardContentProps {
  item: Solution;
  handleClose?: () => void;
  isModal: boolean;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  overflow: hidden;
`;

const StyledTitle = styled(Typography)`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: bold;
  color: ${props => props.theme.palette.white};
  text-align: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const StyledDescription = styled(Typography)`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 400;
  color: ${props => props.theme.palette.white};
  text-align: center;
  padding-bottom: 10px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledCloseIcon = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 5;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(58, 150, 194);
  cursor: pointer;
  color: #3f51b5;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTextContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const ServicesCardContent = ({ item, isModal, handleClose }: ServicesCardContentProps) => {
  const { name, shortDescription, img, description } = item;

  return (
    <Container>
      <motion.div layoutId={`img-${name}`}>
        <ImageContainer>
          <StyledImage src={getServicesImages(img as SolutionsImages)} alt={name} />
        </ImageContainer>
      </motion.div>
      <StyledTextContainer>
        <motion.div layoutId={`title-${name}`}>
          <StyledTitle>{name}</StyledTitle>
        </motion.div>
        <motion.div layoutId={`additional-${name}`}>
          <StyledDescription>{isModal ? description : shortDescription}</StyledDescription>
        </motion.div>
      </StyledTextContainer>
      {isModal ? (
        <StyledCloseIcon
          layoutId={`close-${name}`}
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CloseIcon />
        </StyledCloseIcon>
      ) : (
        <motion.div layoutId={`close-${name}`} />
      )}
    </Container>
  );
};

export default ServicesCardContent;
