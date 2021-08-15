import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import ICategory from "interfaces/Category";

interface ItemProps {
  category: ICategory;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      //maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const CategoryItem = ({ category }: ItemProps) => {
  const classes = useStyles();

  /**
   * Sub list
   */
  const subList = category.children ? (
    category.children.map((child) => (
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary={child.name} />
        </ListItem>
      </List>
    ))
  ) : (
    <> </>
  );

  return (
    <>
      <ListItem>
        <ListItemText primary={category.name} />
      </ListItem>
      {/* // Display sublist */}
      {subList}
    </>
  );
};

export default CategoryItem;
