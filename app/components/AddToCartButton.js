import React from 'react';

export default function AddToCartButton({ productId }) {
  const handleAddToCart = () => {
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}
