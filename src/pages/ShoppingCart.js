import React from "react";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../store/selectors";

export default function ShoppingCart() {
  const cart = useSelector(selectShoppingCart);

  //console.log("cart looks like:", cart);

  return (
    <div>
      <div>
        <section>
          <h2>Your Shoppingcart</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity </th>
                <th>Product Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem, index) => {
                return (
                  <tr key={index}>
                    <td>{cartItem.product.name}</td>
                    <td>{cartItem.quantity}x</td>
                    <td>€{cartItem.product.price}</td>
                    <td>€{cartItem.quantity * cartItem.product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
