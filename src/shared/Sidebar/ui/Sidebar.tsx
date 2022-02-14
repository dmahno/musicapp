import Link from 'next/link';
import Image from 'next/image';
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from '@chakra-ui/layout';
import { navigationMenu } from '../config/dataPageMenu';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import { musicMenu } from '../config/dataMusicMenu';

//custom playlist
const playlist = new Array(30).fill(1).map((item, id) => (
  <ListItem key={id}>
    <LinkBox>
      <Link href={`/${item + id}`} passHref>
        <LinkOverlay>{`Playlist ${id++ + 1}`}</LinkOverlay>
      </Link>
    </LinkBox>
  </ListItem>
));

export const Sidebar = () => {
  return (
    <Box
      sx={{ width: '100%', height: 'calc(100vh - 100px)', background: 'black' }}
      width="100%"
      height="calc(100vh-100px)"
      background="black">
      <Box sx={{ height: '100%', overflow: 'hidden' }}>
        <Box sx={{ width: '120px', height: '80px' }}>
          <Image src={'/images/logo.svg'} layout="responsive" width={60} height={40} />
        </Box>
        <Box marginTop="20px">
          <SidebarMenu menu={navigationMenu} />
        </Box>
        <Divider sx={{ opacity: '0' }} />
        <Box marginTop="20px">
          <SidebarMenu menu={musicMenu} />
        </Box>
        <Divider sx={{ opacity: '0.15' }} marginY="10px" />
        <Box sx={{ height: '65%', overflowY: 'auto', paddingX: '20px' }}>
          <List spacing={2}>{playlist}</List>
        </Box>
      </Box>
    </Box>
  );
};
