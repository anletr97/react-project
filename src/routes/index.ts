import { PATH, MENU_ITEM } from "../constants";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { ExpenseTracker, HabitTracker } from "components";

export const Routes = [
  {
    path: "/",
    text: MENU_ITEM.EXPENSE,
    icon: "icon",
    component: ExpenseTracker,
  },
  {
    path: PATH.HABIT,
    text: MENU_ITEM.HABIT,
    icon: "icon",
    component: HabitTracker,
  },
];
