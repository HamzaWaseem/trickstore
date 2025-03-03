import { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import axios from 'axios';
import ProductSlider from '../components/ProductSlider';
import CategoryGrid from '../components/CategoryGrid';
import HeroSection from '../components/HeroSection';
import FloatingCart from '../components/FloatingCart';
import FloatingProfile from '../components/FloatingProfile';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:8000',  // Django development server
  withCredentials: true
});

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/home-data/');
        setHomeData(response.data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    const fetchCartCount = async () => {
      try {
        const response = await api.get('/api/cart-count/');
        setCartCount(response.data.count);
      } catch (error) {
        console.error('Error fetching cart count:', error);
      }
    };

    fetchData();
    fetchCartCount();
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <Navbar />
      <FloatingProfile />
      <FloatingCart count={cartCount} />

      <HeroSection data={homeData.hero_section} />

      <Container 
        maxWidth="lg"
        sx={{
          mt: 4,
          mb: 8,
          flex: 1,
          '& > .MuiBox-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '2rem',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <Box my={4}>
          <CategoryGrid 
            categories={homeData.featured_categories} 
            title="Featured Categories" 
          />
        </Box>

        <Box my={4}>
          <ProductSlider 
            products={homeData.products}
            title="New Products"
            viewAllLink="/products"
          />
        </Box>

        <Box my={4}>
          <ProductSlider 
            products={homeData.popular_products}
            title="Popular Products"
            viewAllLink="/products"
          />
        </Box>

        <Box my={4}>
          <ProductSlider 
            products={homeData.featured_products}
            title="Featured Products"
            viewAllLink="/products"
          />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default HomePage; 