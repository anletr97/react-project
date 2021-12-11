import {
    Button,
    CircularProgress,
    Container,
    createStyles,
    FormControl,
    makeStyles,
    Modal,
    Theme,
    Typography
} from '@material-ui/core';
import campaignApi from 'api/services/campaign';
import { useCampaignId } from 'hooks';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 350,
      height: 150,
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
      borderRadius: '16px',
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
        height: '100vh',
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'center',
    },
    item: {
      marginBottom: theme.spacing(2),
      width: '100%',
      flexShrink: 3,
    },
  }),
);

export type FormProps = {
  open: boolean;
  toggleModal: () => void;
};

const DonateForm = ({ open, toggleModal }: FormProps) => {
  const id = useCampaignId();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = { amount: parseInt(amount) };
    setLoading(true);
    campaignApi.donateToCampaignId(body, id).then((res) => {
      if (res) {
        console.log(res);
        toggleModal();
      }
    });
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target?.value?.replaceAll(',', '').replaceAll(' VND', ''));
  };

  const classes = useStyles();
  return (
    <Modal open={open} onClose={toggleModal}>
      <Container className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h5" align="center">
            QUYÊN GÓP NGAY
          </Typography>
        </div>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={onSubmit}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <FormControl
            style={{
              width: '100%',
            }}
          >
            <NumberFormat
              placeholder="10,000,000 VND"
              style={{ marginBottom: '6px', textAlign: 'right' }}
              thousandSeparator={true}
              suffix={' VND'}
              min={0}
              value={amount}
              onChange={handleChangeAmount}
              required={true}
            />
          </FormControl>
          {!loading && (
            <Button
              className={classes.item}
              type="submit"
              variant="contained"
              style={{ width: '100%', color: '#fff', backgroundColor: '#c0145e' }}
            >
              QUYÊN GÓP
            </Button>
          )}

          {loading && <CircularProgress />}
        </form>
      </Container>
    </Modal>
  );
};
export default DonateForm;
