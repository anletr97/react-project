import { List } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CategoryItem from "components/Category/CategoryItem";
import Category from "interfaces/Category";
import React from "react";

interface ListProps {
  categories: Category[];
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

const CategoryList = ({ categories }: ListProps) => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </List>
    </div>
  );
};

export default CategoryList;
