import { Box, Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const FloatingCart = ({ count }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000
      }}
    >
      <IconButton
        component={Link}
        to="/cart"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          width: 60,
          height: 60,
          '&:hover': {
            backgroundColor: '#333',
            transform: 'translateY(-5px)'
          },
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Badge
          badgeContent={count}
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '0.8rem',
              height: '24px',
              minWidth: '24px',
              padding: '0 6px'
            }
          }}
        >
          <ShoppingCart sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default FloatingCart; 