import Link from 'next/link';
import { LinkBox, LinkOverlay, List, ListIcon, ListItem } from '@chakra-ui/layout';
import { InavigationMenuProps } from '../SIdebarPageMenu';

interface ISidebarMenu {
  menu: InavigationMenuProps[];
}

export const SidebarMenu = ({ menu }: ISidebarMenu) => {
  return (
    <nav>
      <List spacing={2}>
        {menu.map((item) => {
          const { id, name, icon, route } = item;
          return (
            <ListItem paddingX="20px" key={id}>
              <LinkBox>
                <Link href={route} passHref>
                  <LinkOverlay>
                    <ListIcon as={icon} sx={{ color: 'white' }} />
                    {name}
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};
