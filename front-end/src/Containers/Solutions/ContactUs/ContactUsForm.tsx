import * as React from 'react';
import { observer } from 'mobx-react';
import { useRef, useState } from 'react';
import { TextField, Button, FormControl } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import ReCAPTCHA from 'react-google-recaptcha';
import useStores from '../../../Commons/Hooks/Stores';
import { MessageData } from '../../../Commons/Stores/MessagesStore';

const StyledContainer = styled.div`
  margin: 20px;
  padding-bottom: 30px;
  & .MuiInputBase-formControl {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${props => props.theme.palette.white};
    }
    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${props => props.theme.palette.white};
      }
    }
  }
  & .MuiFormLabel-root {
    color: ${props => props.theme.palette.white};
  }
  & .MuiInputBase-input {
    color: ${props => props.theme.palette.white};
  }
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

interface DataForm {
  name: string;
  email: string;
  message: string;
}

const ContactUsForm = observer(() => {
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
    <StyledContainer>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        onChange={onSubmit}
        sitekey="6LcI_eUUAAAAALK2sEEjyotjnms3HIJXLGgIaHr5"
      />
      {success ? (
        <Alert variant="filled" severity="success">
          Thanks for your messages :)
        </Alert>
      ) : null}
      <form autoComplete="off" onSubmit={handleSubmit(activateCaptcha)} id="form" ref={formRef}>
        <StyledFormContainer>
          <FormControl margin="normal" fullWidth>
            <TextField
              id="name"
              name="name"
              error={!!errors.name}
              helperText={errors.name ? errorMessage : ''}
              label="Name"
              variant="outlined"
              fullWidth
              size="medium"
              inputRef={register({ required: true })}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              size="medium"
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
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              name="message"
              size="medium"
              error={!!errors.message}
              helperText={errors.message ? errorMessage : ''}
              multiline
              fullWidth
              inputRef={register({ required: true })}
              minRows={4}
            />
          </FormControl>
        </StyledFormContainer>
        <StyledButton variant="contained" color="primary" type="submit" endIcon={<SendIcon />}>
          Send
        </StyledButton>
      </form>
    </StyledContainer>
  );
});

export default ContactUsForm;
