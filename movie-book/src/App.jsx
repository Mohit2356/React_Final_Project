import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (movie, showtime, seats) => {
    setCart([...cart, { movie, showtime, seats, id: Date.now() }]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
