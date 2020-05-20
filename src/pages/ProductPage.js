import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProduct } from "../store/productList/selectors";

export default function ProductPage() {
	const { productId } = useParams("");
	const product = useSelector(selectProduct(productId));

	// useEffect(() => {
	// 	selectProduct(productId);
	// }, []);

	console.log("product in param:", productId);
	console.log("product", product);

	return (
		<div>
			<div>
				<section>
					<h2>Product Page</h2>
					<div key={product.id} className="ProductCard">
						<div className="product">
							<div className="title">
								<h3>{product.name}</h3>
								<img src={product.image} height="500px" />
							</div>
							<div className="meta">
								{product.tags.map((tag, i) => {
									return (
										<span key={i} className="tag">
											{tag}
										</span>
									);
								})}
							</div>
							<div>
								<p>{product.description}</p>
							</div>
							<div>
								<p>
									€{product.price} <button>Add to cart</button>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
