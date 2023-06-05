import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../../Database/ceramics';
import style from '../../page.module.scss';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ProductQuantityForm from './ProductQuantityForm';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const product = await getProductById(Number(params.productId));

  if (!product) {
    notFound();
  }

  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart) => {
    return cart.id === product.id;
  });

  return (
    <main className={style.productMainContainer}>
      <div className={style.productContentContainer}>
        <Image
          src={product.image}
          alt={`Product ${product.id}`}
          width={200}
          height={200}
        />
        <div className={style.productInfoContainer}>
          <h1>{product.name}</h1>
          <br />
          <h4>{product.price} $</h4>
          <br />
          <p>{product.description}</p>
          <br />
          <div>
            <span>In Cart: </span>
            <span>{cartToUpdate ? cartToUpdate.number : 0}</span>
            <br />
            <br />

            <ProductQuantityForm product={product} />
            <br />
            <Link href={`/`}> Go back to home page</Link>
            <br />
            <Link href={`/cart`}> Go to cart</Link>
            <br />
            <Link href={`/product`}> Go to product</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
