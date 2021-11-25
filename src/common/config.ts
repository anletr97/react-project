import { Home, About } from 'pages';

export const Path = {
  HOME: '/home',
  ABOUT: '/about',
};

/**
 * Navigation Item
 */
export const NavItems = [
  { name: 'Trang Chủ', path: Path.HOME },
  { name: 'Về chúng tôi', path: Path.ABOUT },
  // TODO: Dummy page will be replaced later
  { name: 'Tin tức', path: Path.ABOUT },
  { name: 'Liên hệ', path: Path.ABOUT },
];

export const Routes = [
  {
    path: Path.HOME,
    page: Home,
  },
  {
    path: Path.ABOUT,
    page: About,
  },
  {
    path: '/test02',
    page: Home,
  },
  {
    path: '/test03',
    page: Home,
  },
];
