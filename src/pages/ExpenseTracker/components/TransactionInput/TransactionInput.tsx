import './test.css';

import DateFnsUtils from '@date-io/date-fns';
import {
  Button as Btn,
  Container,
  createStyles,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  Modal,
  Select,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Button, ButtonIcon } from 'components';
import React, { useState } from 'react';
import { DateUtils } from 'utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 400,
      height: 510,
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
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(2),
      width: '100%',
      flexShrink: 3,
    },
  }),
);
type InputProps = {
  onAdd: TransactionAddForm;
};

const TransactionInput: React.FC<InputProps> = ({ onAdd }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string>(DateUtils.getCurrentDateStr());
  const [amount, setAmount] = useState<number>(0);
  const [transaction_type, setType] = useState<string>('expense');
  const [name, setName] = useState<string>('');

  const type_expense = 'expense';
  const type_income = 'income';
  const onSubmit: TFormEvent = (e) => {
    e.preventDefault();

    onAdd(name, transaction_type, amount, date);
    // Reset form value after submit
    setName('');
    setAmount(0);
    setType(type_expense);
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

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  return (
    <>
      <ButtonIcon
        label="Add"
        icon="Add"
        width={60}
        onClick={() => setIsOpen(true)}
      />
      <Modal open={isOpen}>
        <Container className={classes.container}>
          <div className={classes.header}>
            <Typography variant="h4" align="center">
              Add Transaction
            </Typography>
          </div>
          <form className={classes.form} autoComplete="off" onSubmit={onSubmit}>
            <FormControl variant="outlined" className={classes.item}>
              <InputLabel htmlFor="expense-type">Expense Type</InputLabel>
              <Select
                native
                value={transaction_type}
                onChange={handleTypeChange}
                label="Expense Type"
              >
                <option value={type_expense}>Expense</option>
                <option value={type_income}>Income</option>
              </Select>
            </FormControl>

            <FormControl
              style={{
                width: '100%',
              }}
            >
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

            <FormControl
              style={{
                width: '100%',
                marginBottom: '8px',
              }}
            >
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
              style={{ width: '100%' }}
            >
              Add
            </Btn>
            <div className={classes.item}>
              <Button
                label="Cancel"
                onClick={() => setIsOpen(false)}
                color="#eaeaea"
              />
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default TransactionInput;
