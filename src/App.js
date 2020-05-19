import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<header>
				<h1>VHS Movies Webshop</h1>
			</header>
			<nav>
				<Navbar />
			</nav>
			<main>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/product/:productId" component={ProductPage} />
					<Route path="/shopping-cart" component={ShoppingCart} />
					<Route path="/" component={NotFound} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
