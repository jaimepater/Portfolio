import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import useStores from '../../../Commons/Hooks/Stores';
import ContactUSBanner from './ContactUSBanner';
import ContactUsForm from './ContactUsForm';

const StyledContainer = styled.div`
  margin-top: 10vw;
  margin-bottom: 10vw;
  padding-left: 16px;
  padding-right: 16px;
`;

const ContactUS = observer(() => {
  const { solutionStore } = useStores();
  useEffect(() => {
    solutionStore.getProfileData();
  }, [solutionStore]);

  const { contactTitle } = solutionStore;

  return (
    <StyledContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <ContactUSBanner title={contactTitle} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </StyledContainer>
  );
});

export default ContactUS;
