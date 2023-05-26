import Link from 'next/link';
import React, { useState } from 'react';
import Cart from './Cart'; // Import the Cart component

export default function CartNavigation() {
  const [cartItems, setCartItems] = useState([]); // Create state for cart items

  // Function to add an item to the cart
  const addItemToCart = (itemId) => {
    setCartItems((prevCartItems) => [...prevCartItems, itemId]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((id) => id !== itemId));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>

      {/* Render the Cart component and pass the cartItems prop */}
      <Cart cartItems={cartItems} />
    </nav>
  );
}
