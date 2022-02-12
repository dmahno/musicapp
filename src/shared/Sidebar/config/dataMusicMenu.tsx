import { MdPlaylistAdd, MdFavorite } from 'react-icons/md';
import { InavigationMenuProps } from './dataPageMenu';

export const musicMenu: InavigationMenuProps[] = [
  {
    id: 0,
    name: 'Create playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    id: 1,
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
];
