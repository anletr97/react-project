import { PATH, MENU_ITEM } from "../constants";
import { ExpenseCategory, ExpenseTracker } from "components";

export const Routes = [
  {
    path: PATH.EXPENSE,
    text: MENU_ITEM.EXPENSE,
    icon: "icon",
    component: ExpenseTracker,
  },
  {
    path: PATH.EXPENSE_CATEGORY,
    text: MENU_ITEM.EXPENSE_CATEGORY,
    icon: "icon",
    component: ExpenseCategory,
  },
];
