import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/shoppingCart/actions";

export default function AddToCart(props) {
  const dispatch = useDispatch();
  const subtractHandler = () => {
    dispatch(removeFromCart(props.id));
  };
  const addingHandler = () => {
    dispatch(addToCart(props.id));
  };

  return (
    <div>
      <button onClick={subtractHandler}>-</button>
      {props.quantity} in cart
      <button onClick={addingHandler}>+</button>
    </div>
  );
}
