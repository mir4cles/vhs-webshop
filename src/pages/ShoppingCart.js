import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShoppingCart } from "../store/selectors";
import { emptyShoppingCart } from "../store/shoppingCart/actions";
import AddToCart from "../components/AddToCartButtons";

export default function ShoppingCart() {
  const cart = useSelector(selectShoppingCart);
  const totalPriceArray = cart.map((item) => {
    return item.product.price * item.quantity;
  });

  const dispatch = useDispatch();
  //console.log("cart looks like:", cart);
  function emptyCart() {
    dispatch(emptyShoppingCart());
  }

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
                    <td>
                      <AddToCart
                        id={cartItem.product.id}
                        quantity={cartItem.quantity}
                      />
                    </td>
                    <td>€{cartItem.product.price}</td>
                    <td>€{cartItem.quantity * cartItem.product.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  {cart.length
                    ? "€" +
                      totalPriceArray.reduce((acc, current) => acc + current)
                    : ""}
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={emptyCart}>Empty cart</button>
        </section>
      </div>
    </div>
  );
}
