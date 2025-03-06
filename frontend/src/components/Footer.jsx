import { Box, Container, Grid, Typography, Link as MuiLink, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: '#fff',
        pt: 6,
        pb: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink component={Link} to="/" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Home
              </MuiLink>
              <MuiLink component={Link} to="/all-categories" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Categories
              </MuiLink>
              <MuiLink component={Link} to="/all-products" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Products
              </MuiLink>
              <MuiLink component={Link} to="/aboutus" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                About Us
              </MuiLink>
              <MuiLink component={Link} to="/contactus" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Contact Us
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
              Customer Service
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <MuiLink component={Link} to="/shipping" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Shipping
              </MuiLink>
              <MuiLink component={Link} to="/return&refund" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Return & Refund
              </MuiLink>
              <MuiLink component={Link} to="/terms&conditions" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Terms & Conditions
              </MuiLink>
              <MuiLink component={Link} to="/privacy-policy" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                Privacy Policy
              </MuiLink>
              <MuiLink component={Link} to="/faq" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                FAQ
              </MuiLink>
              <MuiLink 
                component={Link} 
                to="/track-order" 
                sx={{ 
                  color: '#ccc', 
                  '&:hover': { color: '#fff' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <LocalShippingIcon fontSize="small" />
                Track Order
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                Email: support@trickstore.com
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                Phone: +27 123 456 7890
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                Address: 123 Store Street,<br />
                Cape Town, South Africa
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc', mb: 2 }}>
              Subscribe to our newsletter for updates and exclusive offers!
            </Typography>
            <Box component="form" noValidate sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Enter your email"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Box mt={3}>
              <Typography variant="h6" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
                Follow Us
              </Typography>
              <Box display="flex" gap={2}>
                <MuiLink href="https://facebook.com" target="_blank" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                  <FacebookIcon />
                </MuiLink>
                <MuiLink href="https://twitter.com" target="_blank" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                  <TwitterIcon />
                </MuiLink>
                <MuiLink href="https://instagram.com" target="_blank" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                  <InstagramIcon />
                </MuiLink>
                <MuiLink href="https://youtube.com" target="_blank" sx={{ color: '#ccc', '&:hover': { color: '#fff' } }}>
                  <YouTubeIcon />
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box 
          mt={4} 
          pt={3} 
          textAlign="center"
          sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            © {new Date().getFullYear()} Trick Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 