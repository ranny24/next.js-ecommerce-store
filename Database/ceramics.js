export const products = [
  { id: 1, name: 'bat', price: 50, image: '/images/bat.png'},
  { id: 2, name: 'cow', price: 40, image: '/images/cow.png' },
  { id: 3, name: 'lemon', price: 50, image: '/images/lemon.png' },
  { id: 4, name: 'milf', price: 100 , image: '/image/milf.png'},
  { id: 5, name: 'tear', price: 45, image:'/image/tear.png' },
  { id: 6, name: '' },
  { id: 7, name: '' },
  { id: 8, name: '' },
  { id: 9, name: '' },
  { id: 10, name: '' },
];

export function getProducts(id) {
  return products.find((product) => product.id === id);
}
