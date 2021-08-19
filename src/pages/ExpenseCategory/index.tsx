import { Container } from "@material-ui/core";
import CategoryInput from "components/Category/CategoryInput";
import CategoryList from "components/Category/CategoryList";
import Category from "interfaces/Category";
import React, { useState } from "react";

const ExpenseCategory = () => {
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

  const addCategory = (task: Category) => {
    console.log(task);
  };

  return (
    <Container maxWidth="md">
      <h1>Expense Category</h1>
      <CategoryInput onAdd={addCategory} />
      <CategoryList categories={categories} />
    </Container>
  );
};

export default ExpenseCategory;
