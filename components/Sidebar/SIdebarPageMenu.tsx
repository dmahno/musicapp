import { MdHome, MdSearch, MdFavorite } from 'react-icons/md';
import { IconType } from 'react-icons/lib';

export type UniqueId = number;

export interface InavigationMenuProps {
  id: UniqueId;
  name: string;
  icon: IconType;
  route: string;
}

export const navigationMenu: InavigationMenuProps[] = [
  {
    id: 0,
    name: 'Home',
    icon: MdHome,
    route: '/#',
  },
  {
    id: 1,
    name: 'Search',
    icon: MdSearch,
    route: '/#Search',
  },
  {
    id: 2,
    name: 'You library',
    icon: MdFavorite,
    route: '/#Lib',
  },
];
