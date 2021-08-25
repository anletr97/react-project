import { PATH, MENU_ITEM } from "../constants";
import {
  HabitTracker,
  ExpenseTracker,
  SleepTracker,
  ExpenseCategory,
} from "../pages";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export const Routes = [
  {
    path: PATH.HABIT,
    text: MENU_ITEM.HABIT,
    icon: "icon",
    component: HabitTracker,
  },
  {
    path: PATH.EXPENSE,
    text: MENU_ITEM.EXPENSE,
    icon: "icon",
    component: ExpenseTracker,
  },
  {
    path: PATH.SLEEP,
    text: MENU_ITEM.SLEEP,
    icon: "icon",
    component: SleepTracker,
  },
  {
    path: PATH.EXPENSE_CATEGORY,
    text: MENU_ITEM.EXPENSE_CATEGORY,
    icon: LocalAtmIcon,
    component: ExpenseCategory,
  },
];
