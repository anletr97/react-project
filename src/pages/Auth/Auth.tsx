import {
    createTheme, CssBaseline, Grid, Paper, ThemeProvider
} from '@material-ui/core';
import React, { ReactNode } from 'react';

export type AuthProps = {
  children: ReactNode;
};

const theme = createTheme();

const Auth = ({ children }: AuthProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: 'url(images/banner.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {children}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Auth;
