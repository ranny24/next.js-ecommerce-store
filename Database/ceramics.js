export const products = [
  {
    id: 1,
name: 'Stack Vase',
category: 'ceramics',
price: '50',
image: '/images/stack.png',
description: 'Introducing the Stack Vase, the perfect accessory for the full stack developer in you. With its multi-layered design, it represents the complexity and versatility of your coding skills. Just like a full stack developer handles both front-end and back-end tasks, this vase beautifully holds flowers from all layers of the garden stack. Its a decorative masterpiece that will make your space bloom with creativity and code.',
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
    description: 'Add a touch of canine charm to your home with our delightful Dog Vase. This ceramic masterpiece features a playful dog design, showcasing the whimsical nature of mans best friend. With its intricate details and expert craftsmanship, the Dog Vase is not only a functional vase but also a work of art. Whether youre a dog lover or simply appreciate unique home decor, this vase is sure to bring a smile to your face. Display your favorite flowers or use it as a standalone decorative piece to infuse your space with joy and character. Embrace the playful spirit of our furry friends with the Dog Vase.',
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

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
