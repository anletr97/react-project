import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const TransactionSumary = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Income
            </Typography>
            <Typography component="span" variant="body2">
              13,000,000 VND
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Expense
            </Typography>
            <Typography component="span" variant="body2">
              13,000,000 VND
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Account
            </Typography>
            <Typography component="span" variant="body2">
              13,000,000 VND
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TransactionSumary;
