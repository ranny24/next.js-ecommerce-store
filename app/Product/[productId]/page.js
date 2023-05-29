import Image from 'next/image';
import { useRouter } from 'next/router';
import { getProductById } from '../../../Database/ceramics';
import ProductQuantityForm from './ProductQuantityForm';

export default function ProductPage({ params }) {
  const router = useRouter();
  const productId = Number(params.productId); // Convert the string into a number
  const singleProduct = getProductById(productId);

  if (!singleProduct) {
    router.push('/not-found'); // Example: navigate to a "not-found" page
    return null;
  }

  return (
    <main>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name}.jpg`}
        width={400}
        height={500}
      />
      <h1>{singleProduct.name}</h1>
      <h5>{singleProduct.description}</h5>
      <h6 data-test-id="product-price">{singleProduct.price}EUR</h6>
      <p>Quantity</p>
      <div>
        <ProductQuantityForm productId={productId} />
      </div>
      <p>
        Some text here
        <br />To ensure...
      </p>
    </main>
  );
}
