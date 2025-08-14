const Cart = ({ cart, clearCart, removeFromCart }) => {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some movies to your cart to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.movie.title}</h3>
              <p>Showtime: {item.showtime}</p>
              <p>Seats: {item.seats.join(', ')}</p>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h3>Total Items: {cart.length}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
