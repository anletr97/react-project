import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    width: "300px",
    position: "static",
    left: 50,
    top: 50,
  },
}));

const CategoryDialog: React.FC<Props> = ({ isOpen, onClose }: Props) => {
  const classes = useStyles();

  const [parentCate, setParentCate] = useState("Init");

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        className={classes.root}
      >
        <DialogTitle id="form-dialog-title">Category</DialogTitle>
        <DialogContent>
          <InputLabel id="select-id">Parent Category</InputLabel>
          <Select
            labelId="select-id"
            id="demo-simple-select"
            value={parentCate}
            fullWidth
            onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
              setParentCate(e.target.value as string);
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField
            label="Category"
            margin="dense"
            id="name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary">Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryDialog;
