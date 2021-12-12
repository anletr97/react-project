import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert } from '@material-ui/lab';
import authApi from 'api/services/auth';
import { FULL_NAME, Path } from 'common';
import React, { useState } from 'react';
import Auth from './Auth';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validatePassword()) {
      setShowMessage(true);
      return;
    }
    setLoading(true);
    const body = {
      full_name: fullname,
      email,
      password,
    };
    authApi.register(body).then((res) => {
      if (res) {
        console.log(res);
        localStorage.setItem(FULL_NAME, res.full_name);
        history.push('/success');
      }
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const validatePassword = () => {
    if (password != confirmPassword) {
      setMessage('Mật khẩu không trùng khớp!');
      return false;
    }

    return true;
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <Auth>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h3" style={{ paddingTop: '12px' }}>
          ĐĂNG KÍ
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="full_name"
            label="Họ tên"
            name="full_name"
            autoFocus
            onChange={handleFullnameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Xác nhận mật khẩu"
            type="password"
            id="confirm_password"
            onChange={handleConfirmPasswordChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginTop: '16px', backgroundColor: '#c0145e', color: '#fff' }}
          >
            Đăng kí
          </Button>
          <Grid container>
            <Grid item style={{ padding: '2px' }}>
              <Link href={Path.LOGIN} variant="body2">
                {'Đăng nhập'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Modal
        open={isLoading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 400,
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      </Modal>
      <Snackbar open={showMessage} autoHideDuration={2000} onClose={toggleMessage}>
        <Alert onClose={toggleMessage} severity="error" style={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Auth>
  );
};

export default SignUp;
