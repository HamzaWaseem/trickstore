import { Box, IconButton } from '@mui/material';
import { Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const FloatingProfile = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 95,
        left: 10,
        zIndex: 2
      }}
    >
      <IconButton
        component={Link}
        to="/my-profile"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          width: 40,
          height: 40,
          '&:hover': {
            backgroundColor: '#333',
            transform: 'scale(1.1)'
          },
          transition: 'all 0.3s ease'
        }}
      >
        <Person />
      </IconButton>
    </Box>
  );
};

export default FloatingProfile; 