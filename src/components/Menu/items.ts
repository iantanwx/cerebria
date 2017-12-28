interface MenuItem {
  path: string;
  name: string;
}

const MenuItems: MenuItem[] = [
  { path: '/log', name: 'Log' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

export default MenuItems;
