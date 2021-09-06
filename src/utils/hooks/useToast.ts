import { useState } from 'react';
import IMessage from 'models/message';

const useToast = () => {
  const [messageObj, setMessageObj] = useState<IMessage>({
    message_type: 'info',
    title: '',
    message: '',
    open: false,
  });

  const toastSuccess = (message: string) => {
    setMessageObj({
      message_type: 'success',
      title: 'Success',
      message: message,
      open: true,
    });
  };

  const toastError = (message: string) => {
    setMessageObj({
      message_type: 'error',
      title: 'Error',
      message: message,
      open: true,
    });
  };

  return { messageObj, toastSuccess, toastError };
};

export default useToast;
