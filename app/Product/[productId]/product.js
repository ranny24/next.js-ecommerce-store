import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../../Database/ceramics';
import styles from './page.module.scss';

export default function ProductPage() {
  return (
    <main>
      <h1> These are hand made ceramics</h1>
      <div className={styles.oneMug}>
        {ceramics.map((ceramic) => {
          return (
            <div className={styles.mug} key={`word-div-${ceramic.id}`}>
              <Image scr={`/${ceramic.image}`} width={200} height={200} />
              <Link
                href={`/product/${ceramic.id}`}
                data-test-id={`product-${ceramic.id}`}
              >
                {ceramic.name}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
