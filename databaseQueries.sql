-- Create products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL
);

-- Insert data into products table
INSERT INTO products (name, price, category)
VALUES
  ('Stack Vase', 50, 'ceramics'),
  ('Cow Mug', 40, 'ceramics'),
  ('MILF Vase', 100, 'ceramics'),
  ('Tear Face Mug', 45, 'ceramics'),
  ('Ceramic Vampire', 100, 'ceramics'),
  ('Egg Face Plate', 100, 'ceramics'),
  ('Dog Vase', 100, 'ceramics'),
  ('Lemon Mug', 50, 'ceramics'),
  ('Cute Face Tea Pot Set', 100, 'ceramics'),
  ('Bat Flower Hanging Pot', 50, 'ceramics');

-- Read products

SELECT * FROM products;
