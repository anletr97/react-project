import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Checkbox,
  Button,
  Card,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Category from "interfaces/Category";

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
interface InputProps {
  onAdd: (category: Category) => void;
}

const CategoryInput = ({ onAdd }: InputProps) => {
  const classes = useStyles();

  const [parentCate, setParentCate] = useState("10");
  const [name, setName] = useState("");
  const [isParent, setIsParent] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setParentCate(event.target.value as string);
  };

  const handleInputChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      alert("Category is required");
    }
    // const category :Category = {
    //   name,
    //   is
    // }
    setParentCate("10");
    setIsParent(false);
    setName("");
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={onSubmit}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Parent Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={parentCate}
            onChange={handleSelectChange}
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
            value={name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={isParent}
              onChange={(e) => {
                setIsParent(e.currentTarget.checked);
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Is Parent"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.input}
        >
          Add
        </Button>
      </form>
    </Card>
  );
};

export default CategoryInput;
