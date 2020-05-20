import React, { useState, useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/productList/selectors";
import ProductCard from "../components/ProductCard";
// import { sortByPrice, sortByPopularity } from "../store/productList/actions";

export default function HomePage() {
	// const dispatch = useDispatch();
	const [tag, setTag] = useState("all");
	const [sort, setSort] = useState("popularity");

	const products = useSelector(selectProducts(tag, sort));
	// console.log("products are", products);

	// const sortByInput = (event) => {
	// 	console.log(event);
	// 	// if (sort === "popularity") {
	// 	// 	dispatch(sortByPopularity);
	// 	// } else {
	// 	// 	dispatch(sortByPrice);
	// 	// }
	// };

	return (
		<div>
			<section>
				<h2>Products</h2>
				<div>
					Filter by
					<select value={tag} onChange={(event) => setTag(event.target.value)}>
						<option value="all">all</option>
						<option value="horror">horror</option>
						<option value="comedy">comedy</option>
						<option value="animation">animation</option>
						<option value="drama">drama</option>
						Sort by
					</select>
				</div>
				<div>
					Sort by {""}
					<select
						value={sort}
						onChange={(event) => setSort(event.target.value)}
					>
						<option value="popularity">popularity</option>
						<option value="price">price</option>
					</select>
				</div>
				<div>
					<ul>
						{products.map((product) => {
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
						{/* {tag === "all"
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
									  })} */}
					</ul>
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
	);
}
