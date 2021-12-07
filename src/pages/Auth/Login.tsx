import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Auth from './Auth';
import { useTheme } from '@material-ui/styles';
import authApi from 'api/services/auth';
import { Redirect } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };

    authApi.login(body).then((res) => {
      // TODO confirm what happen when there's access token
      // Redirect after login
      console.log(res);
      if (res?.access_token) {
        localStorage.setItem('access_token', res.access_token);
        return <Redirect to="/home" />;
      }
    });
    return;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const theme = useTheme();

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3" style={{ padding: '12px' }}>
          ĐĂNG NHẬP
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Ghi nhớ đăng nhập"
          />
          <Button type="submit" fullWidth variant="contained">
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item style={{ padding: '2px' }}>
              <Link href="#" variant="body2">
                {'Bạn chưa có tài khoản? Đăng ký ngay!'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Auth>
  );
};

export default Login;
