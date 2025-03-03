import { useState } from 'react';
import { Box, Typography, IconButton, Card, CardMedia, CardContent, Button } from '@mui/material';
import { ChevronLeft, ChevronRight, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProductSlider = ({ products, title, viewAllLink }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = document.getElementById(`slider-${title}`);
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">{title}</Typography>
        <Button component={Link} to={viewAllLink}>See All Products</Button>
      </Box>

      <Box position="relative">
        <IconButton 
          onClick={() => scroll('left')}
          sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
        >
          <ChevronLeft />
        </IconButton>

        <Box
          id={`slider-${title}`}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            gap: 2,
            py: 2
          }}
        >
          {products.map((product) => (
            <Card key={product.id} sx={{ minWidth: 280, maxWidth: 280 }}>
              {(product.free_delivery || product.discount) && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    bgcolor: 'error.main',
                    color: 'white',
                    px: 1,
                    borderRadius: 1
                  }}
                >
                  {product.free_delivery ? 'Free Delivery' : `Save Rs.${product.discount}`}
                </Box>
              )}

              <CardMedia
                component="img"
                height="200"
                image={product.product_image}
                alt={product.name}
              />

              <CardContent>
                <Typography noWrap title={product.name}>{product.name}</Typography>
                <Box display="flex" gap={1} alignItems="center">
                  <Typography color="error.main" variant="h6">
                    Rs.{product.final_price}
                  </Typography>
                  {product.discount && (
                    <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                      Rs.{product.price}
                    </Typography>
                  )}
                </Box>

                <Box display="flex" gap={1} mt={1}>
                  <Button 
                    variant="outlined" 
                    component={Link}
                    to={`/products/${product.id}`}
                  >
                    View Product
                  </Button>
                  <Button 
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton
          onClick={() => scroll('right')}
          sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductSlider; 