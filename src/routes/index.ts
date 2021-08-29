import { PATH, MENU_ITEM } from "../constants";
import { ExpenseCategory, ExpenseTracker } from "components";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ListAltIcon from "@material-ui/icons/ListAlt";

export const Routes = [
  {
    path: PATH.EXPENSE,
    text: MENU_ITEM.EXPENSE,
    icon: AccountBalanceIcon,
    component: ExpenseTracker,
  },
  {
    path: PATH.EXPENSE_CATEGORY,
    text: MENU_ITEM.EXPENSE_CATEGORY,
    icon: ListAltIcon,
    component: ExpenseCategory,
  },
];
