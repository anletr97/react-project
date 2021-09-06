import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { AlertTitle } from '@material-ui/lab';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import IMessage from 'models/message';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast: React.FC<IMessage> = (props) => {
  const [alert, setAlert] = useState<IMessage>({
    message_type: props.message_type,
    title: props.title,
    message: props.message,
    open: true,
  });

  console.log('🚀 ~ file: Toast.tsx ~ line 18 ~ props', props);
  console.log('🚀 ~ file: Toast.tsx ~ line 19 ~ alert', alert);

  const closeToast = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    if (alert.open) {
      console.log(
        '🚀 ~ file: Toast.tsx ~ line 27 ~ closeToast ~ alert.open',
        alert.open,
      );
      setAlert({
        message_type: 'info',
        message: '',
        title: '',
        open: false,
      });
    }
  };
  return alert.open === true ? (
    <Snackbar open={alert.open} autoHideDuration={4000} onClose={closeToast}>
      <Alert severity={alert.message_type}>
        <AlertTitle>{alert.title}</AlertTitle>
        {alert.message}
      </Alert>
    </Snackbar>
  ) : null;
};

export default Toast;
