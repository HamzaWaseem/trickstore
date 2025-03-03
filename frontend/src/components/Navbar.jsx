import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h5" 
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 1, 
              color: '#fff', 
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: 1
            }}
          >
            TRICK STORE
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button component={Link} to="/" sx={{ color: '#fff', px: 2, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
              Home
            </Button>
            <Button component={Link} to="/all-categories" sx={{ color: '#fff', px: 2, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
              Categories
            </Button>
            <Button component={Link} to="/all-products" sx={{ color: '#fff', px: 2, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
              Products
            </Button>
            <Button component={Link} to="/aboutus" sx={{ color: '#fff', px: 2, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
              About Us
            </Button>
            <Button component={Link} to="/contactus" sx={{ color: '#fff', px: 2, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 