import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/shoppingCart/actions";
import { selectQuantityOfProductInCart } from "../store/shoppingCart/selectors";

export default function AddToCart(props) {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantityOfProductInCart(props.id));
  //console.log("quantity is:", quantity);

  const subtractHandler = () => {
    if (quantity) {
      dispatch(removeFromCart(props.id));
    }
  };
  const addingHandler = () => {
    dispatch(addToCart(props.id));
  };

  return (
    <div>
      <button onClick={subtractHandler}>-</button>
      {quantity ? quantity + " in " : " add to "} cart
      <button onClick={addingHandler}>+</button>
    </div>
  );
}
