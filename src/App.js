import './App.css';
import { Box } from '@mui/material';
import Money from './pages/Money';

function App() {
  return (
    <Box className="relative h-[100vh] flex items-center justify-center w-[80%] md:w-[50%] xl-w-[50%] m-auto">
      <Money/>
    </Box>
    
  );
}

export default App;
