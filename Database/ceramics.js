export const products = [
  { id: 1, name: 'bat', price: 50, image: '/images/bat.png' },
  { id: 2, name: 'cow', price: 40, image: '/images/cow.png' },
  { id: 3, name: 'lemon', price: 50, image: '/images/lemon.png' },
  { id: 4, name: 'milf', price: 100, image: '/images/milf.png' },
  { id: 5, name: 'tear', price: 45, image: '/images/tear.png' },
  { id: 6, name: 'vampire', price: 100, image: '/images/vampire.png'},
  { id: 7, name: 'egg', price: 100, image: '/images/egg.png'},
  { id: 8, name: 'mushroom', price: 100, image: '/images/mushroom.png'},
  { id: 9, name: 'tea', price: 100, image: '/images/tea.png'},
  { id: 10, name: 'Product 10', price: 100, image: '/images/milf.png'},
];

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
