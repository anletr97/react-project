type TColor = 'success' | 'info' | 'warning' | 'error';

interface IMessage {
  message_type: TColor;
  title: string;
  message: string;
  open: boolean;
}

export default IMessage;
