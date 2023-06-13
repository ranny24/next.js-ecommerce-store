// import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;

};


export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
 `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
