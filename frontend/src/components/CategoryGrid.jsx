import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryGrid = ({ categories, title }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">{title}</Typography>
        <Link to="/categories" style={{ textDecoration: 'none' }}>
          See All Categories
        </Link>
      </Box>

      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={6} sm={4} md={3} key={category.id}>
            <Card 
              component={Link} 
              to={`/category/${category.slug}`}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              {category.image && (
                <Box
                  component="img"
                  src={category.image}
                  alt={category.name}
                  sx={{
                    width: '100%',
                    height: 140,
                    objectFit: 'cover'
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" align="center">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryGrid; 