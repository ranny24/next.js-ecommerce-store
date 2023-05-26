import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../Database/ceramics';
import styles from './page.scss';

export default function ProductsPage() {
  return (
    <main>
      <h1>These are hand-made ceramics</h1>
      <div className={styles.gridContainer}>
        {products.map((product) => {
          return (
            <div className={styles.gridItem} key={`product-${product.id}`}>
              <Image src={product.image} alt={`Product ${product.id}`} width={200} height={200} />
              <div className={styles.details}>
                {product.name && (
                  <Link href={`/product/${product.id}`} data-test-id={`product-${product.id}`}>
                    {product.name}
                  </Link>
                )}
                {product.price && (
                  <p>Price: {product.price} euros</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
