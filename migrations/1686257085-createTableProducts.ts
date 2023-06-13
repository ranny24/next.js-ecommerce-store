import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;

};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(255) NOT NULL,
      price integer NOT NULL,
      image varchar(255) NOT NULL,
      category varchar(255) NOT NULL,
      description varchar(255) NOT NULL

    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
