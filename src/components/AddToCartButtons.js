import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/shoppingCart/actions";

export default function AddToCart(props) {
  const dispatch = useDispatch();
  const addingHandler = () => {
    dispatch(addToCart(props.id));
  };

  return (
    <div>
      <button>-</button>
      {props.quantity} in cart
      <button onClick={addingHandler}>+</button>
    </div>
  );
}
