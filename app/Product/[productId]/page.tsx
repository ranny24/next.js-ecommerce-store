import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../../Database/ceramics';
import style from '../../page.module.scss';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ProductCartForm from './ProductCartForm';

export const metadata = {
  title: 'Single Product Page',
  description: 'This is our Single Product Page',
};

export const dynamic = 'force-dynamic';

type Props = {
  params: { productId: string };
};



export default async function ProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

/*  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const cartToUpdate = carts.find((cart: { id: number }) => {
    return cart.id === product.id; */

 */


  return (
    <main className={style.productMainContainer}>
      <div className={style.productContentContainer}>
        <Image
           src={`/images/${singleProduct.name}.png`}}
          alt={`Product ${product.id}`}
          width={200}
          height={200}
        />
        <div className={style.productInfoContainer}>
          <h1>{singleProduct.name}</h1>
          <br />
          <h4>{singleProduct.price} $</h4>
          <br />
          <p>{singleProduct.description}</p>
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
