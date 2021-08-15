import { Button, Container, Select, TextField } from "@material-ui/core";
import { InputLabel, FormControl, MenuItem } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
// import CategoryDialog from "components/CategoryDialog";
import CategoryList from "components/Category/CategoryList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
    input: {
      height: 55,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

const ExpenseCategory = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Home",
      parent_id: undefined,
      created_at: "2021/08/15",
      children: [
        {
          id: 2,
          name: "Electricity",
          parent_id: undefined,
          created_at: "2021/08/15",
        },
        {
          id: 3,
          name: "Water",
          parent_id: undefined,
          created_at: "2021/08/15",
        },
        {
          id: 4,
          name: "Other",
          parent_id: undefined,
          created_at: "2021/08/15",
        },
      ],
    },
    {
      id: 5,
      name: "Meal",
      parent_id: 1,
      created_at: "2021/08/15",
      children: [
        {
          id: 3,
          name: "Breakfas",
          parent_id: undefined,
          created_at: "2021/08/15",
        },
        {
          id: 4,
          name: "Dinner",
          parent_id: undefined,
          created_at: "2021/08/15",
        },
      ],
    },
  ]);
  const [parentCate, setParentCate] = useState("TEST");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setParentCate(event.target.value as string);
  };

  return (
    <Container maxWidth="md">
      <h1>Expense Category</h1>
      <form className={classes.root}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Parent Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={parentCate}
            onChange={handleChange}
            label="Parent Category"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            InputProps={{
              className: classes.input,
            }}
            variant="outlined"
            label="Category"
          />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.input}>
          Add
        </Button>
      </form>
      <CategoryList categories={categories} />
    </Container>
  );
};

export default ExpenseCategory;
