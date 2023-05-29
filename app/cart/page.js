'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cartItems, setCartItems } from '../product/page.js';

// import styles from './cart.module.scss';


export default function CartPage() {
  const router = useRouter();
  const props = router.query;
  console.log(props.cartItems);

  return (
    <div>
      <div>Product </div>
      <div>Name</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Total</div>

      <h3>Cart Total</h3>
      <h2>00, 00</h2>
      <div>
        <Link href="/product">Continue Shopping</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </div>
  );
}
