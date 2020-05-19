import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShoppingCart } from "../store/selectors";

export default function Navbar() {
  const navBarCart = useSelector(selectShoppingCart).length;
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/shopping-cart"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            {navBarCart
              ? navBarCart + " products in cart"
              : "Shopping Cart is empty"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
