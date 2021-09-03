import { PATH, MENU_ITEM } from 'utils/constants';
import { ExpenseTracker } from 'pages/ExpenseTracker';
import { AccountBalance, ListAlt } from '@material-ui/icons';

const icons = { AccountBalance, ListAlt };

interface MenuItem {
  path: string;
  text: string;
  icon: keyof typeof icons;
  component: React.FC;
}

export const menuItems: MenuItem[] = [
  {
    path: PATH.EXPENSE,
    text: MENU_ITEM.EXPENSE,
    icon: 'AccountBalance',
    component: ExpenseTracker,
  },
  // {
  //   path: PATH.EXPENSE_CATEGORY,
  //   text: MENU_ITEM.EXPENSE_CATEGORY,
  //   icon: 'ListAlt',
  //   component: ExpenseCategory,
  // },
  // {
  //   path: '/transaction-item',
  //   text: 'ite,',
  //   icon: 'ListAlt',
  //   component: TransactionItem,
  // },
];
