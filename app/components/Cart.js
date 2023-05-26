// Cart.js
import React from 'react';

export default function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((itemId) => (
        <p key={itemId}>Item ID: {itemId}</p>
      ))}
    </div>
  );
}
