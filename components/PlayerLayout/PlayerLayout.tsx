import { Box } from '@chakra-ui/layout';
import { Sidebar } from '~c/Sidebar/Sidebar';

export const PlayerLayout: React.FC = ({ children }) => {
  return (
    <main className="main">
      <Box sx={{ display: 'flex', height: 'auto' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '250px' }}>
          <Sidebar />
        </Box>

        <Box sx={{ marginLeft: '250px', width: '100%' }}>main</Box>
      </Box>
      <Box sx={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: '100px' }}>player</Box>
    </main>
  );
};
