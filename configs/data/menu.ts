export interface IMenuItem {
  id: number;
  menuItem: string;
  route: string;
}
export const MenuLists = [
  {
    id: 1,
    menuItem: 'Trang chủ',
    route: '/',
  },
  {
    id: 2,
    menuItem: 'Tote collection',
    route: '/tote-collection',
  },
  {
    id: 3,
    menuItem: 'Về chúng tôi',
    route: '/about-us',
  },
  {
    id: 4,
    menuItem: 'Liên hệ',
    route: '/contact',
  },
];
