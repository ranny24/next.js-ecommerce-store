import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../Database/ceramics';
import style from '../page.module.scss';

export const metadata = {
  title: 'Products Page',
  description: 'This is our Products Page',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className={style.mainContainer}>
      <h1>These are my hand-made ceramics</h1>
      <div className={style.productContainer}>
        {products.map((product) => {
          return (
            <div
              className={style.productContent}
              key={`product-div-${product.id}`}
            >
              <Image
                src={`${product.image}`}
                width={200}
                height={200}
                alt="Ceramics"
              />
              <Link
                href={`/products/${product.id}`}
                data-test-id={`product-${product.id}`}
              >
                {product.name} {product.price}$
              </Link>
              
                          </div>
          );
        })}
      </div>
    </main>
  );
}
