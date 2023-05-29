import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateQuantity } from './actions';

export default function ProductQuantityForm({ productId }) {
  const [quantity, setQuantity] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.replace(router.asPath); // Example: Refresh the current page
    await updateQuantity(productId, quantity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <br />
      <button data-test-id="product-add-to-cart" type="submit">
        Add to cart
      </button>
    </form>
  );
}
