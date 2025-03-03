import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#3e454c',
    },
    secondary: {
      main: '#e5bc41',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/signup" element={<div>Signup Page</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
