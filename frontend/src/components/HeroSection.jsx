import { Box, Typography, Button } from '@mui/material';

const HeroSection = ({ data }) => {
  if (!data) return null;

  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '60px',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#333',
          zIndex: -1
        }
      }}
    >
      <Box maxWidth="800px" p={3}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          {data.title}
        </Typography>
        <Typography 
          variant="h5" 
          paragraph
          sx={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }
          }}
        >
          {data.description}
        </Typography>
        <Button
          className="btn-12"
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            bgcolor: 'white',
            color: 'black',
            borderRadius: '50px',
            padding: '15px 30px',
            border: '2px solid #000',
            '&:hover': {
              bgcolor: 'black',
              color: 'white'
            },
            transition: 'all 0.4s'
          }}
        >
          <span>{data.button_text}</span>
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection; 