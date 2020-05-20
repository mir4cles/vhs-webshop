import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	selectProducts,
	selectProductsWithTag,
} from "../store/productList/selectors";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
	const [tag, setTag] = useState("all");

	const products = useSelector(selectProducts);
	// console.log("products are", products);

	const productsWithTag = useSelector(selectProductsWithTag(tag));
	console.log(productsWithTag);

	return (
		<div>
			<div>
				<section>
					<h2>Products</h2>

					<div>
						<div>
							<h3>
								Filter by{""}
								<select value={tag} onChange={(e) => setTag(e.target.value)}>
									<option key="0" value="all">
										all
									</option>
									<option key="1" value="horror">
										horror
									</option>
									<option key="2" value="comedy">
										comedy
									</option>
									<option key="3" value="animation">
										animation
									</option>
									<option key="4" value="drama">
										drama
									</option>
								</select>
							</h3>
							<ul>
								{tag === "all"
									? products.products.map((product) => {
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
									  })
									: productsWithTag.map((product) => {
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
							</ul>
						</div>
					</div>
					{/* <div>
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
					</div> */}
				</section>
			</div>
		</div>
	);
}
