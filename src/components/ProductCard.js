import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
	return (
		<div key={props.id} className="ProductCard">
			<div className="product">
				<div className="title">
					<Link className="" to={`/product/${props.id}`}>
						<h3>{props.name}</h3>
						<img src={props.image} height="300px" />
					</Link>
				</div>
				<div className="meta">
					{props.tags.map((tag, i) => {
						return (
							<span key={i} className="tag">
								{tag}
							</span>
						);
					})}
				</div>
				<p>
					€{props.price} <button>Add to cart</button>
				</p>
			</div>
		</div>
	);
}
