'use client';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { products } from '../../Database/ceramics';
import styles from './page.scss';

export const metadata = {
  title: 'Products',
  description: 'All products',
};

export default function ProductsPage() {
  const [cartItems, setCartItems,] = useState([]);


  const handleAddToCart = (productId) => {
    // Find the product by ID
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      // Add the product to the cart items
      cartItems.push(productToAdd);
      setCartItems(cartItems);
     // console.log(`Product ${productId} added to cart`);
     alert(`Product ${productId} added to cart`);
     console.log(cartItems);
      //sendProducts();
    }
  };
/*function sendProducts(){
  Router.push({
    pathname: '/cart',
    query: { cartItems: cartItems },
  }).catch((err) => console.log(err));
*/
  return (
    <main>
      <h1>These are hand-made ceramics</h1>
      <div className={styles.gridContainer}>
        <Link href="/">Home page</Link>
        <Link href="/cart">Cart</Link>
        {products.map((product) => (
          <div className={styles.gridItem} key={`product-${product.id}`}>
            <Image src={product.image} alt={`Product ${product.id}`} width={200} height={200} />
            <div className={styles.products}>
              <Link href={`/products/${product.id}`} data-test-id={`product-${product.id}`}>
                <span className={styles.products}>{product.name}</span>
              </Link>
              {product.price && <p>Price: {product.price} euros</p>}
              <div className={styles.quantityButtons}>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={styles.addToCartButton}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

