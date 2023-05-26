const products = [
  { id: 1, name: 'bat', price: 50 },
  { id: 2, name: 'cow', price: 40 },
  { id: 3, name: 'lemon', price: 50 },
  { id: 4, name: 'milf', price: 100 },
  { id: 5, name: 'tear', price: 45 },
  { id: 6, name: '' },
  { id: 7, name: '' },
  { id: 8, name: '' },
  { id: 9, name: '' },
  { id: 10, name: '' },
];

export function getProducts(id) {
  return products.find((ceramic) => ceramic.id === id);
}
