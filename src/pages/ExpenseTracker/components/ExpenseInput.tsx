import DateFnsUtils from '@date-io/date-fns';
import {
  Button as Btn,
  Container,
  FormControl,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  Grid,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import AddIcon from '@material-ui/icons/Add';
import React, { Fragment, FocusEventHandler, useState } from 'react';
import { Button } from 'components/Button';
import { DateUtils } from 'utils/date-utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 360,
      height: 410,
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
      padding: theme.spacing(2),
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(2),
      width: '100%',
    },
  }),
);

type InputProps = {
  onAdd: AddExpenseForm;
};

const ExpenseInput: React.FC<InputProps> = ({ onAdd }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string>(DateUtils.getCurrentDateStr());
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const onSubmit: TFormEvent = (e) => {
    e.preventDefault();

    onAdd(name, amount, date);
    setName('');
    setAmount(0);
    // Close modal
    setIsOpen(!isOpen);
  };

  const handleNameChange: TChangeEvent = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange: TChangeEvent = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setDate(DateUtils.dateToStr(date));
  };

  const handleAddCommas = (
    e: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setAmount(parseInt(parseInt(e.toString()).toLocaleString('en')));
  };

  return (
    <Fragment>
      <div className="card__header">
        <h1>Expense Tracker</h1>
        <Button
          label="Add"
          color="primary"
          icon="Add"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Modal open={isOpen}>
        <Container className={classes.container}>
          <Typography variant="h4" align="center" className={classes.header}>
            Add Transaction
          </Typography>
          <form className={classes.form} autoComplete="off" onSubmit={onSubmit}>
            <FormControl
              style={{
                width: '100%',
                marginBottom: '8px',
              }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  id="expense-date"
                  label="Expense Date"
                  value={date}
                  size="medium"
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <FormControl className={classes.item}>
              <TextField
                label="Amount"
                id="outlined-start-adornment"
                variant="outlined"
                size="medium"
                onChange={handleAmountChange}
                value={amount}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">VND</InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl className={classes.item} variant="outlined">
              <TextField
                label="Category"
                required={true}
                value={name}
                size="medium"
                variant="outlined"
                onChange={handleNameChange}
              />
            </FormControl>
            <Btn
              className={classes.item}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{ width: '100%' }}>
              Add Transaction
            </Btn>
            <Btn
              className={classes.item}
              variant="text"
              color="default"
              size="large"
              style={{ width: '100%' }}
              onClick={() => setIsOpen(!isOpen)}>
              Cancel
            </Btn>
          </form>
        </Container>
      </Modal>
    </Fragment>
  );
};

export default ExpenseInput;
