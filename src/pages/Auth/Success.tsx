import { Avatar, Box, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import Auth from './Auth';
import Done from '@material-ui/icons/Done';
import { FULL_NAME, Path } from 'common';

const Success = () => {
  const fullName = localStorage.getItem(FULL_NAME) || 'bạn';
  return (
    <Auth>
      <Box
        sx={{
          my: 20,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar style={{ backgroundColor: '#84B946' }}>
          <Done fontSize="large" height={150} width={150} />
        </Avatar>
        <Typography component="h1" variant="h3" style={{ padding: '12px' }}>
          ĐĂNG KÍ THÀNH CÔNG
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          style={{ padding: '12px', textAlign: 'center' }}
        >
          Chúc mừng {fullName} đã đăng kí tài khoản thành công. Hãy kiểm tra E-mail
          và nhấn vào link xác nhận để kích hoạt tài khoản.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Grid container>
            <Grid item style={{ padding: '2px' }}>
              <Link href={Path.LOGIN} variant="body2">
                {'Quay lại màn hình đăng nhập'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Auth>
  );
};

export default Success;
