import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import "./AddToCart.css";

function AddToCart({ cart, handleDec, handleInc, handleRemove }) {
  // Calculate total price
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 10;
  const grandTotal = subtotal + tax + shipping;

  return (
    <div className="cart-container">
      {/* Left Side: Cart Items */}
      <div className="cart-items">
        <Link to="/" className="back-btn">
          <FaArrowLeft size={16} /> Continue Shopping
        </Link>
        <h2>Your Cart ({cart.length})</h2>

        {/* Table Headers */}
        <div className="cart-header">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
        </div>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <img src={item.images} alt={item.name} className="product-image" />
              <div>
                <h4 className="product-name">{item.title}</h4>
                <p className="brand-name">{item.brand}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="quantity-controls">
              <button className="qty-btn" onClick={() => handleDec(item.id)}>
                <FaMinus />
              </button>
              <span className="quantity">{item.quantity}</span>
              <button className="qty-btn" onClick={() => handleInc(item.id)}>
                <FaPlus />
              </button>
            </div>

            {/* Price */}
            <div className="price">${item.price.toFixed(2)}</div>

            {/* Total Price */}
            <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>

            {/* Remove Button */}
            <button className="remove-btn" onClick={() => handleRemove(item.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Right Side: Order Summary */}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
          <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
          <p>Tax (10%): <span>${tax.toFixed(2)}</span></p>
          <hr />
          <p className="total">Total: <span>${grandTotal.toFixed(2)}</span></p>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default AddToCart;
