import { PATH, MENU_ITEM } from "../constants";
import { ExpenseTracker } from "components";

export const Routes = [
  {
    path: "/",
    text: MENU_ITEM.EXPENSE,
    icon: "icon",
    component: ExpenseTracker,
  },
];
