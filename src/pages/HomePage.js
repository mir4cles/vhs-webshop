import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../store/productList/selectors";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
	const products = useSelector(selectProducts);
	console.log("products are", products);

	return (
		<div>
			<div>
				<section>
					<h2>Products</h2>
					<div>
						{products.products.map((product) => {
							return (
								<ProductCard
									key={product.id}
									id={product.id}
									name={product.name}
									tags={product.tags}
									image={product.image}
									price={product.price}
								/>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}
