import { Link } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';
import logoImage from '../assets/logo1.png';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logoImage} alt="MovieBook Logo" className="logo-image" />
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/movies" className="nav-link">
            <span>Movies</span>
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
