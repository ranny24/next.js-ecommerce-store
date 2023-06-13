import { Sql } from 'postgres';

export const products= [

  {
    id: 1,
name: 'Stack Vase',
category: 'ceramics',
price: '50',
image: '/images/stack.png',
description: 'Introducing the Stack Vase, the perfect accessory for the full stack developer in you.',
  },

  {
    id: 2,
    name: 'Cow Mug',
    category: 'ceramics',
    price: '40',
    image: '/images/cow.png',
    description: 'Start your day with a smile with this adorable cow-shaped ceramic mug. Its charming design and sturdy handle make it a delightful choice for enjoying your favorite beverages.',
  },

  {
    id: 3,
    name: 'MILF Vase',
    category: 'ceramics',
    price: '100',
    image: '/images/frog.png',
    description: 'Express your love for frogs with this humorous MILF (Man I Love Frogs) ceramic vase. Its quirky design and spacious capacity make it a fun and functional addition to your vase collection.',
  },
  {
    id: 4,
    name: 'Tear Face Mug',
    category: 'ceramics',
    price: '45',
    image: '/images/tear.png',
    description: 'Add a touch of emotion to your daily coffee ritual with this expressive tear face ceramic mug. Its unique design and high-quality craftsmanship make it a conversation starter.',
  },
  {
    id: 5,
    name: 'Ceramic Vampire',
    category: 'ceramics',
    price: '100',
    image: '/images/vampire.png',
    description: 'Unleash your inner vampire enthusiast with this intricately detailed ceramic vampire figurine. Its dark and mysterious charm will make a captivating addition to your collection.',
  },
  {
    id: 6,
    name: 'Egg Face Plate',
    category: 'ceramics',
    price: '100',
    image: '/images/egg.png',
    description: 'Serve your meals with a dash of whimsy on this ceramic plate featuring a charming egg face design. Its durable construction and playful aesthetic make it a delightful choice for any dining occasion.',
  },
  {
    id: 7,
    name: 'Dog Vase',
    category: 'ceramics',
    price: '100',
    image: '/images/dog.png',
    description: 'Add a touch of canine charm to your home with our delightful Dog Vase.  Embrace the playful spirit of our furry friends with the Dog Vase.',
  },
  {
    id: 8,
    name: 'Lemon Mug',
    category: 'ceramics',
    price: '50',
    image: '/images/lemon.png',
    description: 'Sip your morning coffee or tea from this refreshing lemon-shaped ceramic mug. Its vibrant color and comfortable handle will brighten up your day.',
  },
  {
    id: 9,
    name: 'Cute Face Tea Pot Set',
    category: 'ceramics',
    price: '100',
    image: '/images/tea.png',
    description: 'Indulge in the charm of this delightful tea pot set, featuring cute face designs on each tea pot and a matching mug. The set is perfect for enjoying a cozy tea time with friends or loved ones.',
  },
{
  id: 10,
    name: 'Bat Flower Hanging Pot',
    category: 'ceramics',
    price: '50',
    image: '/images/bat.png',
    description: 'A unique ceramic hanging pot in the shape of a bat flower, perfect for displaying your favorite plants and adding a touch of whimsy to your space.',
}
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, category, price, image, description)
    VALUES
      (${product.name}, ${product.category}, ${product.price}, ${product.image}, ${product.description})
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
    `;
  }
}
