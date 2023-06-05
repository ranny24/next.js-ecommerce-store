import Link from 'next/link';
import { getProductsById } from '../../Database/ceramics';
import style from '../page.module.scss';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import CheckOutForm from './CheckOutForm';

export default async function CheckoutPage() {
  const products = await getProductsById();
  const cartCookies = getCookie('cart');

  const carts = !cartCookies ? [] : parseJson(cartCookies);

  const orders = carts.map((cart) => {
    const orderItem = products.find((product) => product.id === cart.id);
    return {
      id: orderItem.id,
      name: orderItem.name,
      price: orderItem.price,
      quantity: cart.number,
    };
  });

  const totalSum = carts.reduce((sum, item) => sum + parseInt(item.number), 0);

  const totalPrice = orders.reduce(
    (sum, item) => sum + parseInt(item.quantity) * parseInt(item.price),
    0,
  );

  return (
    <main className={style.cartMainContainer}>
      <div>
        <CheckOutForm />
      </div>
      <div>
        <h2>Cart summary</h2>
        {orders.length > 0 && (
          <>
            {orders.map((order) => {
              return (
                <div
                  className={style.cartContentContainer}
                  key={`cart-div-${order.id}`}
                >
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <span>{order.quantity}x</span>
                        </td>
                        <td>
                          <h3>{order.name}</h3>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>{order.price} $</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}

            <br />
            <br />
            <div>
              <span>
                Total Quantity: {totalSum} Total Price: {totalPrice}$
              </span>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
