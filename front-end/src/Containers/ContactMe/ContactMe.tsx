import * as React from 'react';
import { observer } from 'mobx-react';
import { useRef, useState } from 'react';
import { Container, TextField, InputAdornment, Button, Paper } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import { useForm } from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import ReCAPTCHA from 'react-google-recaptcha';
import useStores from '../../Commons/Hooks/Stores';
import H1 from '../../Components/H1';
import { MessageData } from '../../Commons/Stores/MessagesStore';

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledPaper = styled(Paper)`
  width: 70%;
  padding: 20px;
  ${H1} {
    font-size: ${props => props.theme.fontSize.lg};
  }
`;

interface DataForm {
  name: string;
  email: string;
  message: string;
}

const ContactMe = observer(() => {
  const {
    messagesStore: { setMessage },
  } = useStores();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<MessageData>({
    name: '',
    email: '',
    message: '',
  });
  const { register, handleSubmit, errors } = useForm<DataForm>();
  const recaptchaRef = useRef<ReCAPTCHA>();
  const formRef = useRef<HTMLFormElement>(null);
  const errorMessage = 'This field is require';

  const onSuccess = () => {
    if (formRef) {
      formRef.current?.reset();
      setSuccess(true);
    }
  };

  const onSubmit = () => {
    setMessage(data, onSuccess);
  };

  const activateCaptcha = (dataForm: DataForm) => {
    if (recaptchaRef && recaptchaRef.current) {
      setData({
        ...dataForm,
      });
      recaptchaRef.current.execute();
    }
  };

  return (
    <>
      <StyledContainer>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          onChange={onSubmit}
          sitekey="6LcI_eUUAAAAALK2sEEjyotjnms3HIJXLGgIaHr5"
        />
        <StyledPaper elevation={3}>
          <Grid container direction="column" justify="center" alignItems="center">
            <H1>Contact me</H1>
            {success ? (
              <Alert variant="filled" severity="success">
                Thanks for your messages :)
              </Alert>
            ) : null}
            <form
              autoComplete="off"
              onSubmit={handleSubmit(activateCaptcha)}
              id="form"
              ref={formRef}
            >
              <div>
                <TextField
                  id="name"
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name ? errorMessage : ''}
                  label="Name"
                  fullWidth
                  inputRef={register({ required: true })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  error={!!errors.email}
                  helperText={errors.email ? errorMessage : ''}
                  fullWidth
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  id="message"
                  label="message"
                  name="message"
                  error={!!errors.message}
                  helperText={errors.message ? errorMessage : ''}
                  multiline
                  fullWidth
                  inputRef={register({ required: true })}
                  rowsMax="4"
                />
              </div>
              <StyledButton
                variant="contained"
                color="primary"
                type="submit"
                endIcon={<SendIcon />}
              >
                Send
              </StyledButton>
            </form>
          </Grid>
        </StyledPaper>
      </StyledContainer>
    </>
  );
});

export default ContactMe;
