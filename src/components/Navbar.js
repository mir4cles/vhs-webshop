import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
						Shopping Cart
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
